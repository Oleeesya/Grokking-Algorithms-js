function searchBinary(arr, b) {
    let min = 0;
    let max = arr.length - 1;
    do {
        let mid = Math.floor((min + max) / 2);
        if( b == arr[mid] ) {
            return mid;
        }
        else if ( b < arr[mid] ) {
            max = mid - 1;
            console.log(max)
        }
        else if (b > arr[mid]) {
            min = mid  + 1;
            console.log(min)
        }

    }
    while (min <= max);

    return false;
}


const list = [2, 4, 5, 13, 15, 35, 346, 465];
console.log(searchBinary(list, 12))