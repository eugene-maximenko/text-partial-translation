const englishOrigin = [
  '"I am afraid, Watson, that I shall have to go, said Holmes."',
];

const russianOrigin = [
  'Я босюсь, Ватсон, что мне придется уехать, - сказал Холмс.',
];
// =>

const englishSplited = [
  '"I',
  'am afraid,',
  'Watson,',
  'that',
  'I',
  'shall have',
  'to go",',
  'said',
  'Holmes."',
];

const russianSplited = [
  'Я',
  'босюсь,',
  'Ватсон,',
  'что',
  'мне',
  'придется',
  'уехать',
  '- сказал',
  'Холмс.',
];

const usedIndexes = [];

function generateRandomIndex(array) {
  const randomIndex = Math.floor(Math.random() * array.length);

  if (!usedIndexes.includes(randomIndex)) {
    return randomIndex;
  }

  return generateRandomIndex(array);
}

for (let i = 0; i < englishSplited.length; i++) {
  if (russianSplited.length !== englishSplited.length) {
    throw new Error();
  }

  const randomIndex = generateRandomIndex(englishSplited);
  englishSplited.splice(randomIndex, 1, russianSplited[randomIndex]);
  console.log(englishSplited.join(' '));
  usedIndexes.push(randomIndex);
}
