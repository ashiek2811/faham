// JavaScript functions for modal interaction
function openModal(title, description) {
    const modal = document.getElementById('activityModal');
    const titleElement = document.getElementById('modalTitle');
    const descriptionElement = document.getElementById('modalDescription');

    titleElement.innerText = title;
    descriptionElement.innerText = description;
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('activityModal');
    modal.style.display = 'none';
}

// Close modal on outside click
window.onclick = function(event) {
    const modal = document.getElementById('activityModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
// Handle form submission
document.getElementById('contactForm').onsubmit = function(event) {
    event.preventDefault(); // Prevent default form submission
    alert('Thank you for your message! We will get back to you soon.');
    this.reset(); // Reset the form after submission
}

function toggleChat() {
    // Code to open and close your chatbot
    alert("Chatbot toggle function clicked!");
    }

    
const keywords = [
    "academic", "admission", "extracurricular", "activities", "facilities", "campus", 
    "events", "calendar", "library", "career", "courses", "staff", "schedule", "enrollment", 
    "tuition", "sports", "clubs", "transportation", "health", "nutrition", "guidance", 
    "scholarships", "assessment", "reports", "parents", "communication", "volunteers", 
    "workshops", "seminars", "tutoring", "mentoring", "students", "community service", 
    "field trips", "performances", "arts", "theater", "music", "technology", "labs", 
    "certifications", "graduation", "tuition assistance", "fees", "policies", "student life", 
    "counseling","school"
];

const responses = {
    "academic": "Our academic programs provide comprehensive education with a focus on critical thinking and real-world applications.",
    "admission": "Admissions are open! Apply online or visit the admissions office for more info about our programs and requirements.",
    "extracurricular": "We offer various extracurricular activities like sports, music, drama, and clubs that enhance student life.",
    "facilities": "Our facilities include a library, science labs, computer labs, sports fields, and an art studio designed for creativity.",
    "events": "We host events throughout the year, including cultural fests, sports meets, and community service initiatives.",
    "calendar": "The academic calendar is available on our website, with all important dates for the semester, including holidays.",
    "library": "Our library has thousands of books, journals, and digital resources, as well as study spaces for students.",
    "career": "Our career guidance program helps students explore options, prepare resumes, and navigate job applications.",
    "courses": "We offer a wide range of courses tailored to meet students' interests and needs, including advanced placement options.",
    "staff": "Our experienced staff includes dedicated teachers, counselors, and support personnel who are here to help.",
    "counseling": "Our counseling department provides support for mental health, academics, and personal issues, ensuring student well-being.",
    "sports": "We have a vibrant sports program offering teams for basketball, soccer, volleyball, and track, among others.",
    "clubs": "Join one of our many clubs! Options include debate club, science club, art club, and student government.",
    "transportation": "We provide safe and reliable transportation services for all students, including bus routes across the region.",
    "nutrition": "Our cafeteria offers healthy meal options, including vegetarian and vegan choices, to support student health.",
    "tutoring": "We offer tutoring services for students needing extra help in subjects like math, science, and language arts.",
    "scholarships": "Various scholarships are available for students based on merit, need, and specific talents or interests.",
    "field trips": "Educational field trips are organized throughout the year to provide real-world learning experiences.",
    "performances": "Our performing arts department hosts various shows, including theater productions and musical concerts.",
    "technology": "We incorporate the latest technology into our classrooms, including interactive smart boards and computers.",
    "parent_communication": "We prioritize communication with parents through newsletters, meetings, and our online portal.",
    "community_service": "Students are encouraged to participate in community service, fostering a sense of responsibility and compassion.",
    "workshops": "We conduct workshops on various topics, including college readiness, study skills, and mental health awareness.",
    "mentoring": "Our mentoring program pairs students with faculty and senior students to provide guidance and support.",
    "assessment": "Regular assessments and feedback help track student progress and tailor support to individual needs.",
    "tuition": "Information about tuition fees, payment plans, and financial aid options can be found on our website.",
    "policies": "Our school policies regarding attendance, behavior, and academic integrity are available in the student handbook.",
    "student_life": "Our vibrant student life includes social events, leadership opportunities, and a supportive community.",
    "certifications": "Students have the opportunity to earn certifications in various fields, enhancing their future career prospects.",
    "graduation": "Graduation requirements include a minimum number of credits, participation in activities, and passing assessments.",
    "alumni": "Our alumni network provides ongoing support and opportunities for current students through mentorship and resources.",
    "fees" : "tell you latter. ",
    "school" : "add this latter it just for a example "
};

function toggleChat() {
    const chatWindow = document.getElementById('chatWindow');
    chatWindow.style.display = chatWindow.style.display === 'none' ? 'block' : 'none';
}

function displayMessage(message, sender) {
    const chatBody = document.getElementById('chatBody');
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('chat-message', sender);
    msgDiv.innerHTML = message;
    chatBody.appendChild(msgDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
    if (sender === 'bot') speak(message);
}

function handleKey(event) {
    if (event.key === 'Enter') {
        const input = document.getElementById('chatInput');
        const message = input.value.trim();
        if (message) {
            displayMessage(message, 'user');
            input.value = '';
            respondToMessage(message);
        }
    }
}

function respondToMessage(message) {
const lowerCaseMessage = message.toLowerCase();
let response = "I'm sorry, I didn't understand that. Please try another question.";

for (const keyword of keywords) {
if (lowerCaseMessage.includes(keyword)) {
    response = responses[keyword] || response;
    break; 
}
}

displayMessage(response, 'bot');
}

function toggleChat() {
const chatWindow = document.getElementById('chatWindow');
chatWindow.style.display = chatWindow.style.display === 'none' ? 'block' : 'none';
}

function displayMessage(message, sender) {
const chatBody = document.getElementById('chatBody');
const msgDiv = document.createElement('div');
msgDiv.classList.add('chat-message', sender);
msgDiv.innerHTML = message;
chatBody.appendChild(msgDiv);
chatBody.scrollTop = chatBody.scrollHeight;
if (sender === 'bot') speak(message);
}

function handleKey(event) {
if (event.key === 'Enter') {
const input = document.getElementById('chatInput');
const message = input.value.trim();
if (message) {
    displayMessage(message, 'user');
    input.value = '';
    respondToMessage(message);
}
}
}

function respondToMessage(message) {
const lowerCaseMessage = message.toLowerCase();
let response = "I'm sorry, I didn't understand that. Please try another question.";

for (const keyword of keywords) {
if (lowerCaseMessage.includes(keyword)) {
    response = responses[keyword] || response;
    break; 
}
}

displayMessage(response, 'bot');
}

function toggleKeywords() {
const popup = document.getElementById('keywordsPopup');
popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
if (popup.style.display === 'block') {
const keywordsList = document.getElementById('keywordsList');
keywordsList.innerHTML = '';
keywords.forEach(keyword => {
    const div = document.createElement('div');
    div.classList.add('keyword');
    div.innerText = keyword;
    div.onclick = () => insertKeyword(keyword);
    keywordsList.appendChild(div);
});
}
}
//this one is keyword automatically responds without get enater //
function insertKeyword(keyword) {
displayMessage(keyword, 'user');
toggleKeywords(); // Hide the popup after selecting a keyword

// Add a slight delay before showing the bot's response
setTimeout(() => {
respondToMessage(keyword); // Display the bot response after keyword is shown as user message
}, 500); // Adjust the delay time as needed
}

function showSuggestions() {
const input = document.getElementById('chatInput');
const suggestionsDiv = document.getElementById('suggestions');
const inputText = input.value.toLowerCase();
suggestionsDiv.innerHTML = '';


suggestionsDiv.style.display = suggestionsDiv.innerHTML ? 'block' : 'none';
}

function selectSuggestion(keyword) {
const input = document.getElementById('chatInput');
input.value = keyword;
suggestionsDiv.style.display = 'none';

// Display keyword as user message
displayMessage(keyword, 'user');

// Trigger bot response
setTimeout(() => {
respondToMessage(keyword);
}, 500); // Delay to ensure natural flow
}

// Add event listener for input field
document.getElementById('chatInput').addEventListener('input', showSuggestions);

function speak(text) {
const utterance = new SpeechSynthesisUtterance(text);
speechSynthesis.speak(utterance);
}

// JavaScript for handling form submission with validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Form validation
    if (!name || !email || !message) {
        if (!name) {
            document.getElementById('name').classList.add('is-invalid');
        } else {
            document.getElementById('name').classList.remove('is-invalid');
        }
        if (!email) {
            document.getElementById('email').classList.add('is-invalid');
        } else {
            document.getElementById('email').classList.remove('is-invalid');
        }
        if (!message) {
            document.getElementById('message').classList.add('is-invalid');
        } else {
            document.getElementById('message').classList.remove('is-invalid');
        }
        return;
    }

    // Show success modal
    $('#confirmationModal').modal('show');

    // Clear the form after submission
    document.getElementById('contactForm').reset();
});

// Optional: Modal auto-close after 5 seconds
$('#confirmationModal').on('shown.bs.modal', function () {
    setTimeout(function () {
        $('#confirmationModal').modal('hide');
    }, 5000);
});
