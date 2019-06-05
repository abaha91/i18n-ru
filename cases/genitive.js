export default function toGenitive(word, consonantsLetters) {
  if (word.slice(word.length -3) == 'ний') {
    return `${word.slice(0, word.length - 2)}его`;
  }
  if (word.slice(word.length -2) == 'яя') {
    return `${word.slice(0, word.length - 2)}ей`;
  }
  if (word.slice(word.length -2) == 'ий' || word.slice(word.length -2) == 'ый' || word.slice(word.length -2) == 'ой') {
    return `${word.slice(0, word.length - 2)}ого`;
  }
  if (word.slice(word.length -2) == 'ок' || word.slice(word.length -2) == 'ек' || word.slice(word.length -2) == 'ёк') {
    return `${word.slice(0, word.length - 2)}ка`;
  }
  if (word.slice(word.length -2) == 'ая') {
    return `${word.slice(0, word.length - 2)}ой`;
  }
  if (word.slice(word.length -2) == "ка") {
    return word.slice(0, word.length - 1) + 'и';
  }
  if (word.slice(word.length -2) == "ия") {
    return word.slice(0, word.length - 1) + 'ю';
  }
  if (word.slice(word.length -2) == 'ец') {
    return `${word.slice(0, word.length - 2)}ца`;
  }
  if (word[word.length - 1] == "а") {
    return word.slice(0, word.length - 1) + 'ы';
  }
  if (word[word.length - 1] == "я" || word[word.length - 1] == "ь") {
    return word.slice(0, word.length - 1) + 'и';
  }
  if (consonantsLetters.indexOf(word[word.length - 1]) !== -1) {
    return `${word}a`;
  }
  return word;
};