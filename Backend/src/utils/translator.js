const translate = require('@vitalets/google-translate-api');

// Function to auto-translate text
const autoTranslate = async (text, targetLang) => {
    try {
        const res = await translate(text, { to: targetLang });
        return res.text;
    } catch (err) {
        console.error('Translation error:', err);
        return text;
    }
};

module.exports = autoTranslate;
