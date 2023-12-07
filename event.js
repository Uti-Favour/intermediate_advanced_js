

const click = document.querySelector('.click');
const remove = document.querySelector('.remove');
const text = document.querySelector('.text');
const initialNumber = 0 ;
const colors = ['pink' , 'red' , 'purple' , 'orange'];


function removeText(){
    remove.addEventListener('click' , () => {
    text.style.display = 'none';
    });
};

function count(){
    click.addEventListener('click' , () => {
alert('You Have Clicked Successfully!');
    });
};

function changeColor(){
    click.addEventListener('click' , () =>{
        document.body.style.backgroundColor = 'red';
        count();
        });
};

changeColor();


