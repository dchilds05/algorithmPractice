function alternatingSort(arr){
    arr.sort((a,b) => Math.abs(a)-Math.abs(b));
    let negArr = [];
    let posArr = [];
    let result = [];
    for(let i = 0; i < arr.length; i++){
       if(arr[i] < 0) negArr.push(arr[i]);
       else posArr.push(arr[i]);
    }
    while(negArr.length || posArr.length){
        if(negArr[0]) {
            result.push(negArr[0]);
            negArr.splice(0,1);
        }
        if(posArr[0]) {
            result.push(posArr[0]);
            posArr.splice(0,1);
        }
    }
    console.log("result:", result);
    return result;
}

module.exports = alternatingSort;