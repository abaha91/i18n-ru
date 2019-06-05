import toGenitive from './cases/genitive'
import toVinit from './cases/vinit'
import { consonantsLetters } from './constants'

export default function toDeclension(declension, word) {
  let actionType;
  switch (declension) {
    case 'genitive':
      actionType = toGenitive;
      return wordTypeDefination(word, actionType);
      break;
    case 'vinit':
      actionType = toVinit;
      return wordTypeDefination(word, actionType);
      break;
    default:
      return word;
      break;
  }
}

function wordTypeDefination(word, actionType) {
  if (word.indexOf(' ') && word.indexOf(' ') !== 0 && word.indexOf(' ') !== word.length -1) {
    let result = [];
    for (let item in word.split(' ')) {
      result.push(actionType(word.split(' ')[item], consonantsLetters));
    }
    return result.join(' ');
  }
  if (word.indexOf('-')) {
    let result = [];
    for (let item in word.split('-')) {
      item == 0 ? result.push(word.split('-'))[item] : '';
      result.push(actionType(word.split(' ')[item], consonantsLetters));
    }
    return result.join('-');
  }
}