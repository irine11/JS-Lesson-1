//7 exercise
let array = [
    [2, -3, 5, 10],
    [25, -24, -11, 100],
    [-6, -7, 10]
]
for (let i = 0; i < array.length; i++) {
    let numbers = array[i];
    for (let x = 0; x < numbers.length; x++) {
        let positive = numbers[x];
        if (positive > 0) {
            console.log(positive);
        }
    }
}