const {generateRandomIndex} = require('../../generateRandomIndex')

const parseTextInSpecificLanguage = (text, language) => {

    const textPiecesWithoutSpaces = text.map((e) => e[`${ language }`])

    return textPiecesWithoutSpaces
}
const pointer = null
const textSnapShots = []
const usedIndexesArray = [];

const translateOneMoreWord = (snapShotArray, pointer,) => {

    generateRandomIndex(text)
}


module.exports = {
    parseTextInSpecificLanguage
}

