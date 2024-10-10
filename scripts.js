document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const navToggle = document.createElement('button');
    navToggle.className = 'nav-toggle';
    navToggle.textContent = 'Menu';
    document.querySelector('.header .container').appendChild(navToggle);

    const nav = document.querySelector('.nav ul');
    navToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Smooth Scroll for Navigation Links
    const navLinks = document.querySelectorAll('.nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: 'smooth'
                });
            }
        });
    });
});