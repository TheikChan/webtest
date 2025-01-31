
// reference https://web.dev/learn/javascript?authuser=1 

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


// Strings letters, numbers, symbols and so on between set of double quotation marks("), single quotation marks('), backticks(`)

console.log("Hello, JS");
console.log('Hello, JS');
console.log(`Hello, JS`);

console.log("I'm a string"); // I'm a string
console.log('"A string," I said.'); // "A string," I said.
console.log('"I\'m a string," I said.'); // "I'm a string," I said.

// string 

let myString = String(10);
console.log(myString); // "10"
typeof myString; // string

// String concatenation
console.log("Hello" + "JS");


// string template
const myStrings = `This
is a string.`;
console.log(myStrings);

console.log(`The result is ${ 2 + 2 } .`); // The result is 6

const myNoun = "template literal";

function myTagFunction( myStrings, myPlaceholder )  { 
    const myInitialString = myStrings[ 0 ]; // will take the value before placeholder(${}) e.g I'm a 
    console.log( `${ myInitialString } modified ${ myPlaceholder }.`);
}


myTagFunction `I'm a ${ myNoun }.`; 


// Booleans
// false e.g NaN, -0, null, undefined
// true other values

const falseBoolean = Boolean( 0 );
console.log(falseBoolean);// false

const falseObject = new Boolean( 0 );
console.log(falseObject); // Boolean { false }


// null and undefined

// null - intentionally defined absence value 
// can also use to assign into variable to clear previous value

// undefined - no assigned value 
// assigned to variable that have just declared or result value of operation that not return meaningful value

function myFunction() { }

(function() {
    return;
}()); // return undefined because it return no value . in Kotlin it return Unit

null == undefined; // true compare euqal
null === undefined; // false compare unequal 


// BigInt - append n to eend of number , allow mathematical operation on numbers outside range allowed by Number
// can't used Javascript built-in Math object provides
// can't mix BitInt with Number primitives in standard arithmetic operations

const myNumber = 999999999999999;
typeof myNumber; // "number"
console.log(myNumber); // 10000000000000000000 cause rounding error 

const myBigInt = 999999999999999n;
typeof myBigInt; // bigint
console.log(myBigInt); // 9999999999999999n

// 9999999999999999n + 5; // will raised "Uncaught TypeError: can't convert BigInt to number"

console.log( 999999999999999 + 10 ); // 1000000000000000010
console.log( 99999999999999999999n + 10n ); // 10000000000000000009n 


// Symbol - unique value never collides with any other value
// can't enumerable
// getOwnPropertySymbols() give access to object's symbol properties

Symbol() === Symbol(); // false 
Symbol( "My symbol." ) === Symbol( "My symbol." ); // false My symbol. value is only for debug description 

// Symbol.for() - lookup exisitng eymbole in runtime-wide global symbol registray with give string as tring and return matching symbol if one is found
// if it doesn't find one, it creates a symbol with specified key and add it to the global registry.

let sharedSymbol = Symbol.for( "My key.");
sharedSymbol === Symbol.for( "My key." ); // true 


// retreive symbol key

let mySymbol = Symbol.for( "Key.");
Symbol.keyFor( mySymbol ); // "Key."


// Well-known symbol - static properties of Symbol object 
// often stylized with @@ prefix or wrapped in % to differnentiate their keys from mutable prototypes
// e.g @@match / %match% references to immutable Symbol.match not String.prototype.match
// provide unique property keys for accessing and modifying JavaScript's built-in methods while preventing core behavior from being unintentionally overwritten

// developer use as extention points for modifying JavaScript's behavior without introducting backward compability issues

// Symbol;
// > function Symbol()
//     asyncIterator: Symbol(Symbol.asyncIterator)
//     for: function for()
//     hasInstance: Symbol("Symbol.hasInstance")
//     isConcatSpreadable: Symbol("Symbol.isConcatSpreadable")
//     iterator: Symbol(Symbol.iterator)
//     keyFor: function keyFor()
//     length: 0
//     match: Symbol("Symbol.match")
//     matchAll: Symbol("Symbol.matchAll")
//     name: "Symbol"
//     prototype: Object { … }
//     replace: Symbol("Symbol.replace")
//     search: Symbol("Symbol.search")
//     species: Symbol("Symbol.species")
//     split: Symbol("Symbol.split")
//     toPrimitive: Symbol("Symbol.toPrimitive")
//     toStringTag: Symbol("Symbol.toStringTag")
//     unscopables: Symbol("Symbol.unscopables")
//     <prototype>: function ()


// Variables data structure - assign representative name to value
// can contain data of any king
// variable name = identifier 
// camel case e.g camelCasedIdentifier
// rules 
// can contain unicode letters, dollar signs($), underscore character(_), digits(0-9) and even some Unicode characters
// can't contain whitespace because parse use whitespace to separate input elements .
// can't contain special characters (! . , / \ + - * =).
// must start with letter, underscore or dollar sign
// can't start with digits to prevent confusion betweeen numbers andd identifiers
// should concisely describe the nature of the data they contain

// let 1a = true; // Uncaught SyntaxError: Invalid or unexpected token

// class name - Upper camel case or Pascal case 
class MyClass { 

}

// veraible start with underscore mean variable, method and property is private
// only intended to use within context of object that contain it
// shouldn't accessed or modified outside that context 


// declaration keyword - let , var , const

// let, var - can change mutable prefer let 
// const 
// with initialization value considered as undefined initial value

let number1;
console.log(number1); // undefined

number1 = 5;
number1 + number1; // 10 

let num1,
    num2,
    num3;

let num10;
let num20;
let num30;

// var - allow unnecessary redeclaration without error to preserve legacy browser compatibility

var myVariable1 = true;
var myVariable1 = false;

// myVariable1\ false 


// const - declare constant must immediately initialized and can't changed 
// initialize without value case syntax error
// try to change const variable cause type error 
// const contain object is immutable and if const is related to object it property can chagne and object can't change

const constantObject = { "firstvalue" : true }; // Object { firstvalue: true }
constantObject.secondValue = false ; // Object { firstvalue: true, secodnvalue: false}

// constantObject = false ;  // ncaught TypeError: invalid assignment to const 'constantObject'


// Variable Scope
// Block Scope
// function scode
// global scope

// block scope - scope to it closed containing block statement can only access within that block
// try to access from outside cause same error as access variable that doesn't exist

{ 
    let scopedVariable = true;
    console.log( scopedVariable ); // true
}

// scopedVariable; // ReferenceError: scopedVariable is not defined

{
    const myConstant = false;
}
const myConstant = true; // true 

{
    let scopedVariable = true;
    {
    console.log( scopedVariable ); // true
    }
}

// can change value withing descendant block

{
    let scopedVariable = false;
    {
    scopedVariable = true;
    } 
    console.log( scopedVariable ); // true
}

// Function scode - variable scope to closed containing function 

function myFunctionName() {
    var scopedVariable = true;
    return scopedVariable;
}

// scopedVariable; // ReferenceError: scopedVariable is not defined 
myFunctionName(); // true

// Global Scope - avaible throught the entire JavaScript application 

// any variable declare using var outside parent function or using let or const outsside parent block is global

var functionGlobal = true ; // Global variable

let blockGlobal = true; // Global variable
{
    console.log( blockGlobal ); // true
    console.log( functionGlobal ); // tue
}

(function() {
    console.log( blockGlobal ); // true
    console.log( functionGlobal ); // true
}());

// assigning value to without declaring it consider as global scope e.g globalVariable = "global"; // instead of let globalVariable = "global";

function myFunction() {
    globalVariable = "global";

    return globalVariable
}

console.log( globalVariable ); // "global"


// variable hoisting - only use for 'var' variable and function hoisted to top of their scope meaning JavaScript interpreter process any variable declared at any point in a script and effectively moves it to the first line of it enclosing scope before executing the script .
// mean variable declare using var can reference before variable is declared without error .

hoistedVariable // access variable before declaration without initialization it defult as undefined without error 
var hoistedVariable;


// unhoistedVariable
// unhoistedVariable = true; // not hoisted variable because it not include let, var and const prefix

// access variable before declaration with 'let' or 'const' cause error 

