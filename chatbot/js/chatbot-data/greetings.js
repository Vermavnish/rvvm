// greetings.js - All greeting and basic conversation responses

const greetingResponses = [
    {
        keywords: ["hello", "helo", "hllo"],
        answer: "Hello! 👋 मैं RVVM Virtual Assistant हूँ। आप school के बारे में क्या जानना चाहते हैं?"
    },
    {
        keywords: ["hi", "hii", "hiii", "hy"],
        answer: "Hi there! Welcome to Radhika Vilas Vidya Mandir chatbot. मैं आपकी क्या मदद कर सकता हूँ?"
    },
    {
        keywords: ["hey", "heyy"],
        answer: "Hey! How can I help you today with school information?"
    },
    {
        keywords: ["namaste", "namaskar", "pranam"],
        answer: "🙏 Namaste! Radhika Vilas Vidya Mandir में आपका स्वागत है। कैसे मदद करूँ?"
    },
    {
        keywords: ["good morning", "subah", "morning"],
        answer: "Good morning! ☀️ School के बारे में क्या पूछना चाहते हैं?"
    },
    {
        keywords: ["good afternoon", "dopahar"],
        answer: "Good afternoon! School admission, fees या किसी और चीज़ के बारे में पूछें।"
    },
    {
        keywords: ["good evening", "shaam", "evening"],
        answer: "Good evening! 🌆 मैं RVVM Virtual Assistant हूँ। क्या जानना चाहेंगे?"
    },
    {
        keywords: ["good night", "raat", "night"],
        answer: "Good night! 🌙 कल फिर से आना या अभी कुछ पूछना चाहते हैं?"
    },
    {
        keywords: ["bye", "goodbye", "alvida"],
        answer: "Goodbye! 👋 फिर मिलेंगे। किसी और जानकारी के लिए कभी भी वापस आएं।"
    },
    {
        keywords: ["see you", "see ya"],
        answer: "See you later! School visit करना न भूलें। Have a great day!"
    },
    {
        keywords: ["thank", "thanks", "thanku", "shukriya", "dhanyavaad"],
        answer: "You're welcome! 😊 और कुछ जानना चाहेंगे?"
    },
    {
        keywords: ["how are you", "kaise ho", "kya haal"],
        answer: "मैं बिल्कुल ठीक हूँ! 😊 आप कैसे हैं? School के बारे में कुछ पूछना चाहेंगे?"
    },
    {
        keywords: ["help", "madad", "sahayata"],
        answer: "बिल्कुल मदद करूँगा! आप पूछ सकते हैं:\n- Admission process\n- Fee structure\n- School facilities\n- Contact details\n- Exam information"
    },
    {
        keywords: ["what can you do", "kya kar sakte"],
        answer: "मैं school के बारे में सब कुछ बता सकता हूँ:\n✅ Admission\n✅ Fees\n✅ Facilities\n✅ Academics\n✅ Contact info\nक्या जानना चाहेंगे?"
    }
];

function getGreetingResponse(userInput) {
    userInput = userInput.toLowerCase().trim();
    
    for (let greeting of greetingResponses) {
        for (let keyword of greeting.keywords) {
            if (userInput.includes(keyword)) {
                return greeting.answer;
            }
        }
    }
    return null;
}
