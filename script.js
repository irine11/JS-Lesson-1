// 1 exercise
let user = {
    firstName: "giorgi",
    lastName: "smith",
    age: 25,
    studentStatus: "active"
};
console.log(user.studentStatus);
// console.log(user["studentstatus"]);

// 2 exercise
let numbers = [10, 14, 25, 52, 55];
for (let i = 0; i < 4; i++) {
    console.log(numbers[i]);
}
for (let y of numbers) {
    console.log(y);
}

let z = 0;
while (z < numbers.length) {
    console.log(numbers[z]);
    z++;
}

// 3 exercise
let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];
for (let x of numbers) {
    if (x > 5) {

        console.log(x);

    }

}
// let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];
for (let x = 0; x < numbers.length; x++) {
    if (numbers[x] > 5) {

        console.log(numbers[x]);
    }
}


// 5 exercise
let array = ["watermelon", "pear", 10, 45, 50, "apple", "ananas"]
for (let x of array) {
    if (typeof x == "string") {
        console.log(x);
    }
}