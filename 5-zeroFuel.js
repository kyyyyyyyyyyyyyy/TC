// WPU Coding Challenge 2024
// 5/366
// https://www.codewars.com/kata/5861d28f124b35723e00005e/solutions/javascript

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     if(mpg * fuelLeft >= distanceToPump) {
//         return true
//     } else {
//         return false
//     }
// };

const zeroFuel = (distanceToPump, mpg, fuelLeft) => mpg * fuelLeft >= distanceToPump ? true : false

console.log(zeroFuel(100, 25, 4))