function flip(array, n) {
    let left = 0;
    let right = n - 1;
    while (left < right) {
        [array[left], array[right]] = [array[right], array[left]];
        left++;
        right--;
    }
    return array;
}

function pancakeSort(array) {
    let n = array.length;
    
    for (let currSize = n; currSize > 1; currSize--) {
        let maxIndex = 0;
        for (let i = 1; i < currSize; i++) {
            if (array[i] > array[maxIndex]) {
                maxIndex = i;
            }
        }
        
        if (maxIndex !== currSize - 1) {
            if (maxIndex !== 0) {
                flip(array, maxIndex + 1);
            }
            flip(array, currSize);
        }
    }
    return array;
}
