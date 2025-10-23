// exams.js - Examination related information

const examResponses = [
    {
        keywords: ["exam", "pariksha", "test"],
        answer: "📝 Exam Pattern:\n• Quarterly exams (4 times/year)\n• Unit tests monthly\n• Half-yearly & Annual\n• Board exam (10th)\n• Continuous assessment\n• Date sheet advance में issue"
    },
    {
        keywords: ["exam schedule", "date sheet"],
        answer: "📅 Exam Schedule:\n• Quarterly: July, Oct, Jan, March\n• Date sheet: 15 days पहले\n• Admit card mandatory\n• Timing: 8:30 AM start\n• Duration: 1-3 hours (class-wise)"
    },
    {
        keywords: ["board exam", "10th exam"],
        answer: "🎓 10th Board Exam:\n• UP Board examination\n• Feb-March timing\n• School is exam center\n• Practical exams included\n• Admit card from board\n• Results: April-May"
    },
    {
        keywords: ["admit card", "pravesh patra"],
        answer: "🎫 Admit Card:\n• Issue: 1 week before exam\n• Mandatory for entry\n• Check details carefully\n• Fees clear होना जरूरी\n• Lost card: Duplicate fee Rs 100"
    },
    {
        keywords: ["passing marks", "uttirnank"],
        answer: "✅ Passing Criteria:\n• Internal exams: 33% required\n• Board exam: 33% in each subject\n• Overall pass percentage maintained\n• Grace marks policy available"
    },
    {
        keywords: ["result", "marks", "parinaam"],
        answer: "📊 Result Declaration:\n• Internal exams: 2 weeks में\n• Board results: April-May\n• Mark sheets distributed\n• Online checking available\n• Parent signature required"
    },
    {
        keywords: ["re-exam", "compartment", "fail"],
        answer: "🔄 Re-examination:\n• Supplementary exam July में\n• Failed students eligible\n• Separate fees applicable\n• Counselling provided\n• Extra support given"
    },
    {
        keywords: ["practical exam"],
        answer: "🔬 Practical Exams:\n• Science & Computer subjects\n• 20-30% marks weightage\n• Internal + External examiners\n• Lab work assessed\n• Project work included"
    },
    {
        keywords: ["syllabus coverage", "pura"],
        answer: "📖 Syllabus Completion:\n• Time par complete होता है\n• Revision classes held\n• Mock tests conducted\n• Previous papers practice\n• Doubt sessions arranged"
    },
    {
        keywords: ["answer sheet", "copy checking"],
        answer: "📄 Answer Sheet:\n• Fair checking system\n• Two teachers verify\n• Students can view copies\n• Re-checking option (fee)\n• Marks calculation transparent"
    }
];

function getExamResponse(userInput) {
    userInput = userInput.toLowerCase().trim();
    
    for (let qa of examResponses) {
        for (let keyword of qa.keywords) {
            if (userInput.includes(keyword)) {
                return qa.answer;
            }
        }
    }
    return null;
}
