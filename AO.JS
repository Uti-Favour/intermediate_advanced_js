//Creating empty object
let empty = new Object(); //or
let emptyObject = {};

console.log(empty);
console.log(emptyObject);

//Adding propeties
let user = {
  name: "Favour",
  age: 16,
  "object type": false, //multi word object type
};

console.log(user.name);

console.log(user);
//Accessing Objects using . notation
user.addFavour = true;

//Removing an object
delete user.age;

//Using quare brackets for multi word object
let multi = {};
// multi["Multiple words"] = true;
// console.log(multi["Multiple words"]);

//or a better way may be:
let word = "multiple words";
multi[word] = true;
console.log(multi[word]);

// let fruit = 'orange';
// let info = {
// [fruit + 'info'] : 5 
// };



let fav = 'banana'; 
let collections = {
    [fav + 'Now'] : 5 
};
console.log(collections.bananaNow
    );




    function userName (name, age){
        return{
            name,
            age,
        };
    }

    let users = userName("Favour" , 16);
    console.log(users.age);


    //They is no word restriction on objects
    let restrict =  {
return:6,
let: 7,
getComputedStyle: 6,
    }

    console.log(restrict.return + restrict.let + restrict.getComputedStyle);

    // let obj = {};
    // obj.__proto__ = 5;
    // alert(obj.__proto__)

    let operator = {
        age: 16,
        name:"favour",
        height: "6 inch"
    };

    // console.log("age" in operator);
    // alert("name" in operator);
    // alert("height" in operator);

    //or

    // let person = {age: 16}
    // let  key = "age";
    // console.log(key in person);

    //For in loop

let object = {
    fruits : ["apple" , "banana", "orange" ];
    name: "Favour",
    age: 16,
    isBoy: true
};

console.log(object);