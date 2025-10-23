// chat.js - Main chat UI functionality

// DOM Elements
const chatInput = document.getElementById('chatInput');
const chatMessages = document.getElementById('chatMessages');
const sendBtn = document.getElementById('sendBtn');
const clearBtn = document.getElementById('clearBtn');
const infoBtn = document.getElementById('infoBtn');
const closeSidebar = document.getElementById('closeSidebar');
const infoSidebar = document.getElementById('infoSidebar');
const typingIndicator = document.getElementById('typingIndicator');
const quickBtns = document.querySelectorAll('.quick-btn');
const welcomeCard = document.getElementById('welcomeCard');

// Get current time
function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString('en-IN', { 
        hour: '2-digit', 
        minute: '2-digit' 
    });
}

// Set initial time
document.getElementById('initialTime').textContent = getCurrentTime();

// Append message to chat
function appendMessage(message, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}-message`;
    
    let avatarHTML = '';
    if (type === 'bot') {
        avatarHTML = '<div class="message-avatar"><i class="fas fa-robot"></i></div>';
    }
    
    const bubbleHTML = `
        <div class="message-bubble">
            ${message.split('\n').map(line => `<p>${line}</p>`).join('')}
            <span class="message-time">${getCurrentTime()}</span>
        </div>
    `;
    
    messageDiv.innerHTML = avatarHTML + bubbleHTML;
    chatMessages.appendChild(messageDiv);
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    // Hide welcome card after first message
    if (welcomeCard && welcomeCard.style.display !== 'none') {
        welcomeCard.style.display = 'none';
    }
}

// Show typing indicator
function showTyping() {
    typingIndicator.style.display = 'flex';
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Hide typing indicator
function hideTyping() {
    typingIndicator.style.display = 'none';
}

// Send message function
function sendMessage() {
    const userMsg = chatInput.value.trim();
    
    if (userMsg === '') {
        chatInput.focus();
        return;
    }
    
    // Display user message
    appendMessage(userMsg, 'user');
    chatInput.value = '';
    
    // Show typing indicator
    showTyping();
    
    // Simulate bot thinking time
    setTimeout(() => {
        hideTyping();
        
        // Get bot response
         const botReply = getAdvancedChatbotResponse(userMsg);
        appendMessage(botReply, 'bot');
    }, 800);
}

// Event Listeners

// Send button click
sendBtn.addEventListener('click', sendMessage);

// Enter key press
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Quick question buttons
quickBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const question = btn.getAttribute('data-question');
        chatInput.value = question;
        sendMessage();
    });
});

// Clear chat button
clearBtn.addEventListener('click', () => {
    if (confirm('Clear all chat messages?')) {
        chatMessages.innerHTML = `
            <div class="message bot-message">
                <div class="message-avatar">
                    <i class="fas fa-robot"></i>
                </div>
                <div class="message-bubble">
                    <p>Chat cleared! 🔄 फिर से पूछें कुछ भी।</p>
                    <span class="message-time">${getCurrentTime()}</span>
                </div>
            </div>
        `;
        
        // Show welcome card again
        if (welcomeCard) {
            welcomeCard.style.display = 'block';
        }
    }
});

// Info button - Toggle sidebar
infoBtn.addEventListener('click', () => {
    infoSidebar.classList.toggle('active');
});

// Close sidebar button
if (closeSidebar) {
    closeSidebar.addEventListener('click', () => {
        infoSidebar.classList.remove('active');
    });
}

// Auto focus on input when page loads
window.addEventListener('load', () => {
    chatInput.focus();
});

// Emoji button (simple implementation)
const emojiBtn = document.getElementById('emojiBtn');
if (emojiBtn) {
    emojiBtn.addEventListener('click', () => {
        const emojis = ['😊', '👍', '❤️', '🙏', '📚', '🎓', '🏫', '📞', '✅', '👨‍🎓'];
        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        chatInput.value += randomEmoji;
        chatInput.focus();
    });
}

// Prevent form submission on Enter in input
chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        sendMessage();
    }
});

// Character counter (optional)
chatInput.addEventListener('input', () => {
    const maxLength = chatInput.getAttribute('maxlength');
    const currentLength = chatInput.value.length;
    
    if (currentLength >= maxLength - 50) {
        console.log(`Characters remaining: ${maxLength - currentLength}`);
    }
});

// Console welcome message
console.log('%c🤖 RVVM Virtual Assistant', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%cChatbot is ready!', 'color: #4ade80; font-size: 14px;');
console.log('Developed for Radhika Vilas Vidya Mandir, Chakia, Ballia');
