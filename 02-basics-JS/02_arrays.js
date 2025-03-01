const arr1 = [1,2,3,4,5]
const arr2 = [6,7,8,9,10]
arr1.push(arr2) // push operations performed
console.log("after pushing arr2 into arr1:",arr1);
console.log(arr1[3]); //4
console.log(arr1[5]); //[ 6, 7, 8, 9, 10 ]
console.log(arr1[5][2]); //8

// concat :add two or more arrays into a new single array
const arr3 = ["Deepak","Dilkhush"]
const arr4 = ["Nikhil","Abhinav"]
const arr5 = ["Abhinash","Abhishek"]
const resArr = arr3.concat(arr4,arr5)
console.log("array after concatenated:",resArr); //[ 'Deepak', 'Dilkhush', 'Nikhil', 'Abhinav' ]

// spread :other way to concat or spread operator can be used to expand or "spread" elements of an array

let allarr = [...arr3,...arr4,...arr5]
console.log(allarr)

// flat : convert nested array into single array
let another_arr = [1,3,4,5,6,[2,3,4,5,[3,2,3,4,5,[4,5,5,6,8]]]]
let real_array = another_arr.flat(Infinity)
console.log(real_array);

// .isArray,.from,.of
console.log(Array.isArray("Dilkhush"));// flase
console.log(Array.from("Dilkhush")); // convert into array
console.log(Array.isArray([1,2,3,4,5]));//true

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)); // [ 100, 200, 300 ]