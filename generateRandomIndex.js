const usedIndexes = [];

function generateRandomIndex(array) {
    const randomIndex = Math.floor(Math.random() * array.length);

    if (usedIndexes.length === array.length) {
        return;
    }

    if (!usedIndexes.includes(randomIndex)) {
        return randomIndex;
    }

    return generateRandomIndex(array);
}
module.exports = {generateRandomIndex, usedIndexes};
