export const prepareData = data => {
    if (!data) return;
    const images = [];

    for (const [key, value] of Object.entries(data)) {
        images.push({
            id: key,
            ...value,
        });
    }

    return images;
};
