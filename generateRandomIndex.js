const usedIndexesArray = []

function generateRandomIndex(textArray) {
    const randomIndex = Math.floor(Math.random() * textArray.length);

    if (usedIndexesArray.length === textArray.length) {
        return;
    }

    if (!usedIndexesArray.includes(randomIndex)) {
        usedIndexesArray.push(randomIndex)
        return randomIndex;
    }

    return generateRandomIndex(textArray, usedIndexesArray);
}
module.exports = {generateRandomIndex};
