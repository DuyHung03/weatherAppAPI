var wrapper = document.querySelector('.wrapper')
var tag = document.querySelector('.tag')
var input = document.querySelector('.input')
var city = document.querySelector('.city')
var country = document.querySelector('.country')
var date = document.querySelector('.date')
var tempNumber = document.querySelector('.temp-number')
var description = document.querySelector('.description')
var visibility = document.querySelector('.visibility')
var wind = document.querySelector('.wind')
var cloud = document.querySelector('.cloud')

var changeWeather = (location) => {
   if(location.name == 'Turan'){
      city.innerHTML = 'Da Nang'
   }else{
      city.innerHTML = location.name
   }
   country.innerHTML = location.sys.country
   date.innerHTML = new Date().toLocaleString('vi')
   tempNumber.innerHTML = location.main.temp.toFixed(1)
   description.innerHTML = location.weather[0].description
   visibility.innerHTML = location.visibility + '(m)'
   wind.innerHTML = location.wind.speed + '(m/s)'
   cloud.innerHTML = location.clouds.all + '%'

   if(location.main.temp >= 20){
      wrapper.style.background = 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1)), url(./img/hot.jpg) no-repeat center/cover'
      tag.style.background = 'url(./img/hot.jpg) no-repeat center/cover'
   }else{
      wrapper.style.background = 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1)), url(./img/cold.png) no-repeat center/cover'
      tag.style.background = 'url(./img/cold.png) no-repeat center/cover'
   }
}

input.onkeyup = (e) => {
   if(e.keyCode == 13){
      getWeather(e.target.value.trim())
   }
}


async function getWeather(input) {
   
   var API = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`
   var res = await fetch(API)
   var location = await res.json()
   
   if(location.name == undefined)
   {
      document.querySelector('.content-wrapper').style.visibility = 'hidden'
      document.querySelector('.content-wrapper footer').style.visibility = 'visible'
   }else{
      document.querySelector('.content-wrapper').style.visibility = 'visible'
      changeWeather(location)
   }
}

getWeather('da lat')
