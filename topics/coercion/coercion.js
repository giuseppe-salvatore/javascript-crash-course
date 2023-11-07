// Coercing numbers into strings
var firstName = 'Giuseppe';
var age = 42;

// Here age will be converted to a string, this is quite natural and intuitive
var stringToPrint = 'Hi I am ' + firstName + ' and I am ' + age + ' yars old';
console.log(`age is a ${typeof age}`);
console.log(`firstName is a ${typeof firstName}`);
console.log(`stringToPrint is a ${typeof stringToPrint}`);
console.log(stringToPrint);

// And look at this other example, which might be less intuitive
var ageString = '42';

// Here coercion kiks in again and transforms age in a string so the comparison with the == operator will succeed
if (ageString == age) {
    console.log('The two ages are the same.... wait what?? They are two different types');
}

// To make the above be false we would need to change the operator to be strict

if (ageString === age) {
    console.log('The two ages are the same.... wait what?? They are two different types');
} else {
    console.log('Ok now the ages are actually different');
}

// This other example is even better, guess what does it print??
console.log(20 - 7 - 2 + '5'); // 115 as a string
console.log(20 - 7 - 2 - '5'); // 6 as a number
console.log(20 + 7 + 2 + '5'); // 295 as a string


// Orther subtle examples
console.log("typeof [] is " + typeof []);
console.log("typeof ![] is " + typeof ![] + " and value " + ![]);
console.log("Boolean([]) has value of " + Boolean([]));
console.log("!Boolean([]) has value of " + !Boolean([]));
console.log("Boolean(![]) has value of " + Boolean(![]));
console.log("Boolean({}) has value of " + Boolean({}));

console.log([] == ![]); // common sense would say false right? Behold!! This is true

/** 
 * The above statement [] == ![] needs to be disected to understand how type/value coercion works
 * When using the == operator, Javascript tries to convert both sides into Number if the types are 
 * not the same, but, if one of the two is an object, it tries to convert into primitive value,
 * and the object-to-primitive 
 * 
 * Now this is a big topic and we are not going to go into much details but if the object defines
 * a special method called Symbol.toPrimitive it will use that for all the hints (a hint can be
 * string, number or default).
 * If that cannot be found then JS will use 
 *  - toString() for string hint and valueOf in case either toString doesn't exist or returns an object
 *  - valueOf() for other hints and toString in case either valueOf doesn't exist or returns an object
 * ... more details here https://javascript.info/object-toprimitive
 * 
 * 
 * Because we apply the ! to [] this will become a boolean, so [] into boolean is true => !true is false
 * so we have that becomes [] == false, now we are comparing an object and a boolean.
 * 
 * Given the rule above JS will try to convert the boolean into a number and the object into a primitive
 * value
 */
console.log(Object([]));
console.log(Number(![]));
console.log(Number(![1 ,2]));
console.log(Number(NaN));
console.log(Number(!NaN));
console.log(Number(undefined));
console.log(Number(""));
console.log(Number(false))
console.log([].valueOf())
console.log({} == [])
console.log([].toString())
console.log({}.toString())
console.log([].valueOf())
console.log({}.valueOf())