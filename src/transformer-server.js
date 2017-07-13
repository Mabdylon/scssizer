const bodyParser = require('body-parser');
const express = require('express');
const stringReplacerDictionary = require('./string-replacer-dictionary');

const portNumber = 1984;

function launch() {

    var app = express();

    app.use(bodyParser.json({limit: '1mb'}));       // to support JSON-encoded bodies
    app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
        extended: true
    }));

    app.use(express.static('public'));

    app.post('/scssizer', (req, res) => {
        stringReplacerDictionary(req.body.content.input)
            .then((transformedText) => {
                req.body.content.output = transformedText;
                res.json(req.body   );
            });
    });

    app.listen(portNumber, () => {
        console.log('Scssizer listening on port ' + portNumber + ' !');
    });

}

module.exports = launch;