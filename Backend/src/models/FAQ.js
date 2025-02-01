const mongoose = require('mongoose');

// Define FAQ schema
const faqSchema = new mongoose.Schema({
    question: {
        en: { type: String, required: true, trim: true },
        hi: { type: String, trim: true },
        bn: { type: String, trim: true },
    },
    answer: {
        en: { type: String, required: true, trim: true },
        hi: { type: String, trim: true },
        bn: { type: String, trim: true },
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

// Method to get translated FAQ
faqSchema.methods.getTranslated = function (lang = 'en') {
    return {
        question: this.question[lang] || this.question.en,
        answer: this.answer[lang] || this.answer.en,
    };
};

// Static method to seed FAQ data
faqSchema.statics.seedFAQs = async function () {
    const FAQs = [
        {
            question: { en: "What is BharatFD?", hi: "BharatFD क्या है?", bn: "BharatFD কি?" },
            answer: { en: "BharatFD is a company focused on providing financial services and solutions to individuals and businesses across India.", hi: "BharatFD एक कंपनी है जो भारत भर में व्यक्तियों और व्यवसायों को वित्तीय सेवाएँ और समाधान प्रदान करने पर केंद्रित है।", bn: "BharatFD একটি কোম্পানি যা ভারত জুড়ে ব্যক্তিগত এবং ব্যবসায়িকদের আর্থিক পরিষেবা এবং সমাধান প্রদান করতে মনোনিবেশ করে।" }
        },
        {
            question: { en: "What services does BharatFD provide?", hi: "BharatFD कौन सी सेवाएँ प्रदान करता है?", bn: "BharatFD কী ধরনের সেবা প্রদান করে?" },
            answer: { en: "BharatFD provides a wide range of services, including loan facilities, investment options, and financial planning services.", hi: "BharatFD ऋण सुविधाएँ, निवेश विकल्प, और वित्तीय योजना सेवाएँ जैसी सेवाओं की एक विस्तृत श्रृंखला प्रदान करता है।", bn: "BharatFD ঋণ সুবিধা, বিনিয়োগের অপশন, এবং আর্থিক পরিকল্পনা পরিষেবাগুলি সহ বিস্তৃত পরিষেবা প্রদান করে।" }
        },
        {
            question: { en: "How can I apply for a loan at BharatFD?", hi: "BharatFD में ऋण के लिए कैसे आवेदन कर सकते हैं?", bn: "BharatFD এ ঋণের জন্য কিভাবে আবেদন করতে পারি?" },
            answer: { en: "You can apply for a loan online through our website or visit one of our branches for assistance.", hi: "आप हमारी वेबसाइट के माध्यम से ऑनलाइन ऋण के लिए आवेदन कर सकते हैं या सहायता के लिए हमारे किसी शाखा में जा सकते हैं।", bn: "আপনি আমাদের ওয়েবসাইটের মাধ্যমে অনলাইনে ঋণের জন্য আবেদন করতে পারেন অথবা সহায়তার জন্য আমাদের একটি শাখায় যেতে পারেন।" }
        },
        {
            question: { en: "What is the interest rate for loans at BharatFD?", hi: "BharatFD में ऋणों के लिए ब्याज दर क्या है?", bn: "BharatFD এ ঋণের জন্য সুদের হার কত?" },
            answer: { en: "Interest rates vary depending on the loan type and your eligibility. Please visit our website for detailed information.", hi: "ब्याज दरें ऋण प्रकार और आपकी पात्रता के आधार पर भिन्न होती हैं। कृपया विस्तृत जानकारी के लिए हमारी वेबसाइट पर जाएं।", bn: "সুদের হার ঋণের ধরন এবং আপনার যোগ্যতার উপর নির্ভর করে পরিবর্তিত হয়। বিস্তারিত তথ্যের জন্য দয়া করে আমাদের ওয়েবসাইটে যান।" }
        },
        {
            question: { en: "How can I check my loan status at BharatFD?", hi: "BharatFD में अपने ऋण की स्थिति कैसे चेक करें?", bn: "BharatFD এ আমার ঋণের স্থিতি কীভাবে চেক করতে পারি?" },
            answer: { en: "You can check your loan status by logging into your account on our website or by contacting customer support.", hi: "आप हमारी वेबसाइट पर अपने खाते में लॉग इन करके या ग्राहक सहायता से संपर्क करके अपने ऋण की स्थिति जांच सकते हैं।", bn: "আপনি আমাদের ওয়েবসাইটে আপনার অ্যাকাউন্টে লগ ইন করে বা গ্রাহক সহায়তার সাথে যোগাযোগ করে আপনার ঋণের অবস্থা চেক করতে পারেন।" }
        },
        {
            question: { en: "What is the process to invest in BharatFD's financial products?", hi: "BharatFD के वित्तीय उत्पादों में निवेश करने की प्रक्रिया क्या है?", bn: "BharatFD এর আর্থিক পণ্যগুলিতে বিনিয়োগ করার প্রক্রিয়া কী?" },
            answer: { en: "To invest, you can register on our platform, select a financial product, and follow the investment procedure provided.", hi: "निवेश करने के लिए, आप हमारे प्लेटफॉर्म पर पंजीकरण कर सकते हैं, एक वित्तीय उत्पाद का चयन कर सकते हैं, और दी गई निवेश प्रक्रिया का पालन कर सकते हैं।", bn: "বিনিয়োগ করতে, আপনি আমাদের প্ল্যাটফর্মে নিবন্ধন করতে পারেন, একটি আর্থিক পণ্য নির্বাচন করতে পারেন, এবং প্রদত্ত বিনিয়োগ প্রক্রিয়া অনুসরণ করতে পারেন।" }
        },
        {
            question: { en: "What is the customer support number for BharatFD?", hi: "BharatFD का ग्राहक सहायता नंबर क्या है?", bn: "BharatFD এর গ্রাহক সহায়তা নম্বর কী?" },
            answer: { en: "You can contact our customer support at 1800-123-4567 for any assistance.", hi: "किसी भी सहायता के लिए आप हमारे ग्राहक सहायता से 1800-123-4567 पर संपर्क कर सकते हैं।", bn: "যেকোনো সহায়তার জন্য আপনি আমাদের গ্রাহক সহায়তায় 1800-123-4567 নম্বরে যোগাযোগ করতে পারেন।" }
        },
        {
            question: { en: "How does BharatFD ensure the security of my personal data?", hi: "BharatFD मेरे व्यक्तिगत डेटा की सुरक्षा कैसे सुनिश्चित करता है?", bn: "BharatFD আমার ব্যক্তিগত তথ্যের নিরাপত্তা কীভাবে নিশ্চিত করে?" },
            answer: { en: "BharatFD employs state-of-the-art encryption and security measures to protect your personal and financial data.", hi: "BharatFD आपके व्यक्तिगत और वित्तीय डेटा की सुरक्षा के लिए अत्याधुनिक एन्क्रिप्शन और सुरक्षा उपायों का उपयोग करता है।", bn: "BharatFD আপনার ব্যক্তিগত এবং আর্থিক তথ্য সুরক্ষিত রাখতে অত্যাধুনিক এনক্রিপশন এবং নিরাপত্তা ব্যবস্থা ব্যবহার করে।" }
        },
        {
            question: { en: "Does BharatFD offer any mobile application?", hi: "क्या BharatFD कोई मोबाइल एप्लिकेशन प्रदान करता है?", bn: "BharatFD কি কোনো মোবাইল অ্যাপ্লিকেশন প্রদান করে?" },
            answer: { en: "Yes, BharatFD offers a mobile application that allows you to manage your finances, apply for loans, and track investments.", hi: "हाँ, BharatFD एक मोबाइल एप्लिकेशन प्रदान करता है जो आपको अपने वित्त का प्रबंधन करने, ऋण के लिए आवेदन करने, और निवेशों को ट्रैक करने की अनुमति देता है।", bn: "হ্যাঁ, BharatFD একটি মোবাইল অ্যাপ্লিকেশন অফার করে যা আপনাকে আপনার আর্থিক পরিচালনা করতে, ঋণের জন্য আবেদন করতে এবং বিনিয়োগ ট্র্যাক করতে সাহায্য করে।" }
        },
        {
            question: { en: "Can I get a loan from BharatFD with bad credit?", hi: "क्या मैं खराब क्रेडिट के साथ BharatFD से ऋण प्राप्त कर सकता हूँ?", bn: "খারাপ ক্রেডিটের সাথে কি আমি BharatFD থেকে ঋণ পেতে পারি?" },
            answer: { en: "Yes, BharatFD offers loans to individuals with various credit scores. Eligibility depends on various factors, including income and repayment history.", hi: "हाँ, BharatFD विभिन्न क्रेडिट स्कोर वाले व्यक्तियों को ऋण प्रदान करता है। पात्रता विभिन्न कारकों पर निर्भर करती है, जिसमें आय और पुनर्भुगतान इतिहास शामिल है।", bn: "হ্যাঁ, BharatFD বিভিন্ন ক্রেডিট স্কোরের সাথে ব্যক্তিদের ঋণ প্রদান করে। যোগ্যতা বিভিন্ন ফ্যাক্টরের উপর নির্ভর করে, যার মধ্যে আয় এবং পুনঃপেমেন্ট ইতিহাস অন্তর্ভুক্ত।" }
        }
    ];

    try {
        // Insert FAQs into the database if none exist
        const faqCount = await this.countDocuments();
        if (faqCount === 0) {
            await this.insertMany(FAQs);
            console.log("10 BharatFD FAQs seeded successfully!");
        } else {
            console.log("FAQs already exist in the database.");
        }
    } catch (error) {
        console.error('Error while seeding FAQs:', error);
    }
};

// Middleware to update `updatedAt` before saving
faqSchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    next();
});

// Middleware to update `updatedAt` before updating
faqSchema.pre('findOneAndUpdate', function (next) {
    this.set({ updatedAt: Date.now() });
    next();
});

module.exports = mongoose.model('FAQ', faqSchema);
