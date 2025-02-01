const validateFAQ = (req, res, next) => {
    const { question, answer } = req.body;

    // Ensure that both question and answer are strings and are not empty
    if (typeof question !== 'string' || typeof answer !== 'string') {
        return res.status(400).json({ message: 'Question and answer must be strings' });
    }

    if (!question.trim() || !answer.trim()) {
        return res.status(400).json({ message: 'Question and answer cannot be empty' });
    }

    next();
};

module.exports = validateFAQ;
