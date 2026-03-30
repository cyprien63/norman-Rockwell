// Script pour ajouter des interactions et animations stylisées

document.addEventListener('DOMContentLoaded', function() {
    console.log('Site chargé avec succès ! (Animations avancées activées)');

    // Theme toggle (Smooth transition)
    const themeToggle = document.getElementById('theme-toggle');
    
    // Fonction pour appliquer le thème
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            if (themeToggle) themeToggle.textContent = 'Mode Clair';
        } else {
            document.documentElement.removeAttribute('data-theme');
            if (themeToggle) themeToggle.textContent = 'Mode Sombre';
        }

        // Mettre à jour les liens de navigation pour garder le thème (indispensable pour les fichiers locaux)
        document.querySelectorAll('a').forEach(a => {
            const href = a.getAttribute('href');
            if (href && (href.includes('.html') || href === 'index.html' || href === 'mentions-legales.html')) {
                const bareHref = href.split('?')[0];
                a.setAttribute('href', bareHref + '?theme=' + theme);
            }
        });
    };

    // Initialisation du thème au chargement
    const urlParams = new URLSearchParams(window.location.search);
    let currentTheme = urlParams.get('theme');
    
    if (!currentTheme) {
        try { currentTheme = localStorage.getItem('theme'); } catch(e) {}
    }
    
    if (!currentTheme) {
        currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    applyTheme(currentTheme);

    // Changement de thème au clic
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            const newTheme = isDark ? 'light' : 'dark';
            applyTheme(newTheme);
            try { localStorage.setItem('theme', newTheme); } catch(e) {}
        });
    }

    // Synchronisation du thème entre les onglets (ex: index.html et mentions-legales.html)
    window.addEventListener('storage', (e) => {
        if (e.key === 'theme') {
            applyTheme(e.newValue);
        }
    });

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
        section.style.transitionDelay = `${index * 0.02}s`;
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.05,
        rootMargin: "0px 0px -20px 0px"
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