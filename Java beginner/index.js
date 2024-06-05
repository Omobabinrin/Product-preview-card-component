const userDetails = {
    username: `debby`,
    age: 6,
    firstName: "John",
    lastName: "debby"
}
   

// console.log(`she is ${userDetails.firstName} ${userDetails.lastName}`)
// console.log(userDetails.username.includes(""))
// console.log(userDetails.firstName.charCodeAt(""))
// console.log(userDetails.age)
// console.log(`she is ${name}`)
// console.log(`she is ${age} years old`)
// console.log(`my username is ${username}`)

// const input = prompt("what is your age")

// console.log(input)

// if (userDetails.age < 5 ) {
//     console.log(`she is too young`)
// }
// else (userDetails.age > 25 ); {
//     console.log("she is too old")
// }

// switch (true) {
//     case userDetails.age > 10:
//         console.log("you are too young");
//         break;
//     case userDetails.age < 25:
//         console.log("you are too old");
//         break;
// }


let array = [1,2,3,4,5,6,7,8,9,10];

// console.log(array)

let even = []
let odd = []
for (let i = 0; i< array.length; i++) {
    if (array[i] % 2 === 0) {
        even.push(array[i])
    }
    else {
        odd.push(array[i])
    }
}

// console.log("even-array", even)
// console.log('odd-array', odd)


let reverse = []
for (let i = array.length -1; i > -1; i--) {
    reverse.push(array[i])
    // if (array[i] - 1 == -1) {
    //     reverse.push(array[i])
    // }
}

// console.log("reverse", reverse)

const amount = [10, 20,30, 40, 50, 80, -19, -100, 90]

// Map

const negativeNumbers = amount.map(function(number) {
    if (number < 0) return number;
})

console.log(negativeNumbers)

console.log("FILTERED")