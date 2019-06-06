# i18n-ru

i18n-ru is a js plugin for internationalization of nouns in Russian language.

## Installation

Use the package manager npm to install i18n-ru.

```bash
npm i -D i18n-ru
```

## Usage

```python
import toDeclension from 'i18n-ru';
```

<b>toDeclention</b> is a function that takes two arguments: <b>case</b>(string) and <b>word</b>(string) and return declentioned word.

<b>Cases supported:</b> 'vinit' and 'genitive'.


## Example
```python
toDeclension('vinit', 'Верхняя Пышма'); // Верхнюю Пышму
toDeclension('genitive', 'Верхняя Пышма'); // Верхней Пышмы
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
## Repository
[Github](https://github.com/abaha91)
## License
[MIT](https://choosealicense.com/licenses/mit/)