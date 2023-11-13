
// Simple array of numbers
console.log(`This is an array of numbers: `);
let myArr = [1, 2, 3, 4];
console.log(myArr);
console.log(typeof myArr);

// Mixed types
console.log(`\nThis is an array of mixed types: `);
const myOtherArr = ["a", 3, undefined, null];
console.log(myOtherArr); // note that you will be able to change the content of the array even if it's declared as const, as that refers to the variable. You won't in fact be able to reassign the variable
console.log(`But it's still an ${typeof myOtherArr}`);

// Array class
console.log(`\nThis is an array created with the Array class/constructor: `);
let myThirdArr = new Array(1, 2, 3);
console.log(myThirdArr);
console.log(`...and even in this case it's still an ${typeof myOtherArr}`);

// Array conversion to booleans
console.log(`\nTConversion to boolean are tricky: `);
console.log(`[] to boolean has value => ${Boolean([])}`)
console.log(`Actually any array to boolean has value => ${Boolean([1,2,3])}`)

// Push and pop
console.log(`my arr = ${myArr}`);
console.log(myArr.valueOf());
var newlen = myArr.push(5);
console.log(`pusing 5 gives ${myArr}`);
console.log(`myArr printed using string template: ${myArr}`);
console.log(`myArr printed using console.log on the variable directly: `, myArr);
console.log(typeof `${myArr}`);
console.log(typeof myArr.toString());
console.log(typeof myArr.valueOf());


// Now on to the gotchas
console.log(`\n\nWhat does the following print? [] == ![]?`);
console.log(`You would expect false but it\'s acutally ${([] == ![])} :) `);
console.log(`and even ![] == [] is ${(![] == [])} :) `);

// Printing
console.log("\nBe careful about printing arrays");
console.log("If you use string literals to print an array under the hood it will use array.toString()");
console.log("Whilst if you use console.log() straight away on the array it will use array.valueOf() ");
console.log(`See the difference below:`);
console.log(`myArr printed using string template: ${myArr}`);
console.log(`myArr printed using console.log on the variable directly: `, myArr);