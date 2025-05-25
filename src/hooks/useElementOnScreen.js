import { useEffect, useState } from 'react';

export function useElementOnScreen(ref, rootMargin = '0px') {
    const [isIntersecting, setIsIntersecting] = useState(true);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => setIsIntersecting(entry.isIntersecting),
            { root: null, rootMargin, threshold: 0 }
        );

        observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [ref, rootMargin]);

    return isIntersecting;
}
