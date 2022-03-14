reviews = [{
    Name: 'Muzamil',
    image: '#',
    position: 'Unknown',
    detail: 'lorem12'
}, {
    Name: 'Maaz',
    image: '#',
    position: 'Student',
    detail: 'lorem13'
}, {
    Name: 'Musa',
    image: '#',
    position: 'child',
    detail: 'lorem2'
}, {
    Name: 'Musarrat',
    image: '#',
    position: 'HomeMakerr',
    detail: 'lrem12'
}]

const img = document.getElementById('image');
const author = document.getElementById('name');
const position = document.getElementById('position');
const detail = document.getElementById('detail');
const btnprev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');
const surprise = document.getElementById('surprise');

let currentPos = 1;
btnprev.addEventListener('click', function () {
    if (currentPos > 0) {
        currentPos--;
    }
    else {
        currentPos = reviews.length - 1;
    }
    img.src = reviews[currentPos].image;
    author.textContent = reviews[currentPos].Name;
    position.textContent = reviews[currentPos].position; 
    detail.textContent = reviews[currentPos].detail;
})
btnNext.addEventListener('click', function () {
    if (currentPos < reviews.length - 1) {
        currentPos++;
    }
    else {
        currentPos = 0;
    }
    img.src = reviews[currentPos].image;
    author.textContent = reviews[currentPos].Name;
    position.textContent = reviews[currentPos].position;
    detail.textContent = reviews[currentPos].detail;
})  
surprise.addEventListener('click',function(){
    currentPos=Math.floor(Math.random()*reviews.length);
    img.src = reviews[currentPos].image;
    author.textContent = reviews[currentPos].Name;
    position.textContent = reviews[currentPos].position;
    detail.textContent = reviews[currentPos].detail;
});