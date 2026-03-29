// Script pour ajouter des interactions et animations stylisées

document.addEventListener('DOMContentLoaded', function() {
    console.log('Site chargé avec succès ! (Animations avancées activées)');

    // Theme toggle (Smooth transition)
    const themeToggle = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.body.setAttribute('data-theme', 'dark');
        if (themeToggle) themeToggle.textContent = 'Mode Clair';
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDark = document.body.getAttribute('data-theme') === 'dark';
            if (isDark) {
                document.body.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
                themeToggle.textContent = 'Mode Sombre';
            } else {
                document.body.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                themeToggle.textContent = 'Mode Clair';
            }
        });
    }

    // Scroll progress fluide pour les liens internes
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId !== "#") {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Observer pour les animations révélées au scroll (Effet "Stagger")
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.classList.add('scroll-reveal');
        // On peut légèrement décaler l'animation si elles apparaissent en même temps
        section.style.transitionDelay = `${index * 0.05}s`; 
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optionnel : ne jouer l'animation qu'une seule fois
                // observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Effet Tilt (Parallax 3D) sur l'image principale
    const tiltWrapper = document.getElementById('tilt-wrapper');
    if (tiltWrapper && window.matchMedia('(pointer: fine)').matches) {
        
        let ticking = false;
        tiltWrapper.addEventListener('mousemove', (e) => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const rect = tiltWrapper.getBoundingClientRect();
                    const x = e.clientX - rect.left; // Position X dans l'élément
                    const y = e.clientY - rect.top; // Position Y dans l'élément
                    
                    // Calculer la rotation (de -10deg à +10deg)
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    
                    const rotateX = ((y - centerY) / centerY) * -10;
                    const rotateY = ((x - centerX) / centerX) * 10;
                    
                    tiltWrapper.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
        
        tiltWrapper.addEventListener('mouseleave', () => {
            tiltWrapper.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            tiltWrapper.style.transition = 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)';
        });

        tiltWrapper.addEventListener('mouseenter', () => {
            tiltWrapper.style.transition = 'transform 0.1s ease';
        });
    }
});