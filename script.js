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
// 4 exercise 
let user = {
    name: "giorgi",
    age: 20,
    studentStatus: "active"
}
if (user.age < 18 && user.studentStatus == "active") {
    console.log(hello);
} else if (user.name == "giorgi") {
    console.log('hello giorgi')
} else if (user.studentStatus == "active" || user.age < 25) {
    console.log("hello world")
} else {
    console.log(error);
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

//6 exercise
let array = [[2, -3, 5, 10],[25, -24, -11, 100],[-6, -7, 10]]
for (let x of array) {
    let numbers = x;
    for (let z of numbers) {
        let positive = z;
        if (positive > 0) {
            console.log(positive);
        }
    }
}
// 7 exercise
let array = [32, 10, "hello", null, "hello2", 50]
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (typeof element == "number" && element % 5 == 0) {
        console.log(element);
    }
}
