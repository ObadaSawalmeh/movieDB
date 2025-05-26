export const navItemsOptions = {
    tvShows: {
        label: "TV Shows",
        tooltipOptions: [
            "Popular",
            "Now Playing",
            "Upcoming",
            "Top Rated"
        ]
    },
    movies: {
        label: "Movies",
        tooltipOptions: [
            "Popular",
            "Airing Today",
            "On TV",
            "Top Rated"
        ]
    },
    people: {
        label: "People",
        tooltipOptions: [
            "Popular People"
        ]
    },
    more: {
        label: "More",
        tooltipOptions: [
            "Discussions",
            "Leaderboard",
            "Support",
            "API Documentation",
            "API for Business"
        ]
    }
};

export const navOptions = Object.values(navItemsOptions).map(item => item.label);