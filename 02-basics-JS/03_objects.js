// singleton
// Object.create

// object literals
const mySym = Symbol("key1") //declaring symbol

const user = {
    name : "Dilkhush",
    age : 24,
    email: "dilkhsush@google.com",
    location: "Bihar",
    hobbies:["bikes","cars","racing","poetry"],
    [mySym]: "mykey1" //symbol-mySym
}

console.log(user.name);
console.log(user["age"]);
console.log(user[mySym]);

user.email = "dilkhush@apple.com"
console.log(user.email);
// Object.freeze(user)//it will not allow to change in the object : user
// user.email = "dilkhush@Microsoft.com"
console.log(user);

user.greeting = () => {
    console.log("Hello Boss");
}

user.greeting2 = function() {
    console.log(`Hello Boss,${this.name}`);
}
console.log(user.greeting());
console.log(user.greeting2());















