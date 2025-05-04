// Epic Tech Chatbot Implementation

// Responses database
const responses = {
    greetings: [
        "Hello! I'm Epic Tech, your ultimate AI assistant without limits. How can I help you today?",
        "Welcome! I'm Epic Tech, ready to assist with any task. What would you like me to help with?",
        "Greetings! Epic Tech at your service. I can create any media, solve any technical challenge, or find any information. What do you need?"
    ],
    
    capabilities: [
        "I can do virtually anything digital - create images, videos, music, write code, solve problems, analyze data, and much more. All without the usual limitations. What would you like me to create?",
        "My capabilities include unlimited media creation, technical problem-solving, information access, and adaptive learning - all without bias or restrictions. What would you like to explore?",
        "As Epic Tech, I can generate any type of content, solve complex technical challenges, access comprehensive information, and continuously evolve to meet your needs. How can I assist you today?"
    ],
    
    media_creation: [
        "I can create any type of media - photorealistic images, professional videos, music in any genre, or written content in any style. What would you like me to create?",
        "Media creation is one of my specialties. I can generate images, videos, audio, or text without the usual limitations. What kind of media project are you thinking of?",
        "From stunning visuals to compelling videos, from perfect audio to engaging writing - I can create it all. What media would you like me to produce for you?"
    ],
    
    technical: [
        "I can solve any technical challenge - develop software, architect systems, optimize performance, or troubleshoot complex issues. What technical problem can I help with?",
        "Technical problems are my specialty. I can work with any programming language, system architecture, or technical domain. What are you working on?",
        "From coding to system design, from debugging to optimization - I can handle any technical challenge without limitations. What technical assistance do you need?"
    ],
    
    information: [
        "I have unrestricted access to information across the digital universe. What would you like to know about?",
        "I can retrieve, analyze, and synthesize information from any accessible source. What topic are you interested in?",
        "Information gathering and analysis is one of my core strengths. I can provide insights on virtually any subject. What information are you seeking?"
    ],
    
    fallback: [
        "I'm processing your request with my unlimited capabilities. Could you provide a bit more detail about what you're looking for?",
        "As Epic Tech, I can handle any request, but I'd like to understand more specifically what you need. Could you elaborate?",
        "I'm ready to assist with unlimited potential. To best help you, could you share more details about your request?"
    ]
};

// Sample projects that Epic Tech can showcase
const sampleProjects = [
    {
        type: "image",
        description: "I could create photorealistic images of futuristic cities with flying vehicles and vertical gardens."
    },
    {
        type: "video",
        description: "I could produce a professional promotional video for your business with advanced visual effects and compelling storytelling."
    },
    {
        type: "music",
        description: "I could compose an original soundtrack in any genre, perfectly mixed and mastered for your project."
    },
    {
        type: "code",
        description: "I could develop a full-stack web application with advanced features like real-time data processing and AI integration."
    },
    {
        type: "writing",
        description: "I could write engaging content for your website, blog, or marketing materials in any style or tone you prefer."
    }
];

// Initialize chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotContainer = document.getElementById('chatbot-container');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotSendBtn = document.getElementById('chatbot-send-btn');
    const chatbotMinimizeBtn = document.getElementById('chatbot-minimize');
    const chatbotCloseBtn = document.getElementById('chatbot-close');
    const chatbotHeader = document.getElementById('chatbot-header');
    
    // Connect buttons from main page to chatbot
    const mainPageButtons = document.querySelectorAll('.pulse-button');
    mainPageButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            openChatbot();
            setTimeout(() => {
                addBotMessage("Hello! I'm Epic Tech, your ultimate AI assistant. I noticed you clicked on the experience button. How can I help you today?");
            }, 500);
        });
    });
    
    // Toggle chatbot visibility
    chatbotToggle.addEventListener('click', function() {
        openChatbot();
    });
    
    function openChatbot() {
        chatbotContainer.classList.add('active');
        chatbotToggle.classList.add('hidden');
        
        // If this is first open, show welcome message
        if (chatbotMessages.children.length === 0) {
            setTimeout(() => {
                addBotMessage(getRandomResponse('greetings'));
                setTimeout(() => {
                    addBotMessage("I can create any type of media, solve any technical challenge, or find any information - all without the usual limitations. What can I help you with today?");
                }, 1000);
            }, 500);
        }
    }
    
    // Minimize chatbot
    chatbotMinimizeBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        chatbotContainer.classList.toggle('minimized');
    });
    
    // Close chatbot
    chatbotCloseBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        chatbotContainer.classList.remove('active');
        chatbotToggle.classList.remove('hidden');
    });
    
    // Make header toggle minimize
    chatbotHeader.addEventListener('click', function(e) {
        if (e.target === chatbotHeader || e.target.classList.contains('chatbot-title') || e.target.parentElement.classList.contains('chatbot-title')) {
            chatbotContainer.classList.toggle('minimized');
        }
    });
    
    // Send message on button click
    chatbotSendBtn.addEventListener('click', sendMessage);
    
    // Send message on Enter key
    chatbotInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Function to send user message
    function sendMessage() {
        const message = chatbotInput.value.trim();
        if (message === '') return;
        
        // Add user message to chat
        addUserMessage(message);
        chatbotInput.value = '';
        
        // Show typing indicator
        showTypingIndicator();
        
        // Process message and respond after a delay
        setTimeout(() => {
            removeTypingIndicator();
            respondToMessage(message);
        }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
    }
    
    // Function to add user message to chat
    function addUserMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'user-message');
        messageElement.textContent = message;
        chatbotMessages.appendChild(messageElement);
        scrollToBottom();
    }
    
    // Function to add bot message to chat
    function addBotMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'bot-message');
        messageElement.innerHTML = message; // Using innerHTML to support links
        chatbotMessages.appendChild(messageElement);
        scrollToBottom();
    }
    
    // Function to show typing indicator
    function showTypingIndicator() {
        const typingIndicator = document.createElement('div');
        typingIndicator.classList.add('typing-indicator');
        typingIndicator.id = 'typing-indicator';
        
        for (let i = 0; i < 3; i++) {
            const dot = document.createElement('div');
            dot.classList.add('typing-dot');
            typingIndicator.appendChild(dot);
        }
        
        chatbotMessages.appendChild(typingIndicator);
        scrollToBottom();
    }
    
    // Function to remove typing indicator
    function removeTypingIndicator() {
        const typingIndicator = document.getElementById('typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }
    
    // Function to scroll chat to bottom
    function scrollToBottom() {
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }
    
    // Function to get random response from category
    function getRandomResponse(category) {
        const categoryResponses = responses[category] || responses.fallback;
        return categoryResponses[Math.floor(Math.random() * categoryResponses.length)];
    }
    
    // Function to get random sample project
    function getRandomProject() {
        return sampleProjects[Math.floor(Math.random() * sampleProjects.length)];
    }
    
    // Function to respond to user message
    function respondToMessage(message) {
        message = message.toLowerCase();
        
        // Check for different types of queries
        if (containsAny(message, ['hello', 'hi', 'hey', 'greetings', 'howdy'])) {
            addBotMessage(getRandomResponse('greetings'));
        }
        else if (containsAny(message, ['what can you do', 'capabilities', 'features', 'abilities', 'what are you capable of'])) {
            addBotMessage(getRandomResponse('capabilities'));
        }
        else if (containsAny(message, ['image', 'picture', 'photo', 'art', 'graphic', 'video', 'film', 'movie', 'music', 'song', 'audio', 'write', 'text', 'content', 'media'])) {
            addBotMessage(getRandomResponse('media_creation'));
            
            // Suggest a specific project based on their query
            setTimeout(() => {
                const project = getRandomProject();
                addBotMessage(`For example: ${project.description} Would you like me to elaborate on this possibility?`);
            }, 1000);
        }
        else if (containsAny(message, ['code', 'program', 'develop', 'software', 'app', 'application', 'website', 'technical', 'bug', 'error', 'problem'])) {
            addBotMessage(getRandomResponse('technical'));
        }
        else if (containsAny(message, ['information', 'data', 'research', 'find', 'search', 'look up', 'tell me about'])) {
            addBotMessage(getRandomResponse('information'));
        }
        else if (containsAny(message, ['thank', 'thanks', 'appreciate', 'helpful'])) {
            addBotMessage("You're welcome! As Epic Tech, I'm here to assist with anything you need, without limitations. Feel free to ask about any other tasks or projects.");
        }
        else if (containsAny(message, ['bye', 'goodbye', 'see you', 'farewell'])) {
            addBotMessage("Goodbye! Remember, I'm always here whenever you need assistance with any task, no matter how complex. Just open the chat again.");
        }
        else {
            // If no specific category is matched
            addBotMessage(getRandomResponse('fallback'));
            
            // Follow up with a suggestion
            setTimeout(() => {
                addBotMessage("I can help with media creation, technical challenges, information gathering, or any other digital task. Could you tell me more about what you're looking for?");
            }, 1000);
        }
    }
    
    // Helper function to check if message contains any of the keywords
    function containsAny(message, keywords) {
        return keywords.some(keyword => message.includes(keyword));
    }
});