const parseTextInSpecificLanguage = (text, language) => {

    const textPiecesWithoutSpaces = text.map((e) => e[`${ language }`])

    return textPiecesWithoutSpaces.join(" ")
}

const generateRandomIndex = (text, usedIndexes) => {
    const randomIndex = Math.floor(Math.random() * text.length);

    if (usedIndexes.length < text.length) {

        if (!usedIndexes.includes(randomIndex)) {
            return randomIndex;
        }

        return generateRandomIndex(text);
    }
}

const translateOneMoreWord = (text, pointer,) => {

}

module.exports = {
    parseTextInSpecificLanguage
}

