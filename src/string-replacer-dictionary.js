const scssDictionaryPromise = require('./scss-dictionary');

function StringReplacerDictionaryPromise(cssString) {
    var err;
    return new Promise((resolve, reject) => {
        scssDictionaryPromise
            .then((dictionary) => {
                Object.entries(dictionary).forEach(
                    ([key, value]) => {
                        cssString = cssString.replace(new RegExp(value), key);
                    }
                );
                if (err) {
                    return console.log(err);
                }
                console.log('StringReplacer complete'); 
                resolve(cssString);
            });
    });
}


module.exports = StringReplacerDictionaryPromise