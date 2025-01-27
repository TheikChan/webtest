

// statement

let myVariable 
= 
4;

console.log(typeof(myVariable));
console.log(typeof(myVariable.toString()));

if(myVariable == 4){
    console.log("it is even")
}else {
    console.log("it is odd")
}

console.log("1" + 1) // "11" because weakly typed language value no need to explicity marked as specific data type other strongly type language will show compile error


// primitive data type
// Numbers

// number value is made up of series of numeric character

let number = 5;

// number special global properties
// e.g Infinity and NaN(Not a Number) when attempt to perform math calcualtion on non-number values 

Number("11"); // convert string into number

Number(true); // will return 1
Number(false); // will return 0
Number(null); // will return 0

// if value can't convert into number then will Number function return NaN
// e.g Number(undefined), Number("the number is 3.")

let numObject = new Number(15); // will creat new Number object

let tenObject = new Number(10);
tenObject + 5; // return 15
tenObject == 10; // return false


// floats and integers

0.1 + 0.7; // 0.799999999999999

// number operators

2+2; // 4 addition
4-2; // 2 subtraction
2*5; // 10 multiplication
10/5; // 2 division
2++; // 3 increment
3--; // 2 decrement
2**4; // 16 exponent
12%5; // 2 remainder

// assignment operatos

myVariable += 2;

10/0; // return infinity instead of throwing error

// NaN will return when math arthmetic result can't represent as number and invalud valud represented as number in math operation

"2" * 2; // 2
"two" * 2; // Nan




