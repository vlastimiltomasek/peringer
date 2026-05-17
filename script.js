/* ---------------------------------------------------------------
   Masáže Martin Peringer Brno – drobné interakce
   --------------------------------------------------------------- */
(function () {
    'use strict';

    /* --- 1. Aktuální rok do patičky --- */
    var year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();

    /* --- 2. Mobilní hamburger menu --- */
    var toggle = document.getElementById('navToggle');
    var nav    = document.getElementById('primaryNav');

    if (toggle && nav) {
        toggle.addEventListener('click', function () {
            var open = nav.classList.toggle('is-open');
            toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
            toggle.setAttribute('aria-label', open ? 'Zavřít menu' : 'Otevřít menu');
            document.body.style.overflow = open ? 'hidden' : '';
        });

        /* Zavřít menu po kliknutí na odkaz */
        nav.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                if (nav.classList.contains('is-open')) {
                    nav.classList.remove('is-open');
                    toggle.setAttribute('aria-expanded', 'false');
                    toggle.setAttribute('aria-label', 'Otevřít menu');
                    document.body.style.overflow = '';
                }
            });
        });

        /* Zavřít menu při zvětšení viewportu nad breakpoint */
        var mq = window.matchMedia('(min-width: 1024px)');
        mq.addEventListener('change', function (e) {
            if (e.matches && nav.classList.contains('is-open')) {
                nav.classList.remove('is-open');
                toggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });
    }

    /* --- 3. Fade‑in animace při scrollu --- */
    var reveals = document.querySelectorAll(
        '.section-head, .card, .ritual, .ethic, .sport-text, .sport-image, .about-text, .about-side, .contact-info, .contact-map, .motto p'
    );
    reveals.forEach(function (el) { el.classList.add('reveal'); });

    if ('IntersectionObserver' in window) {
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

        reveals.forEach(function (el) { io.observe(el); });
    } else {
        reveals.forEach(function (el) { el.classList.add('is-visible'); });
    }

    /* --- 4. Lehký parallax na hero pozadí (jen desktop, jen pokud uživatel nemá redukci pohybu) --- */
    var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var heroImage = document.querySelector('.hero-image');
    if (heroImage && !prefersReduced && window.matchMedia('(min-width: 1024px)').matches) {
        var raf = null;
        window.addEventListener('scroll', function () {
            if (raf) return;
            raf = window.requestAnimationFrame(function () {
                var y = Math.min(window.scrollY, 700);
                heroImage.style.transform = 'translateY(' + (y * 0.18) + 'px) scale(1.05)';
                raf = null;
            });
        }, { passive: true });
    }

    /* --- 5. Stín na hlavičce po scrollu --- */
    var header = document.querySelector('.site-header');
    if (header) {
        var setShadow = function () {
            if (window.scrollY > 8) {
                header.style.boxShadow = '0 6px 20px -8px rgba(47, 58, 43, .18)';
            } else {
                header.style.boxShadow = 'none';
            }
        };
        setShadow();
        window.addEventListener('scroll', setShadow, { passive: true });
    }

    /* --- 6. Externí odkazy v patičce: target=_blank + rel=noopener (pojistka) --- */
    document.querySelectorAll('a[target="_blank"]').forEach(function (a) {
        if (!a.rel.includes('noopener')) a.rel = (a.rel + ' noopener').trim();
    });

})();
