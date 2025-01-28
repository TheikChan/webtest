// async / await
// use async keyword before function declaration
// await pause execution of asynchronous function and after promise settled then await express is fullfill or rejected the value of promise


async function myFunction() {
    const myPromise = new Promise( ( fullfill, reject ) => { setTimeout( () => fullfill( "successful." ), 5000 ) } );
    const myPromiseResult = await myPromise; // await "String value" can also return non promise value in await expression
    return myPromiseResult;
}

myFunction()
.then( myResult => console.log( myResult ))
.catch( myFailedResult => console.error( myFailedResult ));




