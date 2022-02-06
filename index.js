const {text} = require('./adventure-1-silver-blaze-part-1');
const {generateRandomIndex, usedIndexes} = require("./generateRandomIndex");
const {fillCurrentField} = require("./generateRandomIndex copy");
const {parseTextInSpecificLanguage, translateOneMoreWord} = require('./src/lib/buttonsHandlers')
fillCurrentField(text, 'english')


const pointer = null
const textSnapShots = []
const usedIndexesArray = [];
// for (let i = 0; i <= text.length; i++) {
//   let string = ''
//   const randomIndex = generateRandomIndex(text);

//   string = string.concat(...text.map((e) => e.current).join(' '));
//   console.log(string, '\n');
//   if (i < text.length) {
//     text[randomIndex].current = text[randomIndex].russian;
//   }
//   usedIndexes.push(randomIndex);
// }

console.log(translateOneMoreWord(text, 'russian'))

