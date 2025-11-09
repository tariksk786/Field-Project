// Chatbot elements
const chatbotButton = document.getElementById('chatbot-button');
const chatbotWindow = document.getElementById('chatbot-window');
const closeChatbot = document.getElementById('close-chatbot');
const sendBtn = document.getElementById('send-chatbot');
const chatbotText = document.getElementById('chatbot-text');
const chatbotMessages = document.getElementById('chatbot-messages');
const voiceBtn = document.getElementById('voice-btn');

// Open chatbot
chatbotButton.addEventListener('click', () => {
    chatbotWindow.classList.remove('hidden');
});

// Close chatbot
closeChatbot.addEventListener('click', () => {
    chatbotWindow.classList.add('hidden');
});

// Send message function
function sendMessage(message, sender='user') {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add(`${sender}-msg`);
    msgDiv.textContent = message;
    chatbotMessages.appendChild(msgDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Bot response logic (basic)
function botResponse(userMessage) {
    const msg = userMessage.toLowerCase();
    let response = "I'm sorry, I can help with crops, pests, soil, or farming tips.";

    if(msg.includes('wheat')) response = "Wheat grows best in Rabi season (Oct-Mar) with moderate temperature and well-drained soil.";
    else if(msg.includes('rice')) response = "Rice requires flooded fields, warm climate, and plenty of water for optimal growth.";
    else if(msg.includes('maize')) response = "Maize grows in well-drained fertile soil with sunny conditions.";
    else if(msg.includes('cotton')) response = "Cotton grows in warm climates with moderate rainfall and loamy soil.";
    else if(msg.includes('sugarcane')) response = "Sugarcane grows best in tropical climates with rich, fertile soil.";
    else if(msg.includes('pest')) response = "Common pests include aphids, bollworms, stem borers. Control with organic or chemical methods.";
    else if(msg.includes('soil')) response = "Soil management includes fertilization, organic matter, crop rotation, and erosion prevention.";
    else if(msg.includes('practice')) response = "Farming practices include crop rotation, irrigation, proper spacing, and timely harvesting.";

    setTimeout(() => sendMessage(response, 'bot'), 500);
}

// Send message on button click
sendBtn.addEventListener('click', () => {
    const message = chatbotText.value.trim();
    if(message === '') return;
    sendMessage(message, 'user');
    chatbotText.value = '';
    botResponse(message);
});

// Send message on Enter key
chatbotText.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') sendBtn.click();
});

// Voice recognition (Web Speech API)
if('webkitSpeechRecognition' in window) {
    const recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'en-US';
    recognition.interimResults = false;

    voiceBtn.addEventListener('click', () => {
        recognition.start();
    });

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        sendMessage(transcript, 'user');
        botResponse(transcript);
    };

    recognition.onerror = (event) => {
        console.error('Voice recognition error:', event.error);
    };
} else {
    voiceBtn.disabled = true;
    voiceBtn.title = "Voice not supported in this browser";
}
