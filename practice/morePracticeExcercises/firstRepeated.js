/*
function firstRepeated (str){
    let stack = [];
    for (let i = 0; i < str.length; i++){
        if(stack.includes(str[i])) return str[i];
        stack.push(str[i]);
    }
    return null;
}
*/

/*
function firstRepeated (str){
    for (let i = 0; i < str.length; i++){
        if(str.indexOf(str[i]) !== i) return str[i];
    }
    return null;
}
*/


function firstRepeated (str){
    for (let i = 0; i < str.length; i++){
        if(str.indexOf(str[i]) === i && str.indexOf((str[i]),i+1) !== -1) return str[i];
    }
    return null;
}


module.exports = firstRepeated;