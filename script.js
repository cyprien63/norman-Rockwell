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
    if (tiltWrapper) {
        
        const mainImage = tiltWrapper.querySelector('.main-image');
        let ticking = false;

        const handleMove = (e) => {
            if (!ticking && mainImage) {
                window.requestAnimationFrame(() => {
                    const rect = tiltWrapper.getBoundingClientRect();
                    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
                    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

                    const x = clientX - rect.left;
                    const y = clientY - rect.top;
                    
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    
                    const rotateX = ((y - centerY) / centerY) * -10;
                    const rotateY = ((x - centerX) / centerX) * 10;
                    
                    mainImage.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02) translateZ(20px)`;
                    ticking = false;
                });
                ticking = true;
            }
        };

        const handleLeave = () => {
            if (mainImage) {
                mainImage.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1) translateZ(20px)`;
                mainImage.style.transition = 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)';
            }
        };

        const handleEnter = () => {
            if (mainImage) mainImage.style.transition = 'transform 0.1s ease';
        };

        // Compatibilité Ordinateur
        tiltWrapper.addEventListener('mousemove', handleMove, { passive: true });
        tiltWrapper.addEventListener('mouseleave', handleLeave);
        tiltWrapper.addEventListener('mouseenter', handleEnter);

        // Compatibilité Téléphone (Touch)
        tiltWrapper.addEventListener('touchmove', handleMove, { passive: true });
        tiltWrapper.addEventListener('touchend', handleLeave);
        tiltWrapper.addEventListener('touchstart', handleEnter, { passive: true });
    }

    // Gérer les téléchargements (Forcer le téléchargement si possible)
    document.querySelectorAll('[data-download]').forEach(btn => {
        btn.addEventListener('click', async function(e) {
            e.preventDefault();
            const url = this.getAttribute('href');
            const filename = this.getAttribute('download');
            
            try {
                const response = await fetch(url);
                const blob = await response.blob();
                const blobUrl = window.URL.createObjectURL(blob);
                
                const tempLink = document.createElement('a');
                tempLink.style.display = 'none';
                tempLink.href = blobUrl;
                tempLink.download = filename;
                document.body.appendChild(tempLink);
                tempLink.click();
                
                window.URL.revokeObjectURL(blobUrl);
                document.body.removeChild(tempLink);
            } catch (err) {
                // Fallback (ex: sécurité file:// des navigateurs)
                window.open(url, '_blank');
            }
        });
    });
});