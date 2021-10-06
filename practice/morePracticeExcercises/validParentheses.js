function validParentheses(str){
    let stack = [];
    for(let i = 0; i < str.length; i++){
        switch (str[i]){
            case "(":
                stack.push(")");
                break;
            case "[":
                stack.push("]");
                break;
            case "{":
                stack.push("}");
                break;
            case ")":
            case "]":
            case "}":
                if(stack[stack.length-1] !== str[i]) return "invalid";
                stack.pop();
                break;
        }
    }
    if(stack.length === 0) return "valid";
    return "invalid";
}

module.exports = validParentheses;