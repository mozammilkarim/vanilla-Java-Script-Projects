const counter=document.getElementById('counter');
const dcr=document.getElementById('dcr');
const reset=document.getElementById('reset');
const inr=document.getElementById('inr');

inr.addEventListener('click',function(){
    const value=counter.innerText-1+2;
    counter.innerText=value;
    if (value>0) {
        counter.style.color='green';
    }
    else if(value==0){
        counter.style.color='black';
    }
});
dcr.addEventListener('click',function(){
    const value=counter.innerText-1;
    counter.innerText=value;
    if (value<0) {
        counter.style.color='red';
    }
    else if(value==0){
        counter.style.color='black';
    }
});
reset.addEventListener('click',function(){
    counter.innerText=0;
    counter.style.color='black';
});