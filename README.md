# Latinator3000
The Latinator3000 is a simple web page I wrote.
Enter any Latin word into the search bar, and the result will be returned from Wiktionary in an iFrame.
[Try it out here!]( https://perpetualpanda.github.io/Latinator3000/)

## Support for Other Languages
This project was made to search for Latin words but it can be customized for other languages as well.
In the `script.js` file, simply replace `'#Latin'` with any other language supported by Wiktionary:

`var URL = 'https://en.wiktionary.org/wiki/' + input + '#Latin';`

## Customization
The background image and webpage text can be easily changed.
Change line 4 and line 15 in ```index.html``` to customize text.

```
line 4:  <title>Latinator 3000</title>
line 15: <h3>THE LATINATOR 3000&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
```
To customize the background image, replace `background.jpg` in the `assets` folder with any image of the same name.
