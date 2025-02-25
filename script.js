const apiKey="df8891d47d870d587c647a4ee7f60b74";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");
const error=document.querySelector(".error");

const reset=()=>{
    error.style.display="none";
    document.querySelector(".city").innerHTML="______";
    document.querySelector(".temp").innerHTML="--"+"°C";
    document.querySelector(".humidity").innerHTML="-"+"%";
    document.querySelector(".wind").innerHTML="-"+" km/h"; 
}

const checkWeather=async (city)=>{
    reset();
    const response=await fetch(apiUrl+city+`&appid=${apiKey}`);
    if(response.status===404) error.style.display="block";
    let data=await response.json();
    console.log(data);
    let condition=data.weather[0].main;
    if(condition==="Clear") weatherIcon.src="clear.png";
    if(condition==="Clouds") weatherIcon.src="clouds.png";
    if(condition==="Drizzle") weatherIcon.src="drizzle.png";
    if(condition==="Mist"||condition==="Haze"||condition==="Smoke") weatherIcon.src="mist.png";
    if(condition==="Rain") weatherIcon.src="rain.png";
    if(condition==="Snow") weatherIcon.src="snow.png";
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/h"; 
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
