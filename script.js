const apiKey = "36e71ec963c2509d77f4a0ce1d43e00c";
let url = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=`
const searchbox = document.querySelector('#search');
let weatherImg = document.querySelector('#image');
async function getWhetherInfo(city){
    let result = await axios.get(url + city + `&appid=${apiKey}`);
    document.querySelector('.heading').innerText = result.data.name;
    document.querySelector('.temp').innerHTML = Math.round(result.data.main.temp);
    document.querySelector('.humi-per').innerHTML = result.data.main.humidity + "%";
    document.querySelector('.wind-speed').innerHTML = result.data.wind.speed + " km/h";
    if(result.data.weather[0].main == "Clear"){
        weatherImg.src = "images/clear.png";
    }
    else if(result.data.weather[0].main == "Clouds"){
        weatherImg.src = "images/clouds.png";
    }
    else if(result.data.weather[0].main == "Rain"){
        weatherImg.src = "images/rain.png";
    }
    else if(result.data.weather[0].main == "Drizzle"){
        weatherImg.src = "images/drizzle.png";
    }
    else if(result.data.weather[0].main == "Mist"){
        weatherImg.src = "images/mist.png";
    }
    console.log(result)
}
// //code for work with html
let cityName = document.querySelector('.heading');
let btn = document.querySelector('.btn');
let temp = document.querySelector('.temp');
btn.addEventListener("click", async ()=> {
    await getWhetherInfo(searchbox.value)
    .then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log("err- ", err);
    })
})