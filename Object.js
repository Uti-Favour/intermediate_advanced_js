user = {
  sayHi() {
    alert("Hello!");
  },
};

let method = {
  name: "Favour",
  age: 16,

  talkHi() {
    console.log(this.name);
  },
};

method.talkHi(); //Favour

let check = {
  name: "peace",
  job: "Freelancer",
  age: 24,

  checkFunction() {
    console.log(this.name); //using this.name in place of check.name
  },
};

check.checkFunction();

let admin = check;

check = null;

admin.checkFunction();
console.log(admin);

//Accesing two object with this
let firstObject = {
  name: "amaka",
};
let secondObject = {
  name: "joy",
};

function call() {
  console.log(this.name);
}

firstObject.c = call;
secondObject.c = call;

firstObject["c"](); //a sqaure bracket can be used
secondObject.c();

//Calling without object
function unknown() {
  console.log(this);
}
unknown();

//using arrow function in this
let userArray = {
  name: "favour",
  intro() {
    let arrow = () => console.log(this.name);
    arrow();
  },
};

userArray.intro();

//this in object execise
// function makeUser() {
//   return {
//     name: "John",
//     ref: this,
//   };
// }

// let user = makeUser();

// alert(user.ref.name); // What's the result?

//The code above will result to undefined error and cannot read property 'name' of undefined

//Here  is the correct version
function checkUsers(){
    return{
        name: "Uti",
        age: 16,
        ref(){
            return this;
        }
    };
}

let whoUse = checkUsers();
console.log(whoUse.ref().name);

