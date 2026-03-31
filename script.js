// Script pour ajouter des interactions et animations stylisées

// ──────────────────────────────────────────────────────────────────────────────
//   INJECTION DU CONTENU DEPUIS content.js
//   Cette fonction lit SITE_CONTENT et remplit tous les éléments du HTML.
//   Pour modifier un texte, éditez content.js — ne touchez pas à cette fonction.
// ──────────────────────────────────────────────────────────────────────────────
function renderContent() {
    if (typeof SITE_CONTENT === 'undefined') {
        console.warn('[content] SITE_CONTENT introuvable — vérifiez que content.js est bien chargé avant script.js.');
        return;
    }

    const c = SITE_CONTENT;

    // Icône SVG réutilisable pour les boutons de téléchargement
    const downloadSVG = `<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2"
        fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="7 10 12 15 17 10"></polyline>
        <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>`;

    // Helper : remplit un élément si il existe
    const fill = (id, html) => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = html;
    };

    // ── Header ──────────────────────────────────────────────
    fill('site-title',    c.header.title);
    fill('site-subtitle', c.header.subtitle);

    // ── Introduction ────────────────────────────────────────
    fill('intro-heading', c.introduction.heading);
    fill('intro-text',    c.introduction.text);

    // ── Observation ─────────────────────────────────────────
    fill('observation-heading', c.observation.heading);
    fill('observation-items', c.observation.items.map(item => `
        <div class="observation-item">
            <h3>${item.subheading}</h3>
            <p>${item.text}</p>
        </div>`).join(''));

    // ── Analysis ────────────────────────────────────────────
    fill('analysis-heading', c.analysis.heading);
    fill('analysis-items', c.analysis.items.map(item => `
        <div class="analysis-item">
            <h3>${item.subheading}</h3>
            <p>${item.text}</p>
        </div>`).join(''));

    // ── Discussion ──────────────────────────────────────────
    fill('discussion-heading', c.discussion.heading);
    fill('discussion-items', c.discussion.items.map(item => `
        <div class="discussion-item">
            <h3>${item.subheading}</h3>
            <p>${item.text}</p>
        </div>`).join(''));

    // ── Creative Expression ─────────────────────────────────
    fill('creative-heading', c.creativeExpression.heading);
    fill('story-heading',    c.creativeExpression.story.subheading);
    fill('story-paragraphs', c.creativeExpression.story.paragraphs
        .map(p => `<p>${p}</p>`).join(''));

    fill('artworks-container', c.creativeExpression.artworks.map(art => `
        <div class="artwork">
            <h3>${art.subheading}</h3>
            <img src="${art.imageSrc}" alt="${art.imageAlt}" class="artwork-image" loading="lazy">
            <h2>${art.promptLabel}</h2>
            <p class="prompt">${art.prompt}</p>
        </div>`).join(''));

    // ── Downloads ───────────────────────────────────────────
    fill('downloads-heading', c.downloads.heading);
    fill('download-buttons', c.downloads.buttons.map(btn => `
        <a href="${btn.href}" download="${btn.filename}" class="dl-btn" data-download>
            ${downloadSVG}
            ${btn.label}
        </a>`).join(''));

    // ── Footer ──────────────────────────────────────────────
    fill('footer-credits-title', c.footer.creditsTitle);
    fill('footer-authors', c.footer.authors.map(name => `<li>${name}</li>`).join(''));
    fill('footer-hosting', c.footer.hostingInfo);

    const legalLink = document.getElementById('footer-legal-link');
    if (legalLink) {
        legalLink.textContent = c.footer.legalLabel;
        legalLink.href        = c.footer.legalHref;
    }
}

// ──────────────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', function() {

    // Injection du contenu textuel depuis content.js
    renderContent();

    console.log('Site chargé avec succès ! (Animations avancées activées)');

    // ─── Détection et sauvegarde des infos visiteur en localStorage ───────────
    (function saveVisitorInfo() {
        try {
            // Type d'appareil
            const ua = navigator.userAgent;
            const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
            const isTablet = /iPad|Android(?!.*Mobile)/i.test(ua);
            const deviceType = isTablet ? 'tablet' : (isMobile ? 'phone' : 'pc');

            // Résolution de l'écran
            const screenRes = `${window.screen.width}x${window.screen.height}`;

            // Langue du navigateur
            const lang = navigator.language || navigator.userLanguage || 'inconnu';

            // Préférence de couleur système
            const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

            // Première visite et dernière visite
            const now = new Date().toISOString();
            const firstVisit = localStorage.getItem('firstVisit') || now;
            if (!localStorage.getItem('firstVisit')) {
                localStorage.setItem('firstVisit', now);
            }
            localStorage.setItem('lastVisit', now);

            // Compteur de visites
            const visits = parseInt(localStorage.getItem('visitCount') || '0') + 1;
            localStorage.setItem('visitCount', visits.toString());

            // Sauvegarder toutes les infos
            localStorage.setItem('deviceType', deviceType);
            localStorage.setItem('screenResolution', screenRes);
            localStorage.setItem('browserLanguage', lang);
            localStorage.setItem('prefersColorScheme', prefersColorScheme);

            console.log(`[Visiteur] Appareil: ${deviceType} | Résolution: ${screenRes} | Langue: ${lang} | Visite n°${visits}`);
        } catch(e) {
            // localStorage peut être bloqué dans certains navigateurs en mode privé
        }
    })();

    // ─── Gestion du thème (uniquement via localStorage, jamais dans l'URL) ────
    const themeToggle = document.getElementById('theme-toggle');

    // Nettoyer ?theme= de l'URL si présent (sans rechargement)
    try {
        const url = new URL(window.location.href);
        if (url.searchParams.has('theme')) {
            url.searchParams.delete('theme');
            window.history.replaceState({}, '', url.pathname + (url.search === '?' ? '' : url.search));
        }
    } catch(e) {}

    // Fonction pour appliquer le thème
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            if (themeToggle) themeToggle.textContent = 'Mode Clair';
        } else {
            document.documentElement.removeAttribute('data-theme');
            if (themeToggle) themeToggle.textContent = 'Mode Sombre';
        }
        // Sauvegarder dans localStorage uniquement (pas dans l'URL)
        try { localStorage.setItem('theme', theme); } catch(e) {}
    };

    // Initialisation du thème au chargement depuis localStorage uniquement
    let currentTheme;
    try { currentTheme = localStorage.getItem('theme'); } catch(e) {}
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
        });
    }

    // Synchronisation du thème entre les onglets
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