const color=document.getElementById('color');
const btn=document.getElementById('btn');
const colors=['green','red','rgba(100,111,112)','#f1f2f5'];

btn.addEventListener('click',function(){
    var randomNumber=Math.floor(Math.random()*colors.length);
    document.body.style.backgroundColor=colors[randomNumber];
    color.textContent =colors[randomNumber];
});
