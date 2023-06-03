const url = 'https://api.openweathermap.org/data/2.5/weather?&appid=ddb157eb6de0c807651bf1bf5a5baffd&units=metric'

const searchbox=document.getElementById('search_box')
const searchbuttn=document.getElementById('search_button')

async function check_weather(city){

    
const cityupdate=document.getElementById('city')
const humidupdate=document.getElementById('humiditydata')
const windupdate=document.getElementById('winddata')
const temppdate=document.getElementById('temp')
const pic=document.getElementById("pic")
 

 const response=await fetch(url +`&q=${city}`)  //same as fetch.then,using await returns a promise
 var data=await response.json()
 console.log(data)

if(data.cod==404){
    exceptionfun()}


    if(data.name!=cityupdate.innerHTML)
    {
        exceptionfun()
    }
try{
   
cityupdate.innerHTML=data.name;
temppdate.innerHTML=Math.round(data.main.temp)+` °C`;
humidupdate.innerHTML=data.main.humidity;
windupdate.innerHTML=data.wind.speed+`m/sec`;
picture=data.weather[0].main
picmap={"Clouds":"clouds.gif","Rain":"rainy.gif","Clear":"clear.gif","Haze":"haze.gif","Sunny":"sunny.webp"}
pic.style.width='300px'
pic.style.height='200px'
pic.src=picmap[picture]


}
catch
{
    exceptionfun()
}
function exceptionfun(){
    cityupdate.innerHTML='City Not Found';
    temppdate.innerHTML='----------';
    humidupdate.innerHTML='-----------';
    windupdate.innerHTML='---------';
    pic.src="under_construction.gif";
}

}
searchbuttn.addEventListener('click',()=>{check_weather(searchbox.value)})

