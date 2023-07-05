// 표준 function
function calculateSumFirst(first, second){
    return first + second;
}

let third = calculateSumFirst(4, 6);

let calculateMinusSecond = (first, second) => {
    return first - second;
} ;

// calculateMinusSecond(2, 1)
// 1

// callback function 
function calculateForth(funcName, param1, parma2){
    let result = funcName(param1, parma2);
    result = result + 10;
    return result;
}
