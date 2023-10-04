let btn = document.getElementById("btn");
function displayMsg(){
    console.log("Button Clicked");
}
btn.addEventListener('click' , displayMsg);

btn.removeEventListener('click' , displayMsg);