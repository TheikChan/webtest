// control statement

// if ... else 

// if - execute when condition is true and otherwise will ignore
// if else if else
if ( true ) console.log( "True" );

if ( true ) {
    const myString = "True.";
    console.log( myString );
}

// ? ternary operation true ? "first value" : "second value" return first value when condition true otherwise return second value

// switch ... case - compare value to list of potential values defined using one or more case keywords
// one drawback is after matched case JS interpreter still execute remaining case statement it call failling through to next case
// use break keyword to prevent it
switch ( 2 + 2 == 4) {
    case false: {
        console.log( "False." );
        break;
    }
    case true: {
        console.log( "True." ); // return True.
        break;
    }        
    default: {
        console.log( "unknown case" );
        break;
    }        
}

// Loops and iteration
// while - evaluate block when condition true otherwise will never run
// continue - stop current iteration and move to next iteration

// do ... while - execute at least one before checking condition is meet or not
// for - iterate over known quantity 
// for of 

let iterationCount = 0;
console.log( "Pre-loop.");

while( iterationCount < 3 ) {
    iterationCount++;
    if( iterationCount == 2 ) {
        continue;
    }
    console.log( `Loop ${ iterationCount }.`);
}
console.log( "Continuing on." );

do {
    console.log( `Loop ${ iterationCount}.`);
    iterationCount++;
} while ( iterationCount < 8 );

for( let i = 0; i < 3; i++ ) {
    console.log( `For loop ${ i }`);
}

var myArray = [ true, false, true ];
for( let i = 0; i < myArray.length; i++ ) {
  console.log( myArray[ i ] );
}

// for ... of loop values
const myIterable = [ true, false, true ];
for( const myElement of myIterable ) {
    console.log( myElement );
}

// for ... in loop keys
const myObject = { "myProperty" : true, "mySecondProperty" : false };
// can use const variable in loop because it is discarded at the end of iteration and recreate at the start
for( const myKey in myObject ) {
  console.log( myKey ); // will print key e.g myProperty, mySecondProperty
}

const myPrototype = { "protoProperty" : true };
const myObject1 = Object.create( myPrototype, {
    myProperty: {
    value: true,
    enumerable: true
    }
});
for ( const myKey in myObject1 ) {
  const myValue = myObject1[ myKey ];
  console.log( `${ myKey } : ${ myValue }` );
}


for ( const myKey in myObject1 ) {
  const myValue = myObject1[ myKey ];
  if ( Object.hasOwn( myObject1, myKey ) ) {
    console.log( `${ myKey } : ${ myValue }` );
  }
}

// Object.keys(), Object.values(), Object.entries(), Object.hasOwn() 

Object.keys( myObject1 );

for ( const propKey of Object.keys( myObject ) ) {
    console.log( propKey );
}

for ( const propValue of Object.values( myObject ) ) {
    console.log( propValue );
}

for ( const [ propKey, propValue ] of Object.entries( myObject ) ) {
    console.log( `${ propKey } : ${ propValue }` );
}

// forEach can't use contine and break
const myArr = [ true, false ];

myArr.forEach( ( currentValue, currentIndex, originatlArray ) => {
    console.log( currentIndex, currentValue, originatlArray );
});

// iterator

// use well-known symbole iterator becuase JS Array, Map, Set don't have built-in support

const myIterable1 = [ 1, 2, 3 ];
const myIterator1 = myIterable1 [ Symbol.iterator ]();

myIterable1.next(); // will return Object { value: 1, done: false };
// done is true when done have next element


// Generator functon
// function* myGeneratorFunction() { };
// like iterator generator function maintain state
// call generator function return new generator object but don't execute immediately the code in the body of function

function* myGeneratorFunction() {
    console.log( "Generator function body ")
  };
  const myGeneratorObject = myGeneratorFunction();
  
  myGeneratorObject; // will return Generator { }

  typeof myGeneratorObject; // will return "object"

  function* myGeneratorFunction1() {
    yield "My first yielded value";
    yield "My second yielded value";
  }

  const myGeneratorObject1 = myGeneratorFunction1()

  myGeneratorObject1.next(); // will return Object { value: "My first yielded value.", done: false }
  myGeneratorObject1.next(); // will return Object { value: "My second yielded value.", done: false }

  myGeneratorObject1.next() // will return Object { value: undefined, done: true } because no value to return 

  // direct call to generator function only return first element


function* myGeneratorFunction2() {
  yield "First";
  yield "Second";
};

myGeneratorFunction2().next(); // will return Object { value: "First", done: false }
myGeneratorFunction2().next(); // will return Object { value: "First", done: false }

// halt execution when encounter return keyword

function* myGeneratorFunction3() {
    yield 1;
    yield 2;
    return 3;
};
const myGeneratorObject3 = myGeneratorFunction3();

myGeneratorObject3.next();// > Object { value: 1, done: false }

myGeneratorObject3.next(); // > Object { value: 2, done: false }

myGeneratorObject3.next(); // > Object { value: 3, done: true }

// use yield for 2 way communication 
// when value passed into generator next() method as argument then it replace value associated with previous suspended yield expression


function* myGeneratorFunction4() {
    const firstYield = yield;
    yield firstYield + 10;
};
const myGeneratorObject4 = myGeneratorFunction4();

myGeneratorObject4.next(); // > Object { value: undefined, done: false }
myGeneratorObject4.next( 5 ); // > Object { value: 15, done: false }


function* myGeneratorFunction6() {
    const firstYield = yield; // 10
    const secondYield = yield firstYield + 100; // first called 110 replaced with 20
    yield secondYield + 10;
};
const myGeneratorObject6 = myGeneratorFunction6();

myGeneratorObject6.next();
// > Object { value: undefined, done: false }

myGeneratorObject6.next( 10 ); // Can be thought of as changing the value of the `firstYield` variable to `10
// > Object { value: 110, done: false }

myGeneratorObject6.next( 20 ); // Can be thought of as changing the value of the `secondYield` variable to `20`, _not_ `20 + 100;`
// > Object { value: 30, done: false }

function* myGeneratorFunction7( startingValue ) {
    let newValue = yield startingValue + 1; // return when call next( 1 )
    newValue = yield newValue + 10; // return when call next ( 5 )
    yield startingValue + 20; // 2 (initial call) + 20 becuase new value is not use 
};
const myGeneratorObject7 = myGeneratorFunction7( 2 );

myGeneratorObject7.next( 1 );
// > Object { value: 3, done: false }

myGeneratorObject7.next( 5 );
// > Object { value: 15, done: false }

myGeneratorObject7.next( 10 );
// Object { value: 22, done: false }

// yield* used to call generator function

function* mySecondaryGenerator() {
    yield 2;
    yield 3;
  }
  
  function* myGenerator() {
    yield 1;
    yield* mySecondaryGenerator(); // yield* call other generator function
    yield 4;
    return 5;
  }
  
  const myIterator = myGenerator();
  
  myIterator.next();
//   > Object { value: 1, done: false }
  
  myIterator.next();
//   > Object { value: 2, done: false }
  
  myIterator.next();
//   > Object { value: 3, done: false }
  
  myIterator.next();
//   > Object { value: 4, done: false }
  
  myIterator.next();
//   > Object { value: 5, done: true }