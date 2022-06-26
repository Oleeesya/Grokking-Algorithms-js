function findSmallest(arr) {
    let min = arr[0];
    let minIndex = 0;
    for (let i = 1; i < arr.length; i++) {
        if(min > arr[i]) {
            min = arr[i]; 
            minIndex = i;    
        }
    }
    return minIndex;
}

function selectionSort(arr) {
    const newArr = [];
    const c = arr.length;
    for (let i = 0; i < c; i++) {
        let minIndex = findSmallest(arr);
        newArr.push(arr[minIndex]);
        arr.splice(minIndex, 1);
    }
    return newArr;
}

console.log(selectionSort([5, 3, 6, 2, 10]));
