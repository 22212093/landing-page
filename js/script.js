/* ================================================
   Starfruit Landing Page - Interactive Scripts
   ================================================ */

// ===== Navbar Scroll Effect =====
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== Mobile Menu Toggle =====
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== Intersection Observer for Scroll Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe feature cards with staggered animation
document.querySelectorAll('.feature-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});

// ===== Button Click Feedback =====
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        // Skip menu button
        if (this.id === 'mobile-menu-btn') return;
        
        const isOrderButton = this.textContent.includes('구매') || 
                             this.textContent.includes('주문') ||
                             this.textContent.includes('Buy') ||
                             this.textContent.includes('Order') ||
                             this.textContent.includes('만나보기');
        
        if (isOrderButton) {
            alert('⭐ 주문 페이지로 이동합니다!\n(데모 페이지입니다)');
        }
    });
});

// ===== Console Welcome Message =====
console.log(
    '%c⭐ Starfruit Landing Page',
    'color: #D97706; font-size: 24px; font-weight: bold; font-family: serif;'
);
console.log(
    '%c자연이 빚어낸 황금빛 별',
    'color: #92400E; font-size: 14px; font-style: italic;'
);
