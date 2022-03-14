const colors=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const color=document.getElementById('color')
const btn=document.getElementById('btn');
btn.addEventListener('click',function(){
    // randomNGenerator();
    // console.log(colors[randomNGenerator()]+'')
    const randomNumber1=colors[randomNGenerator()]+''
    +colors[randomNGenerator()];
    // console.log(randomNumber1)
    const randomNumber2=colors[randomNGenerator()]+''
    +colors[randomNGenerator()];
    const randomNumber3=colors[randomNGenerator()]+''
    +colors[randomNGenerator()];
    const randomNumber='#'+
    randomNumber1+randomNumber2+randomNumber3;
    document.body.style.backgroundColor=randomNumber;
    color.textContent=randomNumber;
    // console.log(randomNumber)
});
function randomNGenerator() {
    // console.log(Math.floor(Math.random()*colors.length))
    return Math.floor(Math.random()*colors.length);
}