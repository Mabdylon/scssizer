const fs = require('fs');
const path = require('path')

function pathInTransformPathOut(pathIn, transform) {

    var files = fs.readdirSync(pathIn);
    files.forEach((file) => {
        var absFileName = path.join(pathIn, file);
        transformContent(absFileName, transform)
            .then((transformedContent) => {
                writeNewFile(transformedContent, absFileName)
            });

    });

}

function transformContent(file, transform) {

    var fileContent = fs.readFileSync(file, 'utf-8');

    return transform(fileContent);

}

function writeNewFile(transformedContent, file) {

    fs.writeFile(file, transformedContent, 'utf8', function (err) {
        if (err) {
            return console.log(err);
        }
        console.log('Writing new file complete');
    });

}

module.exports = pathInTransformPathOut;