const { expect } = require('chai');
const FAQ = require('../models/FAQ');

describe('FAQ Model', () => {
    it('should fallback to English if translation is missing for a given language', () => {
        const faq = new FAQ({
            question: { en: 'Hello' },
            answer: { en: 'World' },
        });

        // Ensure that the 'hi' translation falls back to English
        const translatedFAQ = faq.getTranslated('hi');
        expect(translatedFAQ.question).to.equal('Hello');
        expect(translatedFAQ.answer).to.equal('World');
    });
});
