// document.addEventListener('DOMContentLoaded',()=>{
    const score=document.querySelector('#score')
    const squares=document.querySelectorAll('.grid div')
    let currentShooterIndex=205;
    const width=15;
    let direction=1;
    let aliensRemoved=[];
    let results=0//temporary score 
    // random position for invaders
    const alienInvaders = [
        0,1,2,3,4,5,6,7,8,9,
        15,16,17,18,19,20,21,22,23,24,
        30,31,32,33,34,35,36,37,38,39
      ]
    // draw invaders on grid
    function drawInvaders() {
        // draw aliens who are not killed
        for (let i = 0; i < alienInvaders.length; i++) {
            if (!aliensRemoved.includes(i)) {
                squares[alienInvaders[i]].classList.add('invader');
            } 
        }
    }
    drawInvaders();
    // the above line is not working
    // now draw shooter
    // squares[205].classList.add('shooter')
    squares[currentShooterIndex].classList.add('shooter')
    
// })