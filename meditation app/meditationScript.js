// arrow function
const app = () => {
    const song = document.querySelector('.song');
    const play = document.querySelector('.play');
    const outline = document.querySelector('.movingOutline circle');
    const video = document.querySelector('.videoSection video');

    const timeDisplay = document.querySelector('.timeDisplay');
    const sounds = document.querySelectorAll('.soundSection button');
    // to get the lenth of the outline, it refers to svg play button's length
    const outlineLength = outline.getTotalLength();
    // getting duration of a song
    let fakeDuration = 600;
    const timeSelect = document.querySelectorAll('.timerSection button')
    // the below portion is for mimiking
    //  animating behaviour of play outline circle
    outline.style.strokeDasharray = outlineLength;//gives plain white length
    outline.style.strokeDashoffset = outlineLength;
    // if outline length is dashoffset, means not played at all
    // now grabbing timer value
    timeSelect.forEach(option => {
        option.addEventListener('click', function () {
            fakeDuration=this.getAttribute('data-time');
            timeDisplay.textContent=`${Math.floor(fakeDuration/60)}:${Math.floor(fakeDuration%60)}`;
        })
    })
    // changing the song
    sounds.forEach(sound => {
        sound.addEventListener("click", function() {
          song.src = this.getAttribute("data-sound");
          video.src = this.getAttribute("data-video");
          checkPlaying(song);
        });
      });
    // now pause the song
    const checkPlaying = song => {
        // song is taken as a parameter and 
        // should be given to the function
        if (song.paused) {
            // using in built feature of audio tag
            song.play();
            video.play()
            play.src = 'svg/pause.svg';//changing play image 
        }
        else {
            song.pause();
            video.pause();
            play.src = 'svg/play.svg';
        }
    }
    // for clicking the play button 
    play.addEventListener('click', () => {
        // direct function can't be called 
        // because argument ca't be passed
        checkPlaying(song)
    });

    // for  changing display time
    song.ontimeupdate = function () {
        let currentTime = this.currentTime;
        let timeLeft = fakeDuration - currentTime;
        // timeLeft represents remaining time of audio
        // console.log(timeLeft)
        // seconds and minutes stores remaining as well 
        let seconds = Math.floor(timeLeft % 60);
        let minutes = Math.floor(timeLeft / 60);
        timeDisplay.textContent = `${minutes}:${seconds}`;
        // the below thing represents how many outline lengths have been covered out
        // of 1 outline length which represents progress,i.e. total-change
        let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
        // console.log(progress)
        outline.style.strokeDashoffset = progress;//animation not working
        //   to automatically pause the song
        if (currentTime >= fakeDuration) {
            song.pause();
            song.currentTime = 0;
            play.src = "./svg/play.svg";
            video.pause();
        }
    };
};
app();