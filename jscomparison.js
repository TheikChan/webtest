// == loose equality compare only variable value e.g 2 == "2" true
// === strict equality compare both variable type e.g 2 === "2" false

// 0, null, undefined, NaN, "" - false e.g 0 == true // return false
// other value - true e.g 100 == true // return true

// Logical operator - &&, ||, ! 

// ! "string" return false
// !! "string" return true 
// !0 return true


// && operator

// false && "My string" will return false based on first boolean operand
// "My string" && false will return false based on second boolean operand
// "My string" && "My second string" will return My second string
// 2 === 2 && "My string" will retrun My string

// || operator
// "My string" || false will return My string
// null || "My string" will return My string
// false || "My string" will return My string
// My string || My second string will return My string

// ?? Nullish coalescing operator return first operand only have value not null or undefined oterwise return second operand
// null ?? "My string" will return My string
// undefined ?? "My string" will return My string
// true ?? "My string" will return true
// false ?? "My string" will return false

// Logical assignment operators
// &&= assigned the second value only if the first operand is true 
// first operand can't perform logical condition check and it is only use to accept second operant value

let myVariable2 = false;
myVariable2 &&= 2 + 2; // return false

let myVariable3 = true;
myVariable3 &&= 2 + 2; // assigned result 4 because myVariable3 is true

let myVariable4 = 5;
// myVariable4 > 5 &&= 2 + 2; // SyntaxError: Invalid left-hand side in assignment

// ||= only used second operand when first operand is false

let myVariable5 = false;
myVariable5 ||= 2 + 2; // will return 4

myVariable5 = true;
myVariable5 ||= 2 + 2; // will return true 

