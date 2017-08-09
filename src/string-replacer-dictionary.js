const dictionary = require('../resources/dictionary.json');

function StringReplacerDictionaryPromise(cssString) {
    var err;
    return new Promise((resolve, reject) => {

        Object.entries(dictionary).forEach(
            ([key, value]) => {
                cssString = cssString.replace(value, key);
            }
        );
        if (err) {
            return console.log(err);
        }
        resolve(cssString);

    });
}


module.exports = StringReplacerDictionaryPromise