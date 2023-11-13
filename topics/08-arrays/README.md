# Arrays

Arrays represent a collection of etherogenous values (that is not necessarily of the same type like in other programming languages)
You can create an array in different ways:
```
let myArr = [1, 2, 3, 4];

const myOtherArr = ["a", 3, undefined, null]; // note that you will be able to change the content of the array even if it's declared as const, as that refers to the variable. You won't in fact be able to reassign the variable

let myThirdArr = new Array(1, 2, 3);
```

We have coverd this when we talked about data types, under the hood arrays are objects in JavaScript and a call to `typeof []` will give you the string `object`

We have also coverd conversions of the arrays when it comes to boolean logic

## Useful methods of arrays

### Push/Pop
`newlen = push(val)` appends `val` to the the end of the array, increasing its size by one. This is returned by the function as well so `newlen` contains now the new size of the array 
```
const array = [1,2,3];
const newLength = array.push(4); // now array is [1, 2, 3, 4] and newLength is 4
``` 
`val = array.pop()` removes the last element of the array and returns it, so `val` now refers to the last element of the array before it was removed
```
const array = [1,2,3];
const elem = array.pop(); // now array is [1, 2] and elem is 3 as it's the last element
``` 
***NOTES***: 
* push can be given more than one element to append, they will be added in order
* push can have 0 arguments, in which case it will return 0 and won't change the array
* pop can be be executed on an empty array, in which case it will return `undefined`

### Shift/Unshift
Same as push/pop just these two functions operate at the beginning of the array. 
```
const array = [1,2,3];
const newLength = array.unshifr(4); // now array is [4, 1, 2, 3] and newLength is 4

``` 
***NOTES***: 
* unshift can be given more than one element to append, they will be added in order
* shift can be be executed on an empty array, in which case it will return `undefined`

### IndexOf
This returns the position of the element that is passed as argument. Note that this function takes an optional second argument which is a number (interger) that tells where to start the search from in the array. By default, if the function is invoked with one argument it will start from element 0

## Includes (ES6)
Note that includes uses the strict conditional when comparing the values, also has a second argument that you can use to decide where to start the research from.

```
const array = [1,2,3,3];
console.log(array.indexOf(1)); // will print 0
console.log(array.indexOf(5)); // will print -1
console.log(array.indexOf(3)); // will print 2, which is the first element found starting from index 0

```

### Includes

## Gotchas

Arrys are very tricky, especially when it comes to interview questions. To give you a few examples

```
console.log([] == ![]); // What does this print?
```

