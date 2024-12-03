document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');
        
        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.4s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        // Burger Animation
        burger.classList.toggle('toggle');
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

// Form Submission with Enhanced Feedback
const form = document.querySelector('.contact-form');
const email = "YOUR_Email";

if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Displaying a success modal
        showModal('Thank You!', 'Your message has been received. We will respond to your query shortly. Have a wonderful day!');

        // Sending email notification using EmailJS
        sendEmail({
            name: form.querySelector('input[placeholder="Name"]').value,
            email: form.querySelector('input[placeholder="Email"]').value,
            message: form.querySelector('textarea[placeholder="Message"]').value,
        });

        // Reset the form after submission
        form.reset();
    });
}

// Modal Functionality
function showModal(title, message) {
    // Create modal elements dynamically
    const modal = document.createElement('div');
    modal.classList.add('modal-overlay');

    modal.innerHTML = `
        <div class="modal">
            <h2>${title}</h2>
            <p>${message}</p>
            <button class="close-modal">Close</button>
        </div>
    `;

    document.body.appendChild(modal);

    // Close modal on button click
    modal.querySelector('.close-modal').addEventListener('click', () => {
        modal.remove();
    });

    // Close modal on clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
}

// Email Sending Functionality
function sendEmail(data) {
    const emailParams = {
        to_email: email,
        from_name: data.name,
        from_email: data.email,
        message: data.message,
    };

    // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', 'YOUR_PUBLIC_KEY' with EmailJS credentials
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', emailParams, 'YOUR_PUBLIC_KEY')
        .then(() => {
            console.log('Email sent successfully');
        })
        .catch((error) => {
            console.error('Failed to send email:', error);
        });
}

    // Scroll Animation
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
});

