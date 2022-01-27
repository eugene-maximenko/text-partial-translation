const englishOrigin = [
  '"I am afraid, Watson, that I shall have to go, said Holmes."',
];

const russianOrigin = [
  'Босюсь, Ватсон, что мне придется уехать, - сказал Холмс.',
];
// =>

const englishSplited = [
  '"I am',
  'afraid,',
  'Watson,',
  'that',
  'I',
  'shall have to go,',
  'said Holmes."',
];

const russianSplited = [
  'Босюсь, Ватсон, что мне придется уехать, - сказал Холмс.',
];

console.log(englishSplited.join(' '));
