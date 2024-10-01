const title=document.querySelector(".tytle")
const button=document.querySelector(".button")
const weather=document.querySelector(".weather")
const body=document.querySelector("body")
const getTheWeather=(e)=>{
    console.log(weather.value);
switch (true) {
    case (weather.value<0):
        title.textContent="freezy"
body.style.backgroundImage="url(./freazing.jpg)"
        break;
case (weather.value>=0&&weather.value<10):
title.textContent="cold"
body.style.backgroundImage="url(./cold.webp)"
break;
case (weather.value>=10&&weather.value<=20):
title.textContent="fine"
body.style.backgroundImage="url(./middleWeather.jpg"
break;
case (weather.value>20&&weather.value<=30):
title.textContent="sunny!"
body.style.backgroundImage="url(./sunnyweather.jpg)"
break;
case (weather.value>30):
title.textContent="REALLY HOT!"
body.style.backgroundImage="url(./reallyhotweather.jpg)"
break;
    default:
        break;
}
}
button.addEventListener("click",getTheWeather)
