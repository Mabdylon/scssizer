'use strict';

var buttonTransform = document.getElementById("button-transform");
var cssInput = document.getElementById("css-input");
var scssResult = document.getElementById("scss-result");

buttonTransform.addEventListener('click', onClickButtonTransform);


function onClickButtonTransform() {
    var payload = {
        content:
        {
            input: cssInput.value
        }
    };
    postJSON('scssizer', onSuccessTransform, onErrorTransform, payload);
}

function onSuccessTransform(result) {
    scssResult.value = result.content.output;
}

function onErrorTransform(err) {
    console.log('Some error occured');
    console.log(err);
}

function postJSON(url, success, error, data) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                success(JSON.parse(xhr.responseText));
            } else {
                error(xhr.responseText);
            }
        }
    };

    xhr.open('POST', url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));
}