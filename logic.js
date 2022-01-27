const text = [
  {
    english: '"I',
    russian: 'Я',
  },
  {
    english: 'am afraid,',
    russian: 'босюсь,',
  },
  {
    english: 'Watson,',
    russian: 'Ватсон,',
  },
  {
    english: 'that',
    russian: 'что',
  },
  {
    english: 'I',
    russian: 'мне',
  },
  {
    english: 'shall have',
    russian: 'придется',
  },
  {
    english: 'to go",',
    russian: 'уехать,',
  },
  {
    english: 'said',
    russian: '- сказал',
  },
  {
    english: 'Holmes.',
    russian: 'Холмс.',
  },
];

const usedIndexes = [];

function generateRandomIndex(array) {
  const randomIndex = Math.floor(Math.random() * array.length);

  if (usedIndexes.length === text.length) {
    return;
  }

  if (!usedIndexes.includes(randomIndex)) {
    return randomIndex;
  }

  return generateRandomIndex(array);
}

for (let i = 0; i <= text.length; i++) {
  let string = '';
  const randomIndex = generateRandomIndex(text);

  string = string.concat(...text.map((e) => e.english).join(' '));
  console.log(string, '\n');
  if (i < text.length) {
    text[randomIndex].english = text[randomIndex].russian;
  }
  usedIndexes.push(randomIndex);
}
