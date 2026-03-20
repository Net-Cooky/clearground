// MARQUEE PAUSE ON HOVER
const marquee = document.querySelector('.marquee');
if (marquee) {
    marquee.addEventListener('mouseenter', () => {
        marquee.style.animationPlayState = 'paused';
    });
    marquee.addEventListener('mouseleave', () => {
        marquee.style.animationPlayState = 'running';
    });
}

// CONTACT FORM MAILTO
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const enquiry = document.getElementById('enquiry').value;
        
        const subject = `Enquiry from ${name}`;
        const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone || 'Not provided'}%0D%0A%0D%0AEnquiry:%0D%0A${encodeURIComponent(enquiry)}`;
        
        window.location.href = `mailto:contact@cleargroundcounselling.com.au?subject=${encodeURIComponent(subject)}&body=${body}`;
    });
}

// MOBILE MENU TOGGLE
const mobileToggle = document.querySelector('.mobile-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
            mobileToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}
