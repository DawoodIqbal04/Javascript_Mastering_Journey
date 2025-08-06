// LOOPS. Loop is a programming construct that allow a block of code to be excuted repeatedly or until the specific condition is met. Loops are essential in repeating the tasks or iterating on collection of data and run the code certain of times.

// --For Loop. We use for loop when we know where to start, where to end, and what to change then we use for loop.

    // start     end    change
for (let i = 1; i < 21; i++) {
    console.log('I am printed', i, 'times') // code
}

let car = [1,2,3]

// We can iterate on arrays and strings
for (let i = 1; i <= car.length; i++) {
    console.log('This is car no', i)
}


// --While Loop. We use while loop when we know where to start, when to stop, and what to change then we use while loop.

let i = 0 // Starting
        // End
while (i < 21) {
    i++ // Code
    console.log(i);
    
}


// --Do While Loop. In do while loop the do block runs atleast once no matter if while block condition is false.

let a = 0;

// This do block runs atleast 1 times
do{
    a++
}
// while condition is false so it
while (a < 31) {
    a++
}

console.log(a)


// --Break and Continue. We use break to stop loop on specify condition and similarly we use continue to skip a instance of loop.

for (i = 1; i < 101; i++) {
    if(i === 30) { // when i turn 30 the loop stops
        break;
    }
    console.log(i); // answer will be 29
    
}

for (j = 1; j < 22; j++) {
    if (j === 12) { // when j turn 12 it skips it and run the next instance of loop
        continue;
    }
    console.log('cont', j); // it prints 1 to 21 except 12
    
}