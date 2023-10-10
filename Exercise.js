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

function multiplyNumeric(obj){
    for(let key in obj){
        if(typeof obj[key] === 'number'){
            obj[key] *= 2
        }
    }
};

// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

multiplyNumeric(menu);

console.log(menu);