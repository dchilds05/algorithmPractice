const { CustomConsole } = require("@jest/console");

function nonRepeating(str){
    for(let i = 0; i < str.length; i++){
        let curentVal = str[i];
        if(str.indexOf(curentVal) === i && str.indexOf(curentVal,i+1) === -1) return curentVal;
    }
    return null;
}

module.exports = nonRepeating;