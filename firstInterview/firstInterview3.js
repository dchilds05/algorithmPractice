/*
 * Complete the 'solve' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER X
 *  2. INTEGER_ARRAY arr
 *  3. INTEGER_ARRAY query_values
 */

function solve(X, arr, query_values) {
    query_values.forEach((el) => {
        let count=0;
        for(let i=0; i<arr.length; i++){
            if(arr[i]===X) count++;
            if(count === el) console.log([(i+1)]);
            else if(i===arr.length-1) console.log([-1]);
        }
    })

}