document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.querySelector('.start');
    const score = document.querySelector('span');
    const squares = document.querySelectorAll('.grid div');
    let currentSnake = [2, 1, 0];
    let appleIndex = 0;
    const width = 10;
    let direction = 1;//initially right
    function randomApple() {
        // the loop will run until a square other than snake
        // is chosen for apple
        do {
            appleIndex=Math.floor(Math.random()*squares.length)
        } while (squares[appleIndex].classList.contains('snake'));
        squares[appleIndex].classList.add('apple');
    }
    function control(e) {
        console.log(e.keyCode)
        if (e.keyCode === 39) {
            direction= 1;
            console.log(direction)
        }
        else if(e.keyCode === 40){
            direction= width;
        }
        else if(e.keyCode===37){
            direction= -1;
        }
        else if(e.keyCode===38){
            direction= -width;
        }
        
    }
    function startGame() {
        // console.log('started');
        let currentSnake = [2, 1, 0];
        let appleIndex = 0;
        const width = 10;
        let direction = 1;//initially right
        currentSnake.forEach(index => {
            squares[index].classList.add('snake');
        });

        // generate a random apple
        randomApple();
        // inputTaken();
        // moveOutcomes();
        


    }
    document.addEventListener('keydown',control);
    startBtn.addEventListener('click', startGame);
    
})
// keycodes are not responding