type TextObject = {
    current: string
    english: string
    russian: string
}

type TextArray = TextObject[]

const constructText: (array: TextArray) => string = (array: TextArray): string => {
    let string = ''
    array.forEach(value => {
        string += " " + value.english
    })

    return string
}

module.exports = {
    constructText
}