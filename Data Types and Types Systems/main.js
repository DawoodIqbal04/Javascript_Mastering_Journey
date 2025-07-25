// Data Types

// There are two types of data types Primitives data types and Reference data types
// 1- Primitives (string, number, boolean, null, undefined, symbol, bigInt)
// 2- Reference (Array, object, function and 2 more but in typescript (tuple, enum))

// In primitives data types we can copy the data to the new variable but in reference data types we cannot copy but will get a reference in new variable

// -- String. Every thing between single quotes(''), double quotes("") and backticks(``) are considered as string

let name = 'This is string of single quotes'
var a = "This is string of double quotes"
const b = `This is string of backticks`

let all = name + a + b // Concatinating all string into one
console.log(all); // All strings will merged to one


// -- Number. Every integer is the data type of number e.g. 2, 34 and even the decimal integers are number data type

// We can do all mathemetical calculations with numbers

let num = 1234
let num2 = 22.33

let num3 = num + num2
console.log(num3);

let num4 = num3 - 1120
console.log(num4);

let num5 = num4 / 2
console.log(num5);


// -- Boolean. The boolean data type is consisted of two keywords (true and false). True means that the expression or condition is true and False means that the expression or condition is false.

var best = true
var worst = false

let bool = 22
let cool = '22'
console.log(bool > 21); // Output: true because 22 is greater than 21
console.log(bool == cool); // Output: true because == didnot check data type
console.log(bool === cool); // Output: false because === check type and number is not equal to string


// -- Null. When you didnot give a value to a variable and you will give it a value in the future then you will give it a type of null.

let ab = null;
var abc = null;
const fool = null;


// -- undefined. When you donot give variable a value its by default given undefined

let und;
var no;
console.log(und, no); // undefined

// const ever; / Null is not accessable with const cause const needs initialization


// -- Arrays. Array can store different values of different data types in one variable.

let arr = [12, 'Suleman', false]
let arr2 = arr // In refernce data types we are not copying arr into arr2 we are giving reference to variable that means if we change something in arr the values of arr2 will also modified

arr2[0] = 10 // this change will be conluded for both arr and arr2


// -- Objects. Object can store key value pairs of different data types.

let obj = {
    fName : 'Muhammad',
    lName : 'Dawood',
    age : 19,
    hobbies : ['Coding', 'Cricket', 'Boxing']
}

obj.age = 18 // We can access key by var name + .
console.log(obj);


// -- Functions. Function are block of code use to perform a particular task, ones a function is defined we can use it in entire code.

function greeting(name) {
    console.log(`Hi ${name}! Welcome Javascript Mastery Course.`);
    
}

greeting('dawood')

