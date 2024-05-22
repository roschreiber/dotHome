window.onload = function() {
    const inputElement = document.querySelector('input');

    let searchURL;
    switch(window.searchEngine.toUpperCase()) {
        case 'GOOGLE':
            searchURL = 'https://www.google.com/search?q=';
            break;
        case 'DUCKDUCKGO':
            searchURL = 'https://duckduckgo.com/?q=';
            break;
        case 'DISROOT':
            searchURL = 'https://search.disroot.org/search?q=';
            break;
        case 'CUSTOM':
            searchURL = window.customSearchURL;
            break;
        default:
            console.error('Invalid search engine specified, did you mean CUSTOM?');
    }

    inputElement.addEventListener('change', function() {
        const query = encodeURIComponent(inputElement.value);
        if (query.trim() !== '') {
            window.open(searchURL + query, '_blank');
        }
    });
};