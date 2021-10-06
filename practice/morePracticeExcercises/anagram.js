const { CustomConsole } = require("@jest/console");

function isAnagram(str1, str2){
    if(!str1 || !str2) return null;
    
    str1 = str1.replace(/[^\w]/g, "").split("").sort();
    str2 = str2.replace(/[^\w]/g, '').split("").sort();
    
    console.log(str1, str2);
    
    if(str1.length !== str2.length) return false;

    for(let i = 0; i < str1.length; i++){
        if(str1[i] !== str2[i]) return false;
    }

    return true;
}

module.exports = isAnagram;