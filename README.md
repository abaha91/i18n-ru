# i18n-ru

i18n-ru is a js plugin for declension of nouns in Russian language.

## Installation

Use the package manager npm to install i18n.

```bash
npm i -D i18n
```

## Usage

```python
import toDeclention from 'i18n';
```

<b>toDeclention</b> is a function that takes two arguments: <b>case</b>(string) and <b>word</b>(string) and return declentioned word.

cases supported 'vinit' and 'genitive'.


## Example
```python
toDeclension('vinit', 'Верхняя Пышма'); // Верхнюю Пышму
toDeclension('genitive', 'Верхней Пышмы'); // Нижнего Новгорода
```

## React Example
```python
  render() {
    return (
        <p>{toDeclension('genitive', 'Верхняя Пышма')}</p>
    );
  }
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)