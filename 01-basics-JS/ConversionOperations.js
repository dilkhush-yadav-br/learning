// convert STR into Number
let strNum = "33abc"
let num = Number(strNum)

console.log(strNum);
console.log(typeof strNum);
console.log(num); // Output = NaN
console.log(typeof num);

// convert Bool into Number
let B = false
let numB = Number(B)

console.log(B);
console.log(typeof B);
console.log(numB); // Output = 0
console.log(typeof numB);

// convert null into Number
let N = null ;
let numN = Number(N)

console.log(N);
console.log(typeof N);
console.log(numN); // Output = 0
console.log(typeof numN);

// convert undefined into Number
let U = undefined ;
let numU = Number(U)

console.log(U);
console.log(typeof U);
console.log(numU); // Output = NaN
console.log(typeof numU);

// convert undefined into boolean
let Un = undefined ;
let boolUn = Boolean(Un)

console.log(Un);
console.log(typeof Un);
console.log(boolUn); // Output = false
console.log(typeof boolUn);

// convert undefined into boolean
let Nn = null ;
let boolNn = Boolean(Un)

console.log(Nn);
console.log(typeof Nn);
console.log(boolNn); // Output = false
console.log(typeof boolNn);
