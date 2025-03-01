// function

// function declaration
showName(); // Hoisting can call function before it declaration 
function showName() {

}

// named expression function 
const myVariable = function myFunction() {
    console.log( "One second elapsed." );
    setTimeout( myFunction, 1000 );
}

// myVariable();

setTimeout(myVariable, 500);

// Nested function
function showAge() {
    function showDob() {

    }
    showDob();
}

showAge();

// function calling 

function calculateAge( dob = "1/1/2000" ) {
    // arguments contain any values passed as arguments 
    // console.log( arguments );

    let result = "";
    for ( let i = 0; i < arguments.length; i++ ) {
        result += arguments[ i ] + " - ";
    }
    console.log( result );
}

calculateAge( 3, true, "12/12/2000" ); 
// Arguments { 0: 3, 1: true, 2: "12/12/2000"}

// rest parameter syntax - parameter initialized as array containing any arguments beyond explicity specified

function showUserNames( separator, ...names) {
    console.log( names.join( separator ) );
}

showUserNames( " - ", "Theik ", "Chan" );

// arrow function

const myArrowFunction = () => {};

// arrow function with one parameter
const oneFunction = oneParameter => {};

const singleExpression = () => 2 + 2

function myParentFunction() {
    this.myProperty = true;
    let myFunction = () => {
        // arrow function don't have it own context for arguments or this and inherit from nearest enclosing function
        console.log( this );
    }
    myFunction();
}

let myInstance = new myParentFunction(); // will print Object { myProperty: true }


function myOtherParentFunction() {
    // arrow function don't bind argment like other function and inherit argument object from closet function 
    let myArrowFunction = () => {
        console.log( arguments[0] );
    }
    myArrowFunction( true );
}

function showNames( ) {
    let myArrowFunction = ( ...params ) => {
        console.log( params[ 0 ] );
    }
    myArrowFunction( true );
}

showNames( false );

// IIFE = Immediately Invoded Function Expression called immediately when it defined

// group function expression = option 1

(
function () {
    console.log( "IIFE" );
}
)();

// function declaration inside grouping operators  option 2
(
    function () {
        console.log( "IIFE" );
    }()
);

// Arrow IIFE function
( 
    () => {
        console.log( "IIFE" );
    }
)();

// New function
// calling function with new keyword create new object
//  constructor function with first charactor capitalize
function MyNewFunction() { 
    // this refer to newly created object when calling this function with new keyword
    this.myProperty = true;
}

const myNewObject = new MyNewFunction();
myNewObject.myProperty; // true 


function MyNewArgumentFunction( myArgument )
{
    this.myValue = myArgument;
    this.doubleMyValue = () => myArgument * 2;
}
const myArgumentObject = new MyNewArgumentFunction( 10 );
myArgumentObject.myValue; // 10
myArgumentObject.doubleMyValue(); // 20


// global binding 
function GlobalBindingFunction() 
{
    console.log( this );
}

const globalObject = new GlobalBindingFunction();

GlobalBindingFunction(); // global this binding outside of strict mode is globalThis

(
    function() {
        "use strict";
        function MyFunction() {
            console.log( this );
    }
    MyFunction(); // global this binding insider strict mode is undefined
}());

// factory function
function myFactoryFunction( myArgument = false ) {
    return { "myProperty" : myArgument };
}

const myFactoryObject = myFactoryFunction( true ); // myFacotryObject { myProperty: true }