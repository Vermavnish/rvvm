// fees.js - All fee and payment related queries

const feeResponses = [
    {
        keywords: ["fee structure", "fees kitni", "shulk"],
        answer: "💰 Annual Fee Structure:\n• Nursery-5th: Rs 15,000-20,000\n• 6th-8th: Rs 20,000-25,000\n• 9th-10th: Rs 25,000-30,000\n\n📞 Exact details: 070712 50111"
    },
    {
        keywords: ["monthly fees", "har mahine"],
        answer: "Fees quarterly (3 महीने में) या annually pay कर सकते हैं। Monthly option available नहीं है।"
    },
    {
        keywords: ["payment method", "kaise bharein"],
        answer: "💳 Payment Methods:\n✅ Cash (office में)\n✅ Cheque\n✅ UPI (Google Pay, PhonePe, Paytm)\n✅ Online bank transfer\n\nReceipt जरूर लें।"
    },
    {
        keywords: ["late fees", "der se", "fine"],
        answer: "⏰ Late Fee Policy:\n• Rs 10 per day (after due date)\n• Maximum fine: Rs 500\n• Exam admit card issue नहीं होगा अगर dues pending हों"
    },
    {
        keywords: ["scholarship", "chhatra vritti"],
        answer: "🎓 Scholarships Available:\n• Meritorious students\n• Orphans\n• EWS category (25% seats reserved)\n• Handicapped students\n\nApplication April-May में। Details: Principal office"
    },
    {
        keywords: ["installment", "kist mein"],
        answer: "हां, fees को 3-4 installments में pay कर सकते हैं:\n• 1st installment: Admission time\n• 2nd: After 3 months\n• 3rd: After 6 months\n• 4th: Before final exams"
    },
    {
        keywords: ["bus fees", "transport charges"],
        answer: "🚌 Transport Fees (Monthly):\n• 1-3 km: Rs 500\n• 3-5 km: Rs 800\n• 5+ km: Rs 1200\n\nSummer में discount available।"
    },
    {
        keywords: ["uniform cost", "dress price"],
        answer: "👔 Uniform Cost:\n• Boys (2 pairs): Rs 1500\n• Girls (2 pairs): Rs 1800\n• Sports dress: Rs 600\n• Shoes: Rs 400-800\n\nSchool designated shops से ही लें।"
    },
    {
        keywords: ["books cost", "kitabein"],
        answer: "📚 Books & Stationery:\n• Nursery-2nd: Rs 1000-1500\n• 3rd-5th: Rs 2000-3000\n• 6th-8th: Rs 3000-4500\n• 9th-10th: Rs 4000-6000\n\nNCERT books use होती हैं।"
    },
    {
        keywords: ["refund policy", "paise wapas"],
        answer: "💸 Fee Refund Policy:\n• Admission cancel (1 month): 50% refund\n• After 1 month: No refund\n• Annual charges: Non-refundable\n• Bus fees: Pro-rata basis"
    },
    {
        keywords: ["concession", "discount", "chhut"],
        answer: "🎁 Fee Concessions:\n• Multiple siblings: 10% discount\n• Staff children: 20% discount\n• Meritorious students: Up to 25%\n• Poor families: Case by case\n\nApplication required।"
    },
    {
        keywords: ["online payment", "upi"],
        answer: "📱 Online Payment:\n• UPI ID: radhikavilas@paytm\n• PhonePe/Google Pay: 070712 50999\n• Bank transfer details: Office से लें\n\nPayment proof save रखें।"
    },
    {
        keywords: ["receipt", "rasid"],
        answer: "हर payment पर official receipt मिलती है। Receipt safely रखें:\n• TC के लिए\n• Scholarship के लिए\n• Exam admit card के लिए"
    },
    {
        keywords: ["dues clear", "baaki fees"],
        answer: "All dues clear होने पर ही:\n✅ Exam admit card\n✅ Transfer certificate\n✅ Results\n✅ Certificates\n\nजारी होते हैं।"
    },
    {
        keywords: ["exam fees", "pariksha shulk"],
        answer: "📝 Board Exam Fees (9th-10th):\n• UP Board fees: Rs 500-1000\n• Practical fees: Rs 200-300\n• School exam fees included in annual fees\n\nBoard fees alag से pay करनी होती है।"
    }
];

function getFeeResponse(userInput) {
    userInput = userInput.toLowerCase().trim();
    
    for (let qa of feeResponses) {
        for (let keyword of qa.keywords) {
            if (userInput.includes(keyword)) {
                return qa.answer;
            }
        }
    }
    return null;
}
