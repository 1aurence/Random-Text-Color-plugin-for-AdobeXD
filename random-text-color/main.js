const commands = require('commands');
const { alert } = require("./lib/dialogs.js");
const { Text, Color } = require("scenegraph");

function randomColor(selection){
    if (selection.items.length !== 0) {
        selection.items.forEach((node) => {
            node.styleRanges = [{
                fill: getRandomColor(),
            }];
        })
        
    } else {
        showAlert('You must select text first to its change color.');
    }
}

function showAlert(message) {
    alert(message);
}
function getRandomColor(){
    let generateRGB = () => Math.floor(Math.random() * 255);
    let randomRGB = `RGB(${generateRGB()}, ${generateRGB()}, ${generateRGB()}, 100%)`;
    return new Color(randomRGB);
}

module.exports = {
    commands: {
        randomColor
    }
}