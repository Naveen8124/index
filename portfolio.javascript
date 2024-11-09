// Smooth Scroll for Navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Get the target section
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Scroll to the section with smooth behavior
        window.scrollTo({
            top: targetSection.offsetTop - 50, // Offset for header height
            behavior: 'smooth'
        });
    });
});

// Form Validation on Submit
document.getElementById('contactForm').addEventListener('submit', function (e) {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // Check if all fields are filled
    if (!name || !email || !message) {
        alert('Please fill out all fields before submitting.');
        e.preventDefault(); // Prevent form submission
    } else {
        alert('Thank you for your message, ' + name + '!');
    }
});

// Dynamic Greeting Based on Time of Day
window.addEventListener('load', () => {
    const greeting = document.createElement('h3');
    const hours = new Date().getHours();
    let greetingMessage = '';

    if (hours < 12) {
        greetingMessage = 'Good Morning!';
    } else if (hours < 18) {
        greetingMessage = 'Good Afternoon!';
    } else {
        greetingMessage = 'Good Evening!';
    }

    greeting.textContent = greetingMessage;
    document.querySelector('header').appendChild(greeting);
});

// Hover Effect for Projects (Change background color)
function hoverEffect(project) {
    project.style.backgroundColor = '#ecf0f1';
    project.style.transform = 'scale(1.05)';
}

function removeHoverEffect(project) {
    project.style.backgroundColor = '#fff';
    project.style.transform = 'scale(1)';
}
