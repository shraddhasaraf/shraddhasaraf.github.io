import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    const trackPageView = () => {
      if (window.gtag) {
        window.gtag('event', 'page_view', {
          page_path: location.pathname + location.search + location.hash,
          page_title: document.title,
          page_location: window.location.href
        });
      }
    };

    // Track initial page view
    trackPageView();

    // Track section views
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          if (window.gtag) {
            window.gtag('event', 'section_view', {
              section_name: sectionId,
              time_stamp: new Date().toISOString()
            });
          }
        }
      });
    }, { threshold: 0.5 });

    // Observe all sections
    document.querySelectorAll('section[id]').forEach(section => {
      observer.observe(section);
    });

    // Track user interactions
    const trackInteraction = (type, label) => {
      if (window.gtag) {
        window.gtag('event', 'user_interaction', {
          interaction_type: type,
          label: label,
          time_stamp: new Date().toISOString()
        });
      }
    };

    // Track clicks on important elements
    const trackClicks = (e) => {
      const target = e.target.closest('a, button');
      if (target) {
        const label = target.textContent || target.getAttribute('aria-label') || 'unnamed';
        trackInteraction('click', label);
      }
    };

    document.addEventListener('click', trackClicks);

    return () => {
      observer.disconnect();
      document.removeEventListener('click', trackClicks);
    };
  }, [location]);

  return null;
};

export default Analytics;
