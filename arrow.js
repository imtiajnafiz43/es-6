// function doubleIt(num) {
//     return num * 2;
// }

// const doubleIt = function (num) {
//     return num * 2;
// }
// arrow function in ES-6
const doubleIt = num => num * 2;
const result = doubleIt(6);
console.log(result);
// for multiple parameter
const add = (x, y) => x + y;
const result2 = add(20, 60);
console.log(result2);
// 
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
    // inthis case we must return what we expect to see as output
}
const math = doMath(10, 5);
console.log(math);