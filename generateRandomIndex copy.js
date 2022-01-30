const {text} = require('./adventure-1-silver-blaze-part-1');

const fillCurrentField = (textArray, sourceLanguage) => {
    textArray.forEach(element => {
        element.current = element[`${ sourceLanguage }`]
    });
}

module.exports = {
    fillCurrentField
}