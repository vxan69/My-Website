// ✅ Typing Effect Code
const textArray = ["Web Developer", "Gamer", "Cyberphile"];
let typingEffect = document.getElementById("typing-effect");
let textIndex = 0;
let charIndex = 0;

function typeText() {
    if (charIndex < textArray[textIndex].length) {
        typingEffect.innerHTML += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 150);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (charIndex > 0) {
        typingEffect.innerHTML = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, 100);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(typeText, 500);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    typeText();
});

// ✅ Chatbot Code
document.getElementById("chatbot-btn").addEventListener("click", function() {
    document.getElementById("chatbot-container").classList.toggle("hidden");
    document.getElementById("chatbot-container").classList.toggle("show");
});

document.getElementById("close-chat").addEventListener("click", function() {
    document.getElementById("chatbot-container").classList.add("hidden");
    document.getElementById("chatbot-container").classList.remove("show");
});

document.getElementById("send-btn").addEventListener("click", sendMessage);
document.getElementById("chat-input").addEventListener("keypress", function(e) {
    if (e.key === "Enter") sendMessage();
});

function sendMessage() {
    let userInput = document.getElementById("chat-input").value.trim().toLowerCase();
    let chatBody = document.getElementById("chat-body");

    if (userInput === "") return;

    let userMessage = `<div><b>You:</b> ${userInput}</div>`;
    chatBody.innerHTML += userMessage;

    let botReply = getBotResponse(userInput);
    let botMessage = `<div><b>Assistant:</b> ${botReply}</div>`;
    
    setTimeout(() => {
        chatBody.innerHTML += botMessage;
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 500);

    document.getElementById("chat-input").value = "";
}

// ✅ Predefined Chatbot Replies
function getBotResponse(input) {
    let responses = {
        "hi": "Hello! How can I assist you?",
        "hello": "Hi there! What do you need help with?",
        "who are you": "I'm sanu! Ask me anything about this portfolio.",
        "what is your name": "I'm just an sanu here to help!",
        "about": "This is Ankit's portfolio. He is a passionate web developer and tech enthusiast!",
        "projects": "Ankit is working on multiple projects, including this portfolio and a chat app.",
        "hobbies": "Ankit loves gaming, exploring tech, and building cool stuff.",
        "bye": "Goodbye! Have a great day!"
    };

    return responses[input] || "I'm not sure about that. Try asking something else!";
}
