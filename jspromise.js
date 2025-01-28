// Promises
// placeholder for value that isn't know when promise is created
// contain asynchornous operation include success or failure action to be taken and value with result
// response fulfilled/resolved if successfully completed or rejected if faill with error 

const myPromise = new Promise( ( fulfill, reject ) => { 
    const myResult = true;
    setTimeout( () => {
        if( myResult == true ) {
            fulfill( "This promise was successful." );
        } else { 
            reject( new Error( "This promise has been rejected.") );
        }
    }, 1000);
});

myPromise; // Promise { <state>: "pending" }
myPromise; // Promise { <state>: "fulfilled", <value>: "This promise was successful." }


// Promise Chaining 
// result of promise can be act on using then(), catch(), finally() method inherited from Promise constructor
// each method return Promise which can immediately acted on then(), catch(), finally() again letting chain result promise


// then() provide 2 callback function arguments
// first to fullfill promise result 
// second to reject result 

myPromise.then(
    successfulResult => console.log( successfulResult ),
    failedResult => console.error( failedResult )
);


// use then to handle fulfill state
// use catch to handle reject state

myPromise
.then( successfulResult => console.log( successfulResult ) )
.catch( rejectedResult => console.error( rejectedResult ) )
.finally( () => console.log( "The promise has settled." ) );


// Concurrency
// Promise.all fullfill only if all supply promise are fulfill
// Promise.any fullfill if any one of supply promise if fulfill and reject only if all promise are rejected
// Promise.allSettled fullfill when promises have settled regardless of success or fail
// Promise.race reject or fulfill based on result of first promise to settle and ignore all promise settled later

const firstPromise = new Promise( ( fulfill, reject ) => fulfill( "Successful." ) );
const secondPromise = new Promise( ( fulfill, reject ) => fulfill( "Successful." ) );
const thirdPromise = new Promise( ( fulfill, reject ) => fulfill( "Successful." ) );
const failedPromise = new Promise( ( fulfill, reject ) => reject( "Failed." ) );

const onSuccessPromise = [ firstPromise, secondPromise, thirdPromise ];
const onFailedPromise = [ failedPromise ];

// Promise.all fullfill only all promise success
Promise.all( onSuccessPromise )
.then( ( allValues ) => {
    console.log( allValues );
})
.catch( ( failValue ) => {
    console.log( failValue );
});

Promise.all( onFailedPromise )
.then( ( allValues ) => {
    console.log( allValues );
})
.catch( ( failedValue ) => {
    console.log( failedValue );
});

