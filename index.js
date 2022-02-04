const {text} = require('./adventure-1-silver-blaze-part-1');
const {generateRandomIndex, usedIndexes} = require("./generateRandomIndex");
const {fillCurrentField} = require("./generateRandomIndex copy");
const {parseTextInSpecificLanguage} = require('./src/lib/buttonsHandlers')
fillCurrentField(text, 'english')

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

console.log(parseTextInSpecificLanguage(text, 'russian'))

