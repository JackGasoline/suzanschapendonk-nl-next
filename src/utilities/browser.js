import queryString from 'query-string';

export const isClient = () => typeof window !== 'undefined';
export const isServer = () => !isClient();

export const getUrlSearchParams = () => {
    const locationSearch = isClient() ? window.location.search : null;

    if (locationSearch) {
        return queryString.parse(locationSearch, {
            parseBooleans: true,
            parseNumbers: true
        });
    }

    return {};
};
