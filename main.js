// Variables and Declarations

// Var  Let  Const

// Every variable declared outside a function or block is a global scoped

// Var is a function scope variable, var is allowed to redeclare or reassign

var a = 'Muhammad' // declaration
console.log(a); // 'Muhammad'

a = 'Dawood' // reassginment
console.log(a); // 'Dawood'

var a = 'Muhammad Dawood' // redeclaration
console.log(a); // 'Muhammad Dawood'

function UserName() {
    // if var is declared in a function it will be only available throughout the function only
    var name = 'Ali'
    if (true) {
        var fullName = name + a
        console.log(fullName); // 'Ali Muhammad'   
    }
}

// console.log(fullName); / Error not defined


// Let is a block scope, let is allowed to reassign but didnot allowed to redeclare with same name

let sum = 10 + 3 // declaration
sum = 15 + 11 // reassignment

// let sum = 22 + 31 / Error sum is already declared


// Const is block scope variable, Const store constant value init which cannot be redeclare nor can be reassigned

const abc = 'constant'
// abc = 'still constant' / Error constant cannot be reassign

// console.log(abc);
