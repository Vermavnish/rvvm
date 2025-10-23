// parent-queries.js - Parent communication and queries

const parentResponses = [
    {
        keywords: ["ptm", "parent meeting", "mulakaat"],
        answer: "👨‍👩‍👧 Parent-Teacher Meeting:\n• Quarterly (हर 3 महीने)\n• Mandatory attendance\n• Progress discussion\n• Individual meetings possible\n• Notice advance में\n• Saturday timing usually"
    },
    {
        keywords: ["report card", "progress report"],
        answer: "📋 Report Card:\n• After each exam\n• Detailed remarks included\n• Attendance record\n• Subject-wise performance\n• Teacher's comments\n• Parent signature required"
    },
    {
        keywords: ["attendance", "haaziri"],
        answer: "📊 Attendance:\n• Daily register maintained\n• 75% minimum required\n• Low attendance: Parent informed\n• Medical leave: Certificate needed\n• Affects board exam eligibility"
    },
    {
        keywords: ["sms", "notification", "alert"],
        answer: "📱 SMS Alerts:\n• Important updates via SMS\n• Class-wise WhatsApp groups\n• Exam schedules\n• Holiday notifications\n• Emergency alerts\n• Fee due reminders"
    },
    {
        keywords: ["complaint", "shikayat"],
        answer: "📝 Complaint/Feedback:\n• Written complaint to principal\n• Email: radhikavilaschakia@gmail.com\n• Suggestion box available\n• Phone: 070712 50111\n• Prompt action assured"
    },
    {
        keywords: ["meet principal", "pradhanacharya"],
        answer: "👔 Meet Principal:\n• Appointment required\n• Call: 070712 50111\n• Office hours: 10 AM - 2 PM\n• Serious matters priority\n• Confidential discussion assured"
    },
    {
        keywords: ["meet teacher", "adhyapak se milna"],
        answer: "👩‍🏫 Meet Teachers:\n• During recess time\n• After school (3-3:30 PM)\n• Prior permission advisable\n• PTM days best\n• Class teacher coordination"
    },
    {
        keywords: ["leave application", "chutti"],
        answer: "📄 Leave Application:\n• Written application required\n• Submit to class teacher\n• Medical leave: Doctor's certificate\n• Advance notice for planned leave\n• Homework arrangements made"
    },
    {
        keywords: ["diary", "school diary"],
        answer: "📓 School Diary:\n• Daily check करें\n• Homework notes\n• Important notices\n• Teacher remarks\n• Parent signature daily\n• Communication medium"
    }
];

function getParentResponse(userInput) {
    userInput = userInput.toLowerCase().trim();
    
    for (let qa of parentResponses) {
        for (let keyword of qa.keywords) {
            if (userInput.includes(keyword)) {
                return qa.answer;
            }
        }
    }
    return null;
}
