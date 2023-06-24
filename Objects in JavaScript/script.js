//objects

let person = {
    name : 'John',
    email : 'john@wick.com',
    age : 45,
    status : true,
    children : {
        name : 'Jay'
    },
    hobbies : ['Reading','Writing',true,100,null]  //Array
}

let dynamicPropValue = 'age'

console.log(person);
console.log(typeof person)
console.log(person['age']);
console.log(person['children'].name);
console.log(person[dynamicPropValue]);

person.country = 'India'
console.log(person);

console.log(typeof person.hobbies);