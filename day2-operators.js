//Day 2: Operators

//Activity 1
//Task 1
let mySum = 2 + 7
console.log(mySum);

//Task 2
let myDiff = 18 - 3
console.log(myDiff);

//Task 3
let myProd = 12 * 15
console.log(myProd);

//Task 4
let myQuo = 18 / 3
console.log(myQuo);

//Task 5
let myRem = 29 % 3
console.log(myRem);


//Activity 2
//Task 6
let firstVar = 20
firstVar += 12
console.log(firstVar);

//Task 7
let secVar = 29
secVar -=9
console.log(secVar);


//Activity 3
//Task 8
console.log(17 > 21);
console.log(17 < 21);

//Task 9
console.log(27 >= 27);
console.log(88 <= 87);

//Task 10
console.log(12 == "12");
console.log(12 === "12");


//Activity 4
//Task 11
let firstNum = 78
if(firstNum > 18 && firstNum < 70)
    console.log("eligible");
else
    console.log("not eligible");

//Task 12
if(firstNum > 18 || firstNum < 70)
    console.log("eligible");
else
    console.log("not eligible");

//Task 13
let secNum = 18
if(secNum != 18)
    console.log("Correct ans");
else
    console.log("Wrong ans");


//Activity 5
//Task 15
secNum > 10 ? console.log("yes eligible") : console.log("not eligible");


//Feature Request
//1. Arithmetic Operations Script
let num1 = 30
let num2 = 2
console.log(`The Arithmetic Operations of ${num1} and ${num2} are as follows:`);
console.log(`Addition : ${num1} + ${num2} =`, num1+num2);
console.log(`Subtraction : ${num1} - ${num2} =`, num1-num2);
console.log(`Multiplication : ${num1} x ${num2} =`, num1*num2);
console.log(`Division : ${num1} / ${num2} =`, num1/num2);
console.log(`Remainder : ${num1} % ${num2} =`, num1%num2);

//2. Comparison and Logical Operators Script
let num3 = 37
let num4 = 35
console.log(`The Comparsion Operations of ${num3} and ${num4} are as follows:`);
console.log(`Is ${num3} > ${num4} :`, num3 > num4);
console.log(`Is ${num3} < ${num4} :`, num3 < num4);
console.log(`Is ${num3} >= ${num4} :`, num3 >= num4);
console.log(`Is ${num3} <= ${num4} :`, num3 <= num4);
console.log(`Is ${num3} == ${num4} :`, num3 == num4);
console.log("Is '12' === 12 :", "12" === 12);


//3. Ternary Operator Script
secNum > 10 ? console.log("yes eligible") : console.log("not eligible");
