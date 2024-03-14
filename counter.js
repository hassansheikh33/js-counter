// let initial value
let count=0;

//select value
const value = document.querySelector('#value');


const increase = document.querySelector(".increase");
increase.addEventListener("click", function(){
   count++;
   value.textContent= count;
   if(count>0){
    value.style.color = "greenyellow";
    }else if(count<0){
    value.style.color = "red";
    }else{
    value.style.color = "black";
    }
});

const decrease = document.querySelector(".decrease");
decrease.addEventListener("click", function(){
    count--;
    value.textContent= count;
    if(count>0){
        value.style.color = "greenyellow";
        }else if(count<0){
        value.style.color = "red";
        }else{
        value.style.color = "black";
        }
});

const reset = document.querySelector(".reset");
reset.addEventListener("click", function(){
    count=0;
    value.textContent= count;
    if(count>0){
        value.style.color = "greenyellow";
        }else if(count<0){
        value.style.color = "red";
        }else{
        value.style.color = "black";
        }
});



