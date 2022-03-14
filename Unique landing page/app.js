
const time=document.querySelector('#time');
const salutation=document.querySelector('#salutation');
const name1=document.querySelector('#name');
const work=document.querySelector('#work');
let timer=null

timer=setInterval(()=>{
    const date1= new Date();
    let hours=date1.getHours();
    let minutes=date1.getMinutes();
    let seconds=date1.getSeconds();
    // Set AM or PM
  const amPm = hours < 12 ?'AM':'PM';
   // 12hr Format, to give either 12 or 1,2...11
   hours = hours % 12 || 12;
   time.innerHTML=`${addZero(hours)}<span>:</span>${addZero(minutes)}<span>:</span>${addZero(
    seconds
  )}${amPm}`;;
    // console.log(seconds);
    setBgGreet();
},1000);
// Add Zeros, to avoid single digit in minutes,seconds or hours
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}
// Set Background and Greeting
function setBgGreet() {
    let today = new Date(),
      hour = today.getHours();
    console.log(hour)
    if (hour < 12) {
      // Morning
      document.body.style.backgroundImage = "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
      salutation.textContent = 'Good Morning, ';
    } else if (hour < 16) {
      // Afternoon
      document.body.style.backgroundImage = "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
     salutation.textContent = 'Good Afternoon, ';
    } else {
      // Evening
      document.body.style.backgroundImage = "url('https://i.ibb.co/924T2Wv/night.jpg')";
      salutation.textContent = 'Good Evening, ';
      document.body.style.color = 'white';
    }
  }

document.addEventListener('load',()=>{


// Get Name
function getName() {
    // this just takes name if empty, otherwise sets old name
    if (localStorage.getItem('name') === null) {
      name1.textContent = '[Enter Name]';
    } else {
      name1.textContent = localStorage.getItem('name');
    }
    // Set Name
function setname(e) {
    if (e.type === 'keypress') {
      // Make sure enter is pressed
      if (e.which == 13 || e.keyCode == 13) {
        localStorage.setItem('name', e.target.innerText);
        name1.blur();
      }
    } else {
      localStorage.setItem('name', e.target.innerText);
    }
  }
}
name1.addEventListener('keypress', setname);
name1.addEventListener('blur', setName);
});