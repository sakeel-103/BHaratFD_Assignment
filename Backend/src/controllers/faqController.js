const FAQ = require('../models/FAQ');
const autoTranslate = require('../utils/translator');
const { setCache } = require('../utils/cache');
const redis = require('redis');
const client = redis.createClient({ url: process.env.REDIS_URL });

client.on('connect', () => {
    console.log('Connected to Redis');
});

client.on('error', (err) => {
    console.error('Redis error:', err);
});

// Get FAQs with caching
const getFAQs = async (req, res) => {
    const lang = req.query.lang || 'en';

    try {
        // Try to get the FAQs from the Redis cache
        client.get(`faqs:${lang}`, async (err, data) => {
            if (err) {
                return res.status(500).json({ message: 'Error fetching from cache', error: err.message });
            }

            if (data) {
                return res.json(JSON.parse(data));
            } else {
                const faqs = await FAQ.find();
                const translatedFAQs = await Promise.all(
                    faqs.map(async (faq) => await faq.getTranslated(lang))
                );
                setCache(`faqs:${lang}`, translatedFAQs);

                return res.json(translatedFAQs);
            }
        });
    } catch (err) {
        return res.status(500).json({ message: 'Error fetching FAQs', error: err.message });
    }
};

// Create a new FAQ
const createFAQ = async (req, res) => {
    const { question, answer } = req.body;
    const newFAQ = new FAQ({
        question: { en: question },
        answer: { en: answer },
    });

    try {
        // Translate the question and answer for other languages
        newFAQ.question.hi = await autoTranslate(question, 'hi');
        newFAQ.answer.hi = await autoTranslate(answer, 'hi');
        newFAQ.question.bn = await autoTranslate(question, 'bn');
        newFAQ.answer.bn = await autoTranslate(answer, 'bn');

        // Save the new FAQ to the database
        await newFAQ.save();
        res.status(201).json(newFAQ);
    } catch (err) {
        return res.status(500).json({ message: 'Error during FAQ creation or translation', error: err.message });
    }
};

module.exports = { getFAQs, createFAQ };
