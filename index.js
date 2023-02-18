const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '93c480c05dmsh2148ce11c583778p1be75ejsn81693b763ec6',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getweather = (city) => {
    cityName.innerHTML = city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            // cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
        })
        .catch(err => console.error(err));
}
const submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
    e.preventDefault();
    getweather(city.value)
})
getweather("Delhi");
const homereload = document.getElementById("home");
homereload.addEventListener("click",(event)=>{
    event.preventDefault();
    getweather("Delhi");
})
     

const delhiDropdownItem = document.querySelector("#delhi");
delhiDropdownItem.addEventListener("click", (event)=> {
    event.preventDefault();
    getweather("delhi");
});
const GurugramDropdownItem = document.querySelector("#Gurugram");
GurugramDropdownItem.addEventListener("click", (event)=> {
    event.preventDefault();
    getweather("Gurugram");
});
const BangaloreDropdownItem = document.querySelector("#Bangalore");
BangaloreDropdownItem.addEventListener("click", (event)=> {
    event.preventDefault();
    getweather("Bangalore");
});
const MumbaiDropdownItem = document.querySelector("#Mumbai");
MumbaiDropdownItem.addEventListener("click", (event)=> {
    event.preventDefault();
    getweather("Mumbai");
});