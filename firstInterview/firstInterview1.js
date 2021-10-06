/*
 * Complete the 'getMaxDeletions' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function getMaxDeletions(s) {
    let uCount=0;
    let dCount=0;
    let lCount=0;
    let rCount=0;
    let verticalCount=0;
    let horizontalCount=0;
    for(let i=0; i<s.length; i++){
        if(s[i]==="U") uCount++;
        else if(s[i]==="D") dCount++;
        else if(s[i]==="L") lCount++;
        else if(s[i]==="R") rCount++;
    }
    if(uCount>=dCount) verticalCount = dCount*2;
    else verticalCount = uCount*2;
    if(lCount>=rCount) horizontalCount = rCount*2;
    else horizontalCount = lCount*2;
    return verticalCount + horizontalCount;
}