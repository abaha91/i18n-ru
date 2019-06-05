export default function toVinit(word, consonantsLetters) {
  if (word[word.length - 1] === "а") {
    return word.slice(0, word.length - 1) + 'у';
  }
  if (word.slice(word.length - 2) === 'ая') {
    return word.slice(0, word.length - 2) + 'ую';
  }
  if (word.slice(word.length - 2) === 'яя') {
    return word.slice(0, word.length - 2) + 'юю';
  }
  return word;
};