/* Data types:-
1. Number
2. Bigint
3. String
4. Boolean
5. null
6. undefined
7. symbol
8. Object
*/

// TODO: undertand each datatypes with examples
let myName="Dilkhush"
let age = 24
let IsSingle = true;
let haveBabies=null; // output = object
let location =undefined  // output = undefined
let StuObj = {
    "Name":"Dilkhush",
    "usn":23,
    "Age":12
}
const bigInt = 123657898765456789n
const bigNum=BigInt(876543456789876544567)
let id = Symbol('123')
let HerosArr = ["Shaktiman","IronMan","Captain America","Ninja Hattori"]


console.log(typeof myName)
console.log(typeof age)
console.log(typeof IsSingle)
console.log(typeof haveBabies)
console.log(typeof location)
console.log(typeof StuObj)
console.log(typeof bigInt)
console.log(typeof bigNum)
console.log(typeof id)
console.log(typeof HerosArr) // this is array but it JS it return as Object
console.log(Array.isArray(HerosArr));  // This will return true : To specifically check whether a variable is an array
