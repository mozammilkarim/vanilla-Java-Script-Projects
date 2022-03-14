window.addEventListener("load",()=>{
    let lat
    let long
    let temp;//stores temperature value from API
    let iconCode;//to grab icon  code from API
    const icon=document.querySelector('#icon');
    const tempDegrees=document.querySelector('.tempDegrees');
    const temperature=document.querySelector('.tempDegrees h2');
    const description=document.querySelector('.description');
    const cityName=document.querySelector('#cityName');
    const locationIcon=document.querySelector('.location span')
    const apiKey='b0b3fa779506117b10fc6faf9b7ba6c0';
    let data1=1;
    function fetchAPI() {
        // using codetabs proxy, cors redirection
        // const proxy="https://api.codetabs.com/v1/proxy?quest=";
        const api=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`;
        // const api=`${proxy}http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${apikey}`;
         // api will be fetched and we will use its response as an input to a function
        fetch(api)
        .then(response=>{
            return response.json(); //is not needed as it is in json format
            // console.log(response);
        })
        .then(data=>{
            cityName.textContent=data.name;
            temp=data.main.temp;// default is in kelvin
            temp=Math.floor((temp-273.15)*100);
            temperature.textContent=temp/100;
            description.textContent=data.weather[0].description;
            console.log(data)
            iconCode=data.weather[0].icon;
            icon.innerHTML=`<img src="https://openweathermap.org/img/wn/${iconCode}@2x.png" alt="${description.textContent}">`;

        })
    }
    if (navigator.geolocation) {
        // if browser gives you 
        navigator.geolocation.getCurrentPosition(position=>{
            // navigator will give result, i am calling that position
            lat=position.coords.latitude;
            long=position.coords.longitude;
            fetchAPI();
        })
    } else {
        // if browser does't gives
        alert("sorry!")
    }
    tempDegrees.addEventListener('click',()=>{
        // for changing the temperature units
        if (tempDegrees.lastElementChild.textContent==='F') {
            // for roundinf off upto 2 digits
            tempDegrees.firstElementChild.textContent=Math.round(((temp-32)*(5/9))*100)/100
            tempDegrees.lastElementChild.textContent='C';
        } else {
            tempDegrees.firstElementChild.textContent=Math.round(((temp*(5/9))+32)*100)/100;
            tempDegrees.lastElementChild.textContent='F';
        }
    })
})