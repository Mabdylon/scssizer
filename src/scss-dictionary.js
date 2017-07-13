const path = require('path');
const fs = require('fs');


const fileName = path.join(__dirname, '..', 'resources', 'dictionary.map');
const scssDictionary = {};

var dictionaryPromise = readFilePromise(fileName)
    .then((fileContent) => fileContent.split('\n'))
    .then((lines) => 
        lines.filter( 
            (line) => line[0] === '$')
    )
    .then(mapFilteredLineToDictionnaries); 



function mapFilteredLineToDictionnaries(filteredLines) {
    return new Promise((resolve, reject) =>
    {
        filteredLines.forEach(function(line) {
            var properties = line.split(':')[0];
            var value = line    .split(':')[1].substring(1);
            scssDictionary[properties] = value; 
        });
        resolve(scssDictionary);
    })
}


function readFilePromise(fileName) {
    return new Promise((resolve, reject) => 
    {
        fs.readFile(fileName, 'utf-8', (err, data) =>
        {
            if(err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    });
}


module.exports = dictionaryPromise;
