# Data Types

In javascript there are 8 data types, 7 of which are called primitive data types because they represent a single value. The other is the object type which can represent more complex, composed data structures

1. ***Boolean***: contains only the two values `true` and `false`

2. ***Numbers***: represents integers and floating point numbers up to a certain precision (for example 3, -4, 0.764), after that numbers will have to be represented using the `bigint` type
3. ***BigInt***: represents numbers that cannot be represented by the data type `number`
4. ***Strings***: represents string literals like `"foo"`, `'bar'` and  \`readme\` (note that you can use sinle and double quotes but also backticks, used for string templates)
5. ***Null***: This is a special type which is also a value as well. Careful that `typeof null` will return `object` which is wrong, this is one of the historical bugs or mistakes that have never been fixed since the original version of JavaScript. Don't confuse it with the C/C++/Java concept of `null` as in this case this is completely different, there are no explicit pointers in JavaScript.This type and value just represent nothingness 
6. ***Undefined***: Like the above just that is more commonly used to represent nothingness. For example if you declare a variable without initialising it, it's value will be `undefined` and its type will be `undefined`. Again this is both a type and a value
7. ***Symbols***: 

and then 

8. ***Objects***: the type `object` represent everything else, especially complex data that can be made by multiple values. For example `arrays` and `functions` are objects (although be careful again that `typeof function` will give you function, but the function data type doesn't formally exist)

## Be careful about tricky cases and exceptions 