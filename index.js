function map(arr, func){
    let new_arr = []
    arr.forEach(item => {new_arr.push(func(item))})
    return new_arr
}

function reduce(sourceArray, func, start){
    let memo = (!!start) ? start : sourceArray[0]
    let i = (!!start) ? 0 : 1
    for (i; i < sourceArray.length; i ++){
        memo = func(sourceArray[i], memo)
    }
    return memo
}