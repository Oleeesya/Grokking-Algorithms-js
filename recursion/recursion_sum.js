function sum(arr) {
    console.log(9)
    if(arr.length == 0) {
        return 0;
    }
    return arr[0] + sum(arr.slice(1));
}

console.log(sum([1, 2, 3, 4, 5]))