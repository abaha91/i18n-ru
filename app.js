import toGenitive from './cases/genitive';
import { consonantsLetters } from './constants';

export default function toDeclension(declension, word) {
  switch (declension) {
  case 'genitive':
    if (word.indexOf(' ') && word.indexOf(' ') !== 0 && word.indexOf(' ') !== word.length -1) {
      let result = [];
      for (let item in word.split(' ')) {
        result.push(toGenitive(word.split(' ')[item], consonantsLetters));
      }
      return result.join(' ');
    }
    if (word.indexOf('-')) {
      let result = [];
      for (let item in word.split('-')) {
        item == 0 ? result.push(word.split('-'))[item] : '';
        result.push(toGenitive(word.split(' ')[item], consonantsLetters));
      }
      return result.join('-');
    }
  }
}