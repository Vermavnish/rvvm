// chatbot-engine.js - Advanced matching and response engine

// Levenshtein Distance function - to check string similarity (for typo tolerance)
function levenshteinDistance(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
    const costs = new Array(s2.length + 1);
    for (let i = 0; i <= s1.length; i++) {
        let lastValue = i;
        for (let j = 0; j <= s2.length; j++) {
            if (i === 0) {
                costs[j] = j;
            } else {
                if (j > 0) {
                    let newValue = costs[j - 1];
                    if (s1.charAt(i - 1) !== s2.charAt(j - 1)) {
                        newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
                    }
                    costs[j - 1] = lastValue;
                    lastValue = newValue;
                }
            }
        }
        if (i > 0) costs[s2.length] = lastValue;
    }
    return costs[s2.length];
}

// Combine all data into one big array
const masterDatabase = [
    ...greetingResponses,
    ...admissionResponses,
    ...feeResponses,
    ...facilityResponses,
    ...academicResponses,
    ...examResponses,
    ...parentResponses
];

// Main function to get the best response
function getAdvancedChatbotResponse(userInput) {
    userInput = userInput.toLowerCase().trim();
    
    let bestMatch = {
        score: 0,
        answer: null
    };

    // Greeting check first (for quick matches)
    const greeting = getGreetingResponse(userInput);
    if (greeting) return greeting;

    // Go through the entire database
    masterDatabase.forEach(qa => {
        let currentScore = 0;
        
        qa.keywords.forEach(keyword => {
            const keywordParts = keyword.split(' ');
            
            // Check for each part of the keyword
            keywordParts.forEach(part => {
                if (userInput.includes(part)) {
                    currentScore += 10; // Exact word match = high score
                } else {
                    // Check for typos using Levenshtein distance
                    userInput.split(' ').forEach(userWord => {
                        const distance = levenshteinDistance(part, userWord);
                        if (distance <= 2) { // Allow up to 2 typos
                            currentScore += 5; // Typo match = medium score
                        }
                    });
                }
            });
        });

        // Update best match if current score is higher
        if (currentScore > bestMatch.score) {
            bestMatch.score = currentScore;
            bestMatch.answer = qa.answer;
        }
    });

    // If score is good enough, return the answer
    if (bestMatch.score > 10) { // Confidence threshold
        return bestMatch.answer;
    }

    // Default response if no good match is found
    return "माफ़ करें, मैं यह समझ नहीं पाया। 😅\n\nआप पूछ सकते हैं:\n• Admission process\n• Fee structure\n• School facilities\n• Contact details\n\nया सीधे संपर्क करें:\n📞 070712 50111\n📧 radhikavilaschakia@gmail.com";
}

// Keep original greeting function for quick matches
function getGreetingResponse(userInput) {
    const greetings = ["hello", "hi", "hey", "namaste", "bye", "thank"];
    for (let greet of greetings) {
        if (userInput.includes(greet)) {
            for (let qa of greetingResponses) {
                if (qa.keywords.includes(greet)) return qa.answer;
            }
        }
    }
    return null;
}
