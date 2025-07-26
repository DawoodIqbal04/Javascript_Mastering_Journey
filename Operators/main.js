// Operators. Operators are special symbols or keywords which perform opration on operands. It could be mathematical operation and many other. Operators are categorized in operation they perform.

// 1- Arithmetic Operators (+, -, *, /, %, **)
// 3- Comparision Operators (==, ===, !=, !==, >=, <=, >, <)
// 2- Assignment Operators (=, +=, -=, *=, /=, %= )
// 4- Logical Operators (&&, !, ||)
// 5- Ternary Operator (?:)
// - Urnary Operators

// -- Arithmatic Operators

var a = 12 + 3 // Addition
var b = a + 'dawood' // Concatenation
var c = a - 5 // Subtraction
var d = 10 / 2 // Division
var e = 22 * a // Multiplication
var f = a % 2 // Modulus / Modulo
var g = 2 ** 4 // Exponentiation


// -- Comparision Operators

var a = 12
var b = '12'
a == b // Not strict comparasion. Means donot check type of both operands. Answer: True
a === b // Strict comparasion. Check type of both operands. Answer: False
a != b // Not strict not equal to. Check if a is not equal to b but without type checking. Answer: False
a !== b // Strict not equal to. Check not equal to with type check. Answer: True
var c = 33
var d = 13
c > d // Checks if a is greater than b. Answer True
c < d // Checks if a is lower than b. Answer False
c >= d // Checks if a is greater than or equal to b. Answer True
c <= d // Checks if a is lower than ro equal to b. Answer False


// Assignment Operators
// Assignement means assign a value to operand or variable

var a = 30 // Assigning 30 to a
a += 5 // Taking the previuos value of a and add 5 than assign the value to a, 30 + 5 = 35
a -= 16 // Taking the previuos value of a and sub 16 than assign the value to a, 35 - 16 = 19
a *= 2 // Taking the previous value of a and multiply with 2 assign save the value to a, 19 * 2 = 38
a /= 4 // Taking the previous value of a and divide with 4 than assign the value to a, 38 / 4 = 9.5
a %= 2 // Taking the previous value of a and modulo with 2 than assign the value to a, 9.5 % 2 = 1.5
// So the final value of a will be 1.5