// if any value is not added it will show result NaN
// function add(num1, num2) {
//     return num1 + num2;
// };
// const total = add(15);
// console.log(total);

// to fix this we have to fix the default value is 0/something;
function add(num1, num2) {
    // one way
    if (num2 == undefined) {
        num2 = 0;
    }
    // another way
    num2 = num2 || 4;
    return num1 + num2;
};
// const total = add(15);
// console.log(total);

// in  ES-6 dafault value is added in the variable like below
function add(num1, num2 = 0) {
    return num1 + num2;
};
const total = add(15);
console.log(total);