// ++++++++++++++++    arrays    ++++++++++++++
let arr1 = [1,2,3,4,5]
console.log(arr1)
console.log(arr1[0]);
console.log(arr1[1]);

let arr2 = new Array("shaktiman","cobra","aryaman","Ironman")
console.log(arr2);

// =========== ARRAY METHODS  ==============
    let arr3 = [10,11,12,13,14,15]
    arr3.push(16)
    console.log(arr3); //      [10,11,12,13,14,15,16]
    
    let arr4 = [100,101,102,103,104,105]
    arr4.pop()   
    console.log(arr4); //[100,101,102,103,104]

// unshift : add element at index=0

let arr5 = [201,202,203,204,205]
arr5.unshift(200)   
console.log(arr5); // [200,201,202,203,204,205]

// shift : act as pop but removes element at index=0
arr5.shift() 
console.log(arr5) // behave as pop but it remove at index=0 i.e [201,202,203,204,205]

console.log(arr5.includes(201)); // true
console.log(arr5.includes(2));  // false

console.log(arr5.indexOf(203)); // 2

// join(separator?: string): Adds all the elements of an array into a string, separated by the specified separator string.

const arr6 = arr5.join("|","Dilkhush")
console.log(arr6);
console.log(typeof(arr6));
 
let arr7 = [12,23,86,45,33]
console.log(arr7);
console.log(typeof(arr7)); // In Js array type is Object

let arr8 = arr7.join()
console.log(arr8);
console.log(typeof(arr6));

// slice, splice
myArr = [20,25,30,35,40]

console.log("myArr: ", myArr);

// slice : it include the fist range only and doesn't change original array
const myn1 = myArr.slice(1, 3)
console.log("slice:",myn1);

console.log("myArr after slice: ", myArr);

// Type-1 splice(start index,no of elements wants to remove) : it include the first arg as starting index and last arg as no of items to be removed but change the original array by removing the spliced elements
const myn2 = myArr.splice(0, 3)
console.log("splice:",myn2);
console.log("myArr after splice: ", myArr);

// Type-2 array.splice(start, deleteCount, item1, item2, ...)
// - start: Index to start modifying.
// - deleteCount: Number of elements to remove (optional).
// - item1, item2, ...: Items to add at the start/Index (optional)
let arr9 = [1, 2, 3, 4, 5];   // Declare an array
arr9.splice(2, 1, 15, 16);    // Call splice() to remove 1 element starting from index 2 and add 15, 16
console.log(arr9);             // [ 1, 2, 15, 16, 4, 5 ]




