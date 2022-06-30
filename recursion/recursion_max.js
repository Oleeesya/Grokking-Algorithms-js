function max(arr) {
    if (arr.length == 2) {
        if (arr[0] < arr[1]) {
            return arr[1]
        }
        return arr[0]
    }
    return max(arr.slice(1))
}

console.log(max([1, 2, 3, 4, 5]))