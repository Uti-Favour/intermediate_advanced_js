document.addEventListener('DOMContentLoaded' , function(){
    const first = document.querySelector('ul');
const second = document.querySelectorAll('.child');
document.getElementById('parent');
console.log(first);
console.log(second);

document.body.style.backgroundColor = 'blue';
setTimeout(() => document.body.style.backgroundColor = '' , 1000);


console.log(window.innerHeight);
console.log(window.innerWidth);


let element = document.querySelector('.element');

element.hidden = true;


//Modifying HTML element with JavaScript
let div = document.createElement('div');

//adding classname
div.className = "message";

//inner content
div.innerHTML = "<strong>Hi there!</strong> you got a new message";


document.body.append(div);

document.body.insertAdjacentHTML('afterbegin' , `<div class = 'message'><strong>Hi there!</strong> You have a new message!</div>`);

setTimeout(() => {div.remove() }, 5000);

//Adjcent
const adj = document.querySelector('#adjacent');
adj.insertAdjacentHTML("beforebegin" , "<p>HappyYou</p>");
adj.insertAdjacentHTML("afterbegin", "<p>endHappy</p>")


});

