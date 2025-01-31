// function

// function declaration
showName(); // Hoisting can call function before it declaration 
function showName() {

}

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

function showNames( ) {
    let myArrowFunction = ( ...params ) => {
        console.log( params[ 0 ] );
    }
    myArrowFunction( true );
}

showNames( false );