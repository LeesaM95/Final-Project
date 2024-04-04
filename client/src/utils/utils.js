export const getImage = (path) => {
    return new URL(`/assets/wireframes/${path}`, import.meta.url).href;
};