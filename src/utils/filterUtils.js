import { sortOptions } from './filterConstants.js';



export const mapSortValue = (sortBy) => {
    const sortOption = sortOptions.find(option => option.value === sortBy);
    return sortOption ? sortOption.tmdb : "popularity.desc";
};

export const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};