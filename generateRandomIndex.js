function generateRandomIndex(textArray, usedIndexesArray) {
    const randomIndex = Math.floor(Math.random() * textArray.length);

    if (usedIndexesArray.length === textArray.length) {
        return;
    }

    if (!usedIndexesArray.includes(randomIndex)) {
        return randomIndex;
    }

    return generateRandomIndex(textArray, usedIndexesArray);
}
module.exports = {generateRandomIndex};
