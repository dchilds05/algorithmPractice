/*
 * Complete the 'reductionCost' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY num as parameter.
 */

function reductionCost(num) {
    let totalCost=0;
    num.sort((a,b) => a-b);
    for(let i=0; i<num.length; i++){
        let newNum = num[i]+num[i+1]
        totalCost += newNum;
        num.splice(i,2);
        num.push(newNum);
        num.sort((a,b) => a-b);
        if(num.length===1) return totalCost;
        i=-1;
    }
}
