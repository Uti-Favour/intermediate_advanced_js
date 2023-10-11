//Exercise 4.1

//No.1
let user = {
  name: "john",
  surname: "smith",
};
user.name = "favour";

delete user.name;
console.log(user);

//No 2
function isEmpty(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      return true;
    }
  }

  return false;
}

let schedule = {};

// alert(isEmpty(schedule)); // true

// schedule["8:30"] = "get up";

// alert(isEmpty(schedule)); // false

let objects = {};
console.log(isEmpty(objects));

//No 3
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
console.log(sum);

//No 4

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

multiplyNumeric(menu);

console.log(menu);

//---------------The End-----------------

//Object references and copying
let users = {
  name: "Favour",
  age: 16,
};

let clone = {};
for (let key in users) {
  clone[key] = users[key];
}

clone.name = "Uti";
console.log(clone);

users.age = 18;
console.log(users);

//Object.assign
let comfirm = {
  name: "Favour",
  age: 16,
  handsome: true,
};

firstPermission = {
  canEdit: true,
};
secondPermission = {
  canView: false,
};

Object.assign(comfirm, firstPermission, secondPermission);

console.log(comfirm);

//Instead we can use for more advanced cloning
let practice = {
  name: "anonymous",
  age: 20,
  class: "ss3",
  isTall: true,
};

let clonePractice = Object.assign({}, practice);
console.log(clonePractice);

//Structured Cloning
let spread = {
  name: "pete",
  height: "1inch",
  size: {
    width: 100,
    height: 50,
  },
};

let cloneSpread = structuredClone(spread);

console.log(cloneSpread);
console.log(spread);

spread.size.height = 100;

//Gabage collection in Arrays & Object
let ach = {
  name: "john",
};
console.log(ach);

ach = null;

console.log(ach);

//Example
function marry(man, woman) {
  woman.husband = man;
  man.wife = woman;
  return {
    father: man,
    mother: woman,
  };
}
let family = marry(
  {
    name: "John",
  },
  {
    name: "Ann",
  }
);

delete family.father;
delete family.mother.husband;



//this object method in JavaScript

let say = {
    name : "speak",
    age: 30,
};

say.greet = function(){
    console.log("Hello!");
}

say.greet();