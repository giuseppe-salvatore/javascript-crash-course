# Conversion and coercion 

In javascript (and other programming languages probably) conversion refers to the explicit action of changing types, as opposed to coercion where the interpreter/complier takes care of it based on a set of rules.

For example:

```
var firstName = "John"; // this is a string
var age = 38;           // this is a number

console.log('Hello my name is ' + firstName + ' and I am ' + age + ' yars old');

// The + operator will concatenate all the strings and will convert age to a string as well

```

Mind that coercion might have nasty unexpected behaviour and can be source of bugs if not fully understood.

For example:

```

var ageNumber = 38;
var ageString = '38';

// The comparison here will be true
if (ageNumber == ageString) { // the coercion will kick in and make sure the values can be compared
    console.log('Logically the two values 38 are the same but their type is different');
}

// The comparison here will be false
if (ageNumber === ageString) {
    console.log('Comparing with the strict operator === will make the comparison false as the types are different')
}



```