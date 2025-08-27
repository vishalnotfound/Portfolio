document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger);

    // --- SMOOTH SCROLL FOR NAV LINKS ---
    document.querySelectorAll('.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    document.getElementById('nav-home').addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });


    // --- GRADIENT BACKGROUND ---
    const gradientBg = document.getElementById('gradient-bg');
    window.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const x = Math.round((clientX / window.innerWidth) * 100);
        const y = Math.round((clientY / window.innerHeight) * 100);
        gsap.to(gradientBg, {
            '--x': `${x}%`,
            '--y': `${y}%`,
            duration: 0.3,
            ease: 'sine.out'
        });
    });

    // --- HERO SECTION ANIMATION ---
    gsap.from('.hero-text', { y: 100, opacity: 0, stagger: 0.1, duration: 1, ease: 'power4.out', delay: 0.5 });

    // --- SCROLL-TRIGGERED ANIMATIONS ---
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        gsap.from(title, { scrollTrigger: { trigger: title, start: 'top 85%', toggleActions: 'play none none none' }, y: 50, opacity: 0, duration: 0.8, ease: 'power3.out' });
    });

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        gsap.from(card, { scrollTrigger: { trigger: card, start: 'top 85%', toggleActions: 'play none none none' }, y: 60, opacity: 0, duration: 1, ease: 'power4.out', delay: index * 0.1 });
    });
    
    gsap.from('.about-image', { scrollTrigger: { trigger: '#about', start: 'top 80%', toggleActions: 'play none none none' }, x: -100, opacity: 0, duration: 1.2, ease: 'power4.out' });
    gsap.from('.about-text', { scrollTrigger: { trigger: '#about', start: 'top 80%', toggleActions: 'play none none none' }, x: 100, opacity: 0, duration: 1.2, ease: 'power4.out', delay: 0.2 });

    gsap.from('.contact-section > *', { scrollTrigger: { trigger: '.contact-section', start: 'top 80%', toggleActions: 'play none none none' }, y: 50, opacity: 0, duration: 1, stagger: 0.15, ease: 'power4.out' });
});
