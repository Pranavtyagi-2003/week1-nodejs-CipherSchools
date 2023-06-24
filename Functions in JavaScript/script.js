//Functions
function testing() {
    var abc = 20;
    console.log(abc);
    if(1){
        var xyz = 'block scoped'
        console.log(xyz);
        console.log('Inside if',xyz);
        console.log(abc);
    }
    console.log('Outside if',xyz);
}
testing()

var name = 'Cipher';
let year = 2020

function test(){
    console.log(name);
    console.log(year);
}
test()

function myFunc(){
    console.log('Inside myFunc Declaration');
}

let myFunc2 = function(){
    console.log('Inside myFunc2 : function expression');
}

myFunc()
myFunc2()


//Arrow function
//this - context

let newFunc = (name) =>{
    console.log('Arrow functions Created',name);
    console.log(this);
}

newFunc("Hello")

let funcExp = function(){
    console.log('functions Exp Created');
    console.log(this);
}

funcExp()



