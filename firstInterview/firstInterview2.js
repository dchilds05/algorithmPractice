/*
 * Complete the 'closestNumbers' function below.
 *
 * The function accepts INTEGER_ARRAY numbers as parameter.
 */

function closestNumbers(numbers) {
    let diff = Number.MAX_VALUE;
    numbers.sort((a,b) => a-b);
    //FIND THE SMALLEST DIFFERENCE
    for(let i=1; i<numbers.length; i++){
        if((numbers[i]-numbers[i-1]) < diff) diff = numbers[i]-numbers[i-1];
    }
    //PRINT OUT ALL OF THE SETS THAT HAVE THAT DIFFERENCE
    for(let x=1; x<numbers.length; x++){
        if((numbers[x]-numbers[x-1]) === diff) {
            console.log(`${numbers[x-1]} ${numbers[x]}`);
        }
    }
}