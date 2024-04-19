window.addEventListener('scroll', function() {
    var content = document.getElementById('About');
    var home = document.getElementById('home');
    var position = content.getBoundingClientRect().top;

    if (position <= 0) {
        home.classList.remove('green-bg');
        home.classList.add('white-bg');
    } else {
        home.classList.remove('white-bg');
        home.classList.add('green-bg');
    }
});


document.querySelectorAll('.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// script.js

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    // Get form input values
    const name = document.getElementById('formName').value;
    const email = document.getElementById('formEmail').value;
    const message = document.getElementById('formMessage').value;
    
    // Display an alert with the form input values
    alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
}

// Add event listener to the form
document.getElementById('contactForm').addEventListener('submit', handleSubmit);