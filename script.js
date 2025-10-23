// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll to Top Button
const scrollTopBtn = document.getElementById('scrollTop');

if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Active Navigation on Scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Form Validation - Admission Form
const admissionForm = document.getElementById('admissionForm');

if (admissionForm) {
    admissionForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const studentName = document.getElementById('studentName').value.trim();
        const parentName = document.getElementById('parentName').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const classSelected = document.getElementById('class').value;
        const message = document.getElementById('message').value.trim();
        
        // Validation
        if (studentName === '' || parentName === '' || phone === '' || classSelected === '') {
            alert('कृपया सभी आवश्यक फ़ील्ड भरें / Please fill all required fields');
            return false;
        }
        
        // Phone validation (Indian format)
        const phoneRegex = /^[6-9]\d{9}$/;
        if (!phoneRegex.test(phone)) {
            alert('कृपया 10 अंकों का सही मोबाइल नंबर दर्ज करें / Please enter a valid 10-digit mobile number');
            return false;
        }
        
        // Success message
        alert(`धन्यवाद ${parentName}! आपकी पूछताछ सफलतापूर्वक सबमिट हो गई है।\n\nThank you! Your enquiry for ${studentName} (Class ${classSelected}) has been submitted successfully.\n\nहम जल्द ही आपसे संपर्क करेंगे। / We will contact you soon.`);
        
        // Reset form
        admissionForm.reset();
        return false;
    });
}

// Animation on Scroll (Intersection Observer)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animation to elements
document.querySelectorAll('.facility-card, .gallery-item, .admission-box, .contact-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Header hide/show on scroll
const header = document.querySelector('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        if (currentScroll > lastScroll) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
    }
    
    lastScroll = currentScroll;
});

// Gallery item click effect
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        const imgSrc = this.querySelector('img').src;
        const caption = this.querySelector('.overlay p').textContent;
        
        // Simple alert - you can replace with lightbox
        alert(`Gallery Image: ${caption}\n\nNote: Add actual school photos here!`);
    });
});

// Add loading class to body
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Console log for developer
console.log('🎓 Radhika Vilas Vidya Mandir Website - Developed by Your Name');
console.log('📱 Website is fully responsive and functional!');
