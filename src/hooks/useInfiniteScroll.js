import { useEffect, useRef, useState } from "react";
import { useFooterVisibility } from "./useFooterVisibility";

export function useInfiniteScroll({ data, loading, loadMore }) {
    const [isInfiniteScrollEnabled, setIsInfiniteScrollEnabled] = useState(false);
    const { isFooterVisible } = useFooterVisibility();
    const hasUserActivatedInfiniteScrollRef = useRef(false);

    // Reset infinite scroll when new data loads (filters changed)
    useEffect(() => {
        if (data?.page === 1 && data?.results?.length > 0) {
            setIsInfiniteScrollEnabled(false);
            // Don't reset hasUserActivatedInfiniteScrollRef here
            // so user preference persists across filter changes
        }
    }, [data?.page, data?.results?.length]);

    // Only trigger auto-load if user has manually activated infinite scroll
    useEffect(() => {
        if (
            hasUserActivatedInfiniteScrollRef.current && // User must have clicked Load More at least once
            isInfiniteScrollEnabled &&
            !loading &&
            isFooterVisible &&
            data?.page < data?.total_pages
        ) {
            loadMore();
        }
    }, [isFooterVisible, isInfiniteScrollEnabled, loading, data?.page, data?.total_pages, loadMore]);

    const handleManualLoadMore = () => {
        if (data?.page < data?.total_pages && !loading) {
            // Mark that user has activated infinite scroll
            hasUserActivatedInfiniteScrollRef.current = true;

            loadMore();

            // Enable infinite scroll for future automatic loads
            setIsInfiniteScrollEnabled(true);
        }
    };

    return {
        isInfiniteScrollEnabled,
        handleManualLoadMore,
    };
}