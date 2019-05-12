# Latinator3000
The Latinator3000 is a simple web page I wrote.
Enter any Latin word into the search bar, and the result will be returned from Wiktionary in an iFrame.
Try it out here: https://perpetualpanda.github.io/latinator3000/

# Customization/Support for Other Languages
This project was made to search for Latin words but it can be customized for other languages as well.
In the script.js file, simply replace '#Latin' with any other language supported by Wiktionary:

var URL = 'https://en.wiktionary.org/wiki/' + input + '#Latin';

The background image and webpage text can also be easily changed in the HTML file.
