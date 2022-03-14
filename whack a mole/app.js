const score=document.querySelector('#score')
const timeLeft=document.querySelector('#timeLeft')
const square=document.querySelectorAll('.square')

let result=0
let hitPosition
let currentTime=60
let timerId=null

// a function to randomly move mole on the squares
function randomMole() {
    // here squar is a specific square from the class 'square'
    // for ensuring no square has mole initially
    square.forEach(squar =>{
        squar.classList.remove('mole')
    })
    // make a random function to decide mole'S position
    let molePos=Math.floor(Math.random()*9);
    // now add mole to relevant square
    square[molePos].classList.add('mole');
    hitPosition=square[molePos].id;
      
}
// now add a event listener to each square for bashing the mole
square.forEach(squar=>{
    // mousedown will work a little fast
    squar.addEventListener('mousedown',()=>{
        console.log(squar.id,hitPosition);
        if (squar.id===hitPosition) {
            result++;
            score.textContent=result;
            // hitPosition is made to point null to avoid any error
            hitPosition=null;
        }
    })
})

function moveMole() {
    timerId=setInterval(randomMole,1000);
}
moveMole();
// next thing is count down 
function countDown() {
    currentTime--;
    timeLeft.textContent=currentTime;
    if(currentTime==0)
    {
        clearInterval(timerId);
        clearInterval(countDownTimer);
        alert('Your Game Over'+',score = '+result);
    }
}
let countDownTimer=setInterval(countDown,1000);