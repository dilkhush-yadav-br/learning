// +++++++++++++   Number   +++++++++++++++++++

let Score = 200;
console.log(Score);
console.log(typeof Score); // number

let othNumb = new Number(100);
console.log(othNumb);
console.log(typeof othNumb); // object

console.log(othNumb.toString());
console.log(othNumb.toFixed(2)); // 100.00

let balance = 10000000
console.log(balance.toLocaleString('en-IN'));

let second = 123.564
console.log(second.toPrecision(2)); // 1.2e+2
console.log(second.toPrecision(3)); // 124
console.log(second.toPrecision(4)); // 123.6

// ++++++++++++++++++++++++++++++++   Math  +++++++++++++++++++++++++++++++
console.log(Math); // Object [Math] {}
console.log(Math.abs(-5)); // absolute = 5
console.log(Math.round(4.3)); // 4
console.log(Math.round(4.5)); // 5
console.log(Math.ceil(4.2));  // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.max(2,5,6,7,13,55)); // 55
console.log(Math.min(2,5,6,7,13,55)); // 2

// +++++++++++++ random() : It's value is between 0 and 1
console.log(Math.random()); 
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const Min = 10 ;
const Max = 20 ;
console.log(Math.floor((Math.random() * (Max - Min + 1)) + Min));



















