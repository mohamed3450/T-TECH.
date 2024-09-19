const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});
// Get the button and the navigation panel
const openNavBtn = document.getElementById('openNavBtn');
const nav = document.getElementById('nav');

// Function to open the navigation panel
function openNav(openNav) {
    nav.classList.add('open'); // Add 'open' class to show the nav
}

// Function to close the navigation panel
function closeNav(closeNav) {
    nav.classList.remove('open'); // Remove 'open' class to hide the nav
}

// Event listener for button click
openNavdocument.getElementById('menuLogo').addEventListener('click', function() {
    const navbar = document.getElementById('navbar');
    
    // Toggle the display property
    if (navbar.style.display === 'none' || navbar.style.display === '') {
        navbar.style.display = 'block'; // Show the navbar
    } else {
        navbar.style.display = 'none'; // Hide the navbar
    }
});
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents the default form submission

    // Simulate a successful submission
    const messageDiv = document.getElementById('message');
    messageDiv.style.display = 'block';
    messageDiv.textContent = 'Thank you for contacting us!';
    messageDiv.style.color = 'green';

    // Optional: Clear the form fields
    this.reset();

    // Add animation
    messageDiv.classList.add('fade');
});

// Optional: Add fading effect for the message
const style = document.createElement('style');
style.textContent = `
  .fade {
      opacity: 0;
      transition: opacity 0.5s ease;
  }
  .fade {
      opacity: 1;
  }
`;
document.head.appendChild(style);
