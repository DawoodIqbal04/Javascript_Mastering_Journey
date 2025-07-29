// Control Flow. Control flow statements in Javascript control the order in which code is executed. These statements allow you to make decisions and repeat code and jump between part of code and program based on specific conditions.

// -- If Else and Else If Statements
// In this case you can control on your code based on condition that which code should run or not 

let IsBusLate = false

if (IsBusLate) {
    console.log('I will reach late at school.'); // if condition is true, this block runs
} 
else {
    console.log('I will be on time to school'); // if condition is false, this block runs
}

let marks = 98;

// These are else if statements where there are multiple conditions. If condition will be matched in first block it runs other wise it goes to second condition and so on and if all condition doesnot match it run the else block

if (marks >= 80) {
    console.log('Your grade is A+');
}
else if (marks >= 70) {
    console.log('Your grade is A')
}
else if (marks >= 60) {
    console.log('Your grade is B')
}
else if (marks >= 50) {
    console.log('Your grade is C')
}
else {
    console.log('You are fail!')
}


// Nested if else statements

let outer = true
let inner = false

if (outer) {
    console.log('Outer if')
    if (inner) {
        console.log('Inner if')
    }
    else {
        console.log('Inner else')
    }
}
else {
    console.log('Outer else')
}


// -- Switch Case Statements
// Switch case statement works same as if else statements but its syntax and usecase make it differ from it. In this we give single expression or condition to switch block and in it we make cases like, if condition case is this run this.

let expression = 1;

switch (expression) {
    case 1:
        ++expression; // if this case mathces add 1 in it and print it
        console.log(expression) // answer will be 2
        break; // if you want to stop conditioning if it matches you need to add break key word.
    case 2:
        ++expression;
        console.log(expression)
        break;
    case 3:
        ++expression;
        console.log(expression)
        break;
    case 4:
        ++expression;
        console.log(expression)
        break;

    default: // if cases doesnot match with condition this block runs
        console.log('Nothing matches')
}