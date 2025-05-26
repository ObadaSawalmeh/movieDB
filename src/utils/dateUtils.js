export const formatDate = (dateString, options = {}) => {
    if (!dateString) return "";

    const defaultOptions = {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    };
    

    return new Date(dateString).toLocaleDateString("en-US", {
        ...defaultOptions,
        ...options
    });
};