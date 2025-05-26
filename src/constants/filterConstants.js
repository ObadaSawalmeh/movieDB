export const filterLabels = {
    sort: 'Sort',
    filters: 'Filters',
    genres: 'Genres',
    keywords: 'Keywords',
    sortResultsBy: 'Sort Results By',
    keywordsPlaceholder: 'Filter by Movie Name...',
    search: 'Search'
};


export const sortOptions = [
    { value: 'popularityDescending', label: 'Popularity Descending', tmdb: 'popularity.desc' },
    { value: 'popularityAscending', label: 'Popularity Ascending', tmdb: 'popularity.asc' },
    { value: 'ratingDescending', label: 'Rating Descending', tmdb: 'vote_average.desc' },
    { value: 'ratingAscending', label: 'Rating Ascending', tmdb: 'vote_average.asc' },
    { value: 'releaseDateDescending', label: 'Release Date Descending', tmdb: 'release_date.desc' },
    { value: 'releaseDateAscending', label: 'Release Date Ascending', tmdb: 'release_date.asc' }
];
