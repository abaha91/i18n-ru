export default function toDative(word, consonantsLetters) {
  if (word.slice(word.length -3) == 'ень') {
    return `${word.slice(0, word.length - 3)}мню`;
  }
  if (word.slice(word.length -3) == 'ний') {
    return `${word.slice(0, word.length - 3)}нему`;
  }
  if (word.slice(word.length -3) == 'лец') {
    return `${word.slice(0, word.length - 3)}льцу`;
  }
  if (word.slice(word.length -3) == 'рье') {
    return `${word.slice(0, word.length - 3)}рью`;
  }
  if (word.slice(word.length -2) == 'ёк' || word.slice(word.length -2) == 'ек') {
    return `${word.slice(0, word.length - 2)}ку`;
  }
  if (word.slice(word.length -2) == 'ая') {
    return `${word.slice(0, word.length - 2)}ой`;
  }
  if (word.slice(word.length -2) == 'ия') {
    return `${word.slice(0, word.length - 2)}ии`;
  }
  if (word.slice(word.length -2) == 'ли' || word.slice(word.length -2) == 'ни') {
    return `${word.slice(0, word.length - 1)}ям`;
  }
  if (word.slice(word.length -2) == 'яя') {
    return `${word.slice(0, word.length - 2)}ей`;
  }
  if (word[word.length - 2] == "нь") {
    return word.slice(0, word.length - 1) + 'и';
  }
  if (word[word.length - 2] == "ие") {
    return word.slice(0, word.length - 1) + 'м';
  }
  if (word.slice(word.length -2) == 'ий' || word.slice(word.length -2) == 'ый' || word.slice(word.length -2) == 'ой' || word.slice(word.length -2) == 'ое') {
    return `${word.slice(0, word.length - 3)}ому`;
  }
  if (consonantsLetters.indexOf(word[word.length - 1]) !== -1) {
    return `${word}у`;
  }
  if (word[word.length - 1] === "о") {
    return word;
  }
  if (word[word.length - 1] === "а" || word[word.length - 1] === "я") {
    return word.slice(0, word.length - 1) + 'e';
  }
  if (word[word.length - 1] === "ы" || word[word.length - 1] === "и") {
    return word.slice(0, word.length - 1) + 'ам';
  }
  if (word[word.length - 1] == "й" || word[word.length - 1] == "ь" || word[word.length - 1] == "е") {
    return word.slice(0, word.length - 1) + 'ю';
  }

  return word;
};