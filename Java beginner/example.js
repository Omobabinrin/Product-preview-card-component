// function addition(a, b){
//     return a + b
// }

// console.log('function addition', addition(12, 6))


// let a = 10
// let b = 12

// console.log(a + b)

// function multiplication(a, b){
//     return a * b
// }

// console.log(`function multiplication`, multiplication(20, 6))

// const data = ["sam", "peter", "john", "collins"]

// // spread and rest operator ...

// const [s, ...p] = data;

// console.log(s);

// const data2 = [1, 2, 3, 4, 5, 6, ...data];

// function divide(a, b=10, c=2){
//     console.log((a+b)/c)
//     if (a == even) {
//         console.log()
//     } else {
        
//     }
// }

// divide(10)


// mean([1,5,6,7,3,5,7,8,12])


// function mean(array){
//    console.log(array)
// }

// function EvenORodd(number){
//     if (number !== +number){
//         console.log('You did Not pass a number you passed')
//         return;
//     }
//     if (number%2 === 0){
//         console.log("Even Number")
//     } else {
//         console.log("Odd Number")
//     }
// }

// EvenORodd(2);
// EvenORodd(6);
// EvenORodd(9);
// EvenORodd(4);
// EvenORodd(djkdwrftgyuhji);
// EvenORodd("object");
// EvenORodd({});

// const listofCars = ["Toyota", "benz", "camry", "honda", "jeep"]

// alert(listofCars)

// const carEL = document.getElementById("car")

// carEL.innerHTML = listofCars;

// console.log(listofCars.include("jeep"))

// function Cars(carEL){
//     if (Cars === Toyota) {
//         console.log(true)
//     } else {
//         console.log(false)
//     }


const targetContainer = document.getElementById("target");
const reducebtn = document.getElementById("Reduce");
const increasebtn = document.getElementById("Increase");
const resetBtn = document.getElementById("Reset");


let counter = 0;

reducebtn.addEventListener("click", function(){
    counter -= 1;
    changeCountcolor(counter)
    targetContainer.textContent = counter
});

// increasebtn.addEventListener("click", function(){
//     counter += 1;
//     // changeCountcolor(counter)
//     targetContainer.textContent = counter
// })

increasebtn.addEventListener("click", function(){
    counter += 1;
    changeCountcolor(counter)
    targetContainer.textContent = counter
})

resetBtn.addEventListener("click", function(){
    counter = 0;
    changeCountcolor(counter)
    targetContainer.textContent = counter
})

function changeCountcolor(counter){
    if (counter === 0)
        targetContainer.style.color = "black"
    else if (counter < 1)
        targetContainer.style.color = "red"
    else 
        targetContainer.style.color = "green"
}

