//Day1: Variables and Datatypes

//Activity 1
//Task 1
var myNum = 275
console.log(myNum);

//Task 2
let myStr = "Hello JS"
console.log(myStr);


//Activity 2
//Task 3
const myBool = true
console.log(myBool);


//Activity 3
//Task 4
let NumNum = 45837
let StrStr = "I am just a language"
let Bools = false
let MyObj =
{
    name: "Ishani",
    age: 22

}
let MyArr = [11, 22, 33, 44, 55]

console.log(typeof NumNum);
console.log(typeof StrStr);
console.log(typeof Bools);
console.log(typeof MyObj);
console.log(typeof MyArr);


//Activity 4
//Task 5
let anotherVar = 10000
console.log(anotherVar);
anotherVar = 2000
console.log(anotherVar);


//Activity 5
//Task 6
const myConst = 11111
console.log(myConst);
/*myConst = 22222
console.log(myConst); 
Output= TypeError: Assignment to constant variable. */


//Feature Request
//1. Variable Types Console Log
let featureNum = 62734671
let featureStr = "This is a string"
let featureBool = true
let featureObj = {
    day: 'Thursday',
    date: 11
}
let featureArr = ["abc", "bcd", "cde", "def"]

console.log(`The type of the variable ${featureNum} is ${typeof featureNum}.`);
console.log(`The type of the variable ${featureStr} is ${typeof featureStr}.`);
console.log(`The type of the variable ${featureBool} is ${typeof featureBool}.`);
console.log(`The type of the variable ${JSON.stringify(featureObj)} is ${typeof featureObj}.`);
console.log(`The type of the variable ${featureArr} is ${typeof featureArr}.`);


//2. Reassignment Demo
let ReassgnVar = "Can we reassign this 'let' ?"
console.log(ReassgnVar);
ReassgnVar = "Yes, We can."
console.log(ReassgnVar);

const ReassgnCons = "Can we reassign this 'const' ?"
console.log(ReassgnCons);
ReassgnCons = "No, we cant."
console.log(ReassgnCons); 

//We can reassign value to 'let' but we cannot reassign value to the 'const'.

