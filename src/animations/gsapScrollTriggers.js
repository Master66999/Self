import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger plugin safely
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Initializes all GSAP ScrollTriggers and Text Triggers across the page.
 * Returns a cleanup function for React useEffect.
 */
export function initGSAPScrollTriggers() {
  const ctx = gsap.context(() => {

    // 1. Global Scroll Progress Indicator (Top Bar Scrub)
    const progressBar = document.querySelector('.scroll-progress-bar');
    if (progressBar) {
      gsap.to(progressBar, {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.3,
        },
      });
    }

    // 2. Hero Section Entrance Animation (Timeline on load)
    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    heroTl
      .fromTo(
        '.gsap-hero-badge',
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, delay: 0.1 }
      )
      .fromTo(
        '.gsap-hero-title-line',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15 },
        '-=0.3'
      )
      .fromTo(
        '.gsap-hero-desc',
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        '-=0.4'
      )
      .fromTo(
        '.gsap-hero-actions',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        '-=0.4'
      )
      .fromTo(
        '.gsap-hero-hud',
        { y: 30, opacity: 0, scale: 0.98 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8 },
        '-=0.5'
      )
      .fromTo(
        '.gsap-stat-pill',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.08 },
        '-=0.4'
      );

    // 3. Section Headers Text Trigger (Slides up elegantly when scrolled into view)
    const sectionHeaders = document.querySelectorAll('.gsap-section-header');
    sectionHeaders.forEach((header) => {
      const badge = header.querySelector('.gsap-header-badge');
      const title = header.querySelector('.gsap-header-title');
      const subtitle = header.querySelector('.gsap-header-sub');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: header,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      if (badge) {
        tl.fromTo(badge, { opacity: 0, x: -16 }, { opacity: 1, x: 0, duration: 0.4 });
      }
      if (title) {
        tl.fromTo(title, { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.6 }, '-=0.2');
      }
      if (subtitle) {
        tl.fromTo(subtitle, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.3');
      }
    });

    // 4. Staggered Project Cards Reveal Trigger
    const projectCards = document.querySelectorAll('.gsap-project-card');
    if (projectCards.length > 0) {
      gsap.fromTo(
        projectCards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#projects',
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // 5. Simulation Lab Sandbox Container Reveal Trigger
    const simulationBox = document.querySelector('.gsap-simulation-container');
    if (simulationBox) {
      gsap.fromTo(
        simulationBox,
        { opacity: 0, y: 35, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.75,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: simulationBox,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // 6. Bento Grid Philosophy Stagger Reveal
    const bentoCards = document.querySelectorAll('.gsap-bento-card');
    if (bentoCards.length > 0) {
      gsap.fromTo(
        bentoCards,
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: bentoCards[0],
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // 7. Skills Categories Stagger Reveal
    const skillCards = document.querySelectorAll('.gsap-skill-category');
    if (skillCards.length > 0) {
      gsap.fromTo(
        skillCards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#skills',
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // 7. Education & Certifications Stagger Reveal
    const eduCards = document.querySelectorAll('.gsap-edu-card');
    if (eduCards.length > 0) {
      gsap.fromTo(
        eduCards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#education',
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // 9. FAQ Items Stagger Reveal
    const faqItems = document.querySelectorAll('.gsap-faq-item');
    if (faqItems.length > 0) {
      gsap.fromTo(
        faqItems,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: faqItems[0],
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // 10. Contact Section Reveal
    const contactCards = document.querySelectorAll('.gsap-contact-card');
    if (contactCards.length > 0) {
      gsap.fromTo(
        contactCards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#contact',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

  });

  return () => {
    ctx.revert(); // clean up all GSAP timelines & ScrollTriggers on unmount
  };
}

