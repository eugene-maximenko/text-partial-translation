const {text} = require('../../adventure-1-silver-blaze-part-1')
const {generateRandomIndex} = require('../../generateRandomIndex')
const {joinArrayWithSpaces, printText} = require('./displayFunctions')
const parseTextInSpecificLanguage = (text, language) => {

    const textPiecesWithoutSpaces = text.map((e) => e[`${ language }`])

    return textPiecesWithoutSpaces
}


const snapShotsArray = []
let pointer = null
const usedIndexesArray = []

const displayTextFirstTime = (originalText, language, snapShotsArray) => {
    const textWithoutSpaces = parseTextInSpecificLanguage(text, language)

    snapShotsArray.push(textWithoutSpaces)
    pointer = 0

    const joinedText = joinArrayWithSpaces(textWithoutSpaces)
    printText(joinedText)
}

const translateOneMoreWord = (originalText, language) => {
    if (pointer === snapShotsArray.length - 1) {
        const originalSubarray = snapShotsArray[pointer]

        const newSubarray = [...originalSubarray]

        const randomIndex = generateRandomIndex(newSubarray, usedIndexesArray)
        const translationWord = originalText[randomIndex][language]
        newSubarray.splice(randomIndex, 1, translationWord)

        snapShotsArray.push(newSubarray)
        pointer++

        const joinedText = joinArrayWithSpaces(newSubarray)
        printText(joinedText)
    }
}

displayTextFirstTime(text, 'english', snapShotsArray, pointer)

translateOneMoreWord(text, 'russian')
translateOneMoreWord(text, 'russian')
translateOneMoreWord(text, 'russian')
translateOneMoreWord(text, 'russian')
translateOneMoreWord(text, 'russian')
translateOneMoreWord(text, 'russian')

module.exports = {
    parseTextInSpecificLanguage,
    translateOneMoreWord
}

