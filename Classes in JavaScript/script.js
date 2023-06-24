let person = {
  name: "John",
  email: "john@wick.com",
  count: 0,
  age: 45,
  status: true,
  children: {
    name: "Jay",
  },
  hobbies: ["Reading", "Writing", true, 100, null], //Array
  login() {
    console.log(this.name, "User has logged in ");
    return this;
  },
  logout() {
    console.log("Logout", this.login());
  },
  User() {
    console.log("Name function without key-value");
  },
  updateLogin() {
    this.count++;
    console.log(this.count);
    return this;
  },
};

// console.log(this);
// person.login()
// person.logout()
// person.User()
// person.updateLogin()

person.login().updateLogin().logout();



//ES6 Class Keyword

class Person{
    constructor(name,email,count = 0){
        this.name = name;
        this.email = email;
        this.count = count;
    }
    login(){
        console.log(this.name , "has logged in ");
    }
    logout(){
        console.log(this.name , "has logged out ");
    }
}

let personal = new Person("Pranav","abc@gmail.com",5)
let persona2 = new Person("Ritik","ritik@gmail.com",2)

personal.login()
personal.logout()

persona2.login()
persona2.logout()

// Number
 let rollNo = new Number(10);
 console.log(rollNo);