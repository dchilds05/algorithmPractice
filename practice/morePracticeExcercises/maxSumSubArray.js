function maxSumSubArray(array, k){
    if(array.length === 0) return "invalid";
    if(k > array.length) return "invalid";
    let tempMax = 0;
    for (let i = 0; i < k; i++){
        tempMax += array[i];
    }
    let currentSum = tempMax;
    for (let i = 0; i < array.length - k; i++){
        currentSum -= array[i];
        currentSum += array[i+k]
        if(currentSum > tempMax) tempMax = currentSum;
    }
    return tempMax;
}

module.exports = maxSumSubArray;