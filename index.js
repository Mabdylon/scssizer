const pathInTransformPathOut = require('./src/path-in-transform-path-out');
const stringReplacerDictionary = require('./src/string-replacer-dictionary');
const transformerServer = require('./src/transformer-server');

console.log('// starting ...');
console.log('-----------------------------------------------');
console.log('// USAGE - FILE IN TO FILE OUT :');
console.log('// scssizer <pathCSSIn>')
console.log('// EXAMPLE : node index.js /path/to/transform  ');
console.log('-----------------------------------------------');
console.log('// USAGE - WebServer on port 1984');
console.log('// npm run scssizer');
console.log('***********************************************');
console.log('');

if(isFileMode()) {

    let args = {
        pathCSSIn: process.argv[2]
    }
    pathInTransformPathOut(args.pathCSSIn, stringReplacerDictionary);

} else {

    transformerServer();

}

function isFileMode() {
    return (process.argv.length  === 3)
}
