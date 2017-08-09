const recursive = require("recursive-readdir");
const fs = require("fs");

function pathInTransformPathOut(workingDir, transform, excludedExpression) {
    recursive(workingDir).then(function(files) {
        files.forEach((file) => {
            transformContent(file, transform)
                .then((transformedContent) => {
                    writeFile(transformedContent, file)
                });

        });
    });

}

function transformContent(file, transform) {

    var fileContent = fs.readFileSync(file, 'utf-8');

    return transform(fileContent);

}

function writeFile(transformedContent, file) {

    fs.writeFile(file, transformedContent, 'utf8', function (err) {
        if (err) {
            return console.log(err);
        }
        console.log('Writing complete : ' + file);
    });

}

module.exports = pathInTransformPathOut;