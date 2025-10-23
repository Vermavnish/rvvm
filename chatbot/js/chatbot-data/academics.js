// academics.js - Academic information

const academicResponses = [
    {
        keywords: ["syllabus", "pathyakram", "course"],
        answer: "📖 Syllabus:\n• UP Board syllabus follow करते हैं\n• NCERT books prescribed\n• Nursery-8th: CBSE pattern\n• 9th-10th: UP Board curriculum\n• Revised syllabus yearly updated"
    },
    {
        keywords: ["medium", "language", "bhasha"],
        answer: "🗣️ Medium of Instruction:\n• Nursery-8th: English Medium\n• 9th-10th: Hindi & English Medium available\n• Language subjects: Hindi + English compulsory"
    },
    {
        keywords: ["subjects", "vishay", "padhte"],
        answer: "📚 Subjects Taught:\n• Languages: Hindi, English\n• Core: Mathematics, Science\n• Social: History, Geography, Civics\n• Additional: Computer, Drawing, PT, Music"
    },
    {
        keywords: ["homework", "grah karya"],
        answer: "📝 Homework Policy:\n• Daily reasonable homework\n• Subject-wise rotation\n• Weekend assignments\n• Project work periodically\n• Parents should monitor diary"
    },
    {
        keywords: ["class strength", "students kitne"],
        answer: "👥 Class Strength:\n• Average: 35-40 students/class\n• Nursery-2nd: Maximum 30\n• Teacher-student ratio maintained\n• Personal attention ensured"
    },
    {
        keywords: ["teacher", "adhyapak", "faculty"],
        answer: "👩‍🏫 Teaching Staff:\n• All B.Ed/D.El.Ed qualified\n• 5-10 years average experience\n• Regular training programs\n• Subject specialists\n• Dedicated & caring"
    },
    {
        keywords: ["result", "parinaam", "pass percentage"],
        answer: "🎯 Academic Results:\n• 10th Board: 95%+ pass rate\n• 9th Class: 98% promotion\n• Consistent improvement\n• District level achievers\n• Regular toppers"
    },
    {
        keywords: ["extra class", "tuition", "coaching"],
        answer: "📖 Extra Classes:\n• Free doubt clearing sessions\n• After school help available\n• Weak students special attention\n• No need for outside tuition\n• Regular tests & practice"
    },
    {
        keywords: ["practical", "lab work"],
        answer: "🔬 Practical Work:\n• Regular science practicals\n• Computer hands-on training\n• Project-based learning\n• Activity-based teaching\n• Models & experiments"
    },
    {
        keywords: ["computer education"],
        answer: "💻 Computer Education:\n• Class 1st से शुरू\n• Practical-oriented teaching\n• MS Office, programming basics\n• Internet & email training\n• Coding classes for seniors"
    },
    {
        keywords: ["sanskrit", "third language"],
        answer: "📜 Sanskrit/Languages:\n• 6th से Sanskrit optional\n• Hindi compulsory\n• English mandatory\n• Language labs available"
    },
    {
        keywords: ["study material", "notes"],
        answer: "📚 Study Material:\n• Teachers provide notes\n• Worksheets regularly\n• Previous year papers\n• Reference books in library\n• Extra material on demand"
    }
];

function getAcademicResponse(userInput) {
    userInput = userInput.toLowerCase().trim();
    
    for (let qa of academicResponses) {
        for (let keyword of qa.keywords) {
            if (userInput.includes(keyword)) {
                return qa.answer;
            }
        }
    }
    return null;
}
