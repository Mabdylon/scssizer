const pathInTransformPathOut = require('./src/path-in-transform-path-out');
const stringReplacerDictionary = require('./src/string-replacer-dictionary');
const transformerServer = require('./src/transformer-server');

console.log('// starting ...');
console.log('-----------------------------------------------');
console.log('// USAGE - FILE IN TO FILE OUT :');
console.log('// scssizer-dir <workingDir>')
console.log('// EXAMPLE : npm run scssizer-dir /path/to/transform excludedExpression ');
console.log('-----------------------------------------------');
console.log('// USAGE - WebServer on port 1984');
console.log('// npm run scssizer');
console.log('***********************************************');
console.log('');

if(isFileMode()) {

    let args = {
        workingDir: process.argv[2],
        excludedExpression: process.argv[3] || ''
    }
    pathInTransformPathOut(args.workingDir, stringReplacerDictionary, args.excludedExpression);

} else {

    transformerServer();

}

function isFileMode() {
    console.log('isFileMode nb args : ', process.argv.length);
    return (process.argv.length >= 3)
}
