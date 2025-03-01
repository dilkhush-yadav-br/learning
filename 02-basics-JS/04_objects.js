// const tinderUser = new Object() // singleton object
const tinderUser = {}
tinderUser.id = "Sahil"
tinderUser.age = "23"
tinderUser.email= "sahil@gmail.com"
console.log(tinderUser); //{ id: 'Sahil', age: '23', email: 'sahil@gmail.com' }

console.log(Object.keys(tinderUser)); // return array of keys
console.log(Object.values(tinderUser)); // return array of value
console.log(Object.entries(tinderUser));// return array of enteries
console.log(tinderUser.hasOwnProperty('age'));

// Nested objects

const nestObj ={
    Name: "Rahul",
    No_of_GFs:{
        Gf1: {
            Name:{
                First_Name:"Anushka",
                Last_name:"Yadav"
            }
    },
    Gf2: {
        Name:{
            First_Name:"Senorita",
            Last_name:"Yadav"
        }
}
}
}
console.log(nestObj.No_of_GFs.Gf2);

// de structure of object
const {No_of_GFs:GFs} = nestObj
console.log("de-structured objects ",GFs);






// adding of object:assign/spread
// assign
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "ab", 4: "bb"}
const obj3 = {5: "abc", 6: "bbb"}

const obj4 = Object.assign({},obj1,obj2,obj3)
console.log(obj4);

// spread
const obj5 = {...obj1,...obj2,...obj3};
console.log(obj5);


























