import { useEffect, useState } from 'react';

export const useFooterVisibility = () => {
    const [isFooterVisible, setIsFooterVisible] = useState(false);
    const [footerHeight, setFooterHeight] = useState(0);

    useEffect(() => {
        const footer = document.querySelector('footer') ||
            document.querySelector('[data-testid="footer"]') ||
            document.querySelector('[class*="Footer"]') ||
            document.querySelector('[class*="footer"]');

        if (!footer) {
            console.warn('Footer element not found. Add data-testid="footer" to your footer component.');
            return;
        }

        // Function to check if footer is visible
        const checkFooterVisibility = () => {
            const footerRect = footer.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Footer is visible if any part of it is in the viewport
            const isVisible = footerRect.top < windowHeight && footerRect.bottom > 0;
            setIsFooterVisible(isVisible);
            setFooterHeight(footer.offsetHeight);
        };

        // Check initial state
        checkFooterVisibility();

        // Intersection Observer for better performance
        const observer = new IntersectionObserver(
            (entries) => {
                const footerEntry = entries[0];
                setIsFooterVisible(footerEntry.isIntersecting);

                if (footerEntry.isIntersecting) {
                    setFooterHeight(footer.offsetHeight);
                }
            },
            {
                // Trigger when footer starts entering viewport
                rootMargin: '0px 0px -10px 0px',
                threshold: 0
            }
        );

        observer.observe(footer);


        // Throttled scroll handler for smooth performance
        let scrollTimer = null;
        const handleScroll = () => {
            if (scrollTimer) return;
            scrollTimer = setTimeout(() => {
                checkFooterVisibility();
                scrollTimer = null;
            }, 16);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', checkFooterVisibility, { passive: true });

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', checkFooterVisibility);
            if (scrollTimer) clearTimeout(scrollTimer);
        };
    }, []);

    return { isFooterVisible, footerHeight };
};