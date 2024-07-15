//Day 3: Control Structures

//Activity 1
//Task 1
let reqdNum = -36274
if(reqdNum > 0)
    console.log("Positive");
else if(reqdNum < 0)
    console.log("Negative");
else
    console.log("Zero");

//Task 2
let age = 21
if(age >= 18)
    console.log("Eligible to Vote");
else
    console.log("Not eligible to Vote");


//Activity 2
//Task 3
let num1 = 24, num2= 18, num3 = 44
if(num1 > num2)
    if(num1 > num3)
        console.log(`Largest number is ${num1}`);
    else
        console.log(`Largest number is ${num3}`);
else if(num2 > num1)
    if(num2 > num3)
        console.log(`Largest number is ${num2}`);
    else
        console.log(`Largest number is ${num3}`);
    

//Activity 3
//Task 4
let reqdNum2 = 5
switch(reqdNum2) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
}

//Task 5
let score = 89
switch(true) {
    case (score > 90):
        console.log('A');
        break;
    case (score > 80):
        console.log('B');
        break;
    case (score > 70):
        console.log('C');
        break;
    case (score > 60):
        console.log('D');
        break;
    case (score > 50):
        console.log('E');
        break;
    default: 
        console.log('F');

}


//Activity 4
//Task 6
let myNum = 61
myNum % 2 == 0 ? console.log("Even") : console.log("Odd")


//Activity 5
//Task 7
let year = 1997
if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0)
    console.log(`${year} is a leap year`);
else
    console.log(`${year} is not a leap year`);
