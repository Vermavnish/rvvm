// facilities.js - School facilities and infrastructure

const facilityResponses = [
    {
        keywords: ["facility", "suvidha", "facilities"],
        answer: "🏫 School Facilities:\n✅ Computer Lab (40 systems)\n✅ Science Lab (Physics, Chemistry, Bio)\n✅ Library (5000+ books)\n✅ Playground (2 acres)\n✅ Transport (15+ routes)\n✅ 24/7 Security\n✅ Power Backup\n✅ RO Water"
    },
    {
        keywords: ["contact", "number", "phone", "sampark"],
        answer: "📞 Contact Information:\n• Main: 070712 50111\n• Alternate: 070712 50999\n• Email: radhikavilaschakia@gmail.com\n• WhatsApp: +91 70712 50999\n\n⏰ Office Hours: 8 AM - 3 PM (Mon-Sat)"
    },
    {
        keywords: ["location", "address", "kahan hai"],
        answer: "📍 School Address:\nSH-1B, Chakia (Dalpatpur)\nBallia, Uttar Pradesh\nIndia\n\n🗺️ Google Maps: Search 'Radhika Vilas Vidya Mandir Chakia'"
    },
    {
        keywords: ["timing", "time", "samay"],
        answer: "🕐 School Timings:\n• Monday-Saturday: 8:00 AM - 3:00 PM\n• Sunday: Holiday\n• Summer (April-May): 8 AM - 12:30 PM\n• Office: 8 AM - 3 PM"
    },
    {
        keywords: ["bus", "transport", "gaadi"],
        answer: "🚌 School Transport:\n• 15+ routes covering nearby areas\n• Morning pickup & afternoon drop\n• GPS tracked buses\n• Lady attendant available\n• Safety features compliant\n\nDetails: 070712 50111"
    },
    {
        keywords: ["library", "pustakalaya", "books"],
        answer: "📚 Library Facilities:\n• 5000+ books collection\n• Newspapers & magazines\n• Reading room\n• Digital library\n• Issue system: 2 books/week\n• Timings: 9 AM - 2 PM"
    },
    {
        keywords: ["computer lab", "it lab"],
        answer: "💻 Computer Lab:\n• 40 latest computers\n• Windows & educational software\n• Internet connectivity\n• Projector facility\n• Student-computer ratio: 2:1\n• Practical classes from Class 1"
    },
    {
        keywords: ["science lab", "vigyan prashala"],
        answer: "🔬 Science Laboratories:\n• Physics Lab (apparatus equipped)\n• Chemistry Lab (safe chemicals)\n• Biology Lab (specimens, models)\n• Regular practicals\n• Safety equipment available"
    },
    {
        keywords: ["playground", "maidan", "sports ground"],
        answer: "⚽ Sports Facilities:\n• 2 acre playground\n• Cricket pitch\n• Football ground\n• Volleyball court\n• Basketball court\n• Athletics track\n• Indoor: Table tennis, chess, carrom"
    },
    {
        keywords: ["security", "suraksha"],
        answer: "🛡️ Security Features:\n• 24/7 trained security guards\n• CCTV cameras (entire campus)\n• Visitor register system\n• Gate monitoring\n• Emergency protocols\n• Fire safety equipment"
    },
    {
        keywords: ["fire safety", "aag"],
        answer: "🧯 Fire Safety:\n• Fire extinguishers on each floor\n• Fire alarm system\n• Emergency exits clearly marked\n• Regular fire drills\n• Staff training\n• Fire NOC obtained"
    },
    {
        keywords: ["power backup", "bijli"],
        answer: "⚡ Power Backup:\n• Generator (full campus coverage)\n• Inverters in each classroom\n• Uninterrupted classes\n• Lab equipment protected\n• Emergency lighting"
    },
    {
        keywords: ["drinking water", "pani"],
        answer: "💧 Drinking Water:\n• RO purified water\n• Coolers on each floor\n• Regular quality testing\n• Separate taps for boys/girls\n• Water tanks cleaned quarterly"
    },
    {
        keywords: ["toilet", "washroom"],
        answer: "🚻 Washroom Facilities:\n• Separate boys-girls toilets\n• Clean & hygienic\n• Regular maintenance\n• Liquid soap & sanitizer\n• Handicapped-friendly toilets"
    },
    {
        keywords: ["medical", "first aid", "doctor"],
        answer: "🏥 Medical Facilities:\n• Qualified nurse available\n• First aid room\n• Emergency medicines\n• Doctor on call\n• Immediate parent notification\n• Tie-up with nearby hospital"
    },
    {
        keywords: ["canteen", "tiffin", "lunch"],
        answer: "🍽️ Food Arrangement:\n• No canteen currently\n• Students bring tiffin\n• Hygienic eating area\n• Drinking water available\n• Lunch break: 12:30-1:00 PM"
    },
    {
        keywords: ["uniform", "dress code"],
        answer: "👔 Uniform Details:\n• Monday-Friday: Full uniform\n• Saturday: Sports dress\n• Winter: Sweater/blazer allowed\n• Shoes: Black polished\n• ID card mandatory\n• Hair: Neatly tied (girls)"
    },
    {
        keywords: ["classroom", "kamra"],
        answer: "🎓 Classrooms:\n• Spacious & well-ventilated\n• Proper lighting\n• Comfortable furniture\n• Smart boards (6th-10th)\n• Notice boards\n• Student capacity: 35-40"
    },
    {
        keywords: ["auditorium", "hall"],
        answer: "🎭 Auditorium:\n• 300 seating capacity\n• AC facility\n• Stage with sound system\n• Projector & screen\n• Used for: Functions, seminars, programs"
    },
    {
        keywords: ["parking"],
        answer: "🅿️ Parking Facility:\n• Separate staff & visitor parking\n• Two-wheeler stand\n• Four-wheeler parking available\n• Secure & monitored\n• Parents can park during PTM"
    }
];

function getFacilityResponse(userInput) {
    userInput = userInput.toLowerCase().trim();
    
    for (let qa of facilityResponses) {
        for (let keyword of qa.keywords) {
            if (userInput.includes(keyword)) {
                return qa.answer;
            }
        }
    }
    return null;
}
