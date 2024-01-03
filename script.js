// We selected important id's and classes

let inputBox = document.querySelector('#input-box');
let weatherBox = document.querySelector('.weather-box');
let city = document.querySelector('#city');
let  dates = document.querySelector('.dates');
let  temp = document.querySelector('#temp');
let  tempMin = document.querySelector('#min-max');
let  weathertype = document.querySelector('#weather');
let  description = document.querySelector('#description');
let  button = document.querySelector('#button');
let date = new Date();


// Function work when user input the city name
button.addEventListener('click', function(e){

      // preventDefault() to stop page reload
    e.preventDefault();

     // Updating the city name
    let inputbox2=inputBox.value;

    // API ID
   const  apik = "b2956fb3e58fbe9b10dcb85539d695bf";

     // API URL
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputbox2}&units=metric&appid=${apik}`


      // fetching data from the weather api
    fetch(url).then((response)=>{
        return response.json();

    }).then((data)=>{

         const tempValue = Math.round(data['main']['temp']);
        const weather = data['weather'][0]['main'];
        const temprange1 =Math.round(data['main']['temp_min'])
        const temprange2 =Math.round (data['main']['temp_max'])
        weathertype.innerHTML = weather;
        console.log(data)

        // Updating DOM
        city.innerHTML = inputbox2;
        temp.innerHTML = `${tempValue}&deg;C`;
        tempMin.innerHTML = `temp-min =  ${temprange1} &deg;C temp-max =  ${temprange2} &deg;C`

        // Updating date
        const currentmonth = date.getMonth();

        switch(currentmonth){
          case 0:
          dates.innerHTML = `${date.getDate()},Jan`
          break; 

          case 1:
            dates.innerHTML = `${date.getDate()}, Feb`
            break;
        case 2:
            dates.innerHTML = `${date.getDate()}, Mar`
            break;
        case 3:
            dates.innerHTML = `${date.getDate()}, Apr`
            break;
        case 4:
            dates.innerHTML = `${date.getDate()}, May`
            break;
        case 5:
            dates.innerHTML = `${date.getDate()}, Jun`
            break;
        case 6:
            dates.innerHTML = `${date.getDate()}, Jul`
            break;
        case 7:
            dates.innerHTML = `${date.getDate()}, Aug`
            break;
        case 8:
            dates.innerHTML = `${date.getDate()}, Sept.`
            break;
        case 9:
            dates.innerHTML = `${date.getDate()}, Oct.`
            break;
        case 10:
            dates.innerHTML = `${date.getDate()}, Nov`
            break;
        case 11:
            dates.innerHTML = `${date.getDate()}, Dec`
            break;
        }

          //. Updating times       
          function leftInterval() {
            const left = document.getElementById('todayTime')
            let leftDate = new Date();
            let hours = leftDate.getHours();
            let minutes = leftDate.getMinutes();
            let seconds = leftDate.getSeconds();

            if (hours == 0) {
                hours = 12;
            }

            if (hours > 12) {
                hours = hours - 12;
            }
            left.innerHTML = `${hours}h: ${minutes}m: ${seconds}s`
        }
        setInterval(leftInterval, 1000);
     

        

    })
})








































// function convertion(val){
//     return(val-273).toFixed(2)
// }

// function convertTimeStamp(timestamp, timezone){
//     const convertTimezone = timezone / 3600; // convert seconds to hours 

//    const date = new Date(timestamp * 1000);
   
//    const options = {
//        weekday: "long",
//        day: "numeric",
//        month: "long",
//        year: "numeric",
//        hour: "numeric",
//        minute: "numeric",
//        timeZone: `Etc/GMT${convertTimezone >= 0 ? "-" : "+"}${Math.abs(convertTimezone)}`,
//        hour12: true,
//    }
//    return date.toLocaleString("en-US", options)
// }

// button.addEventListener('click' , function(){

//     fetch('http://api.openweathermap.org/data/2.5/weather?q='+inputBox.value+'&appid='+apik)
//     .then(res => res.json())

//     .then( function (data){

//         var nameval = data['name']
//     var descrip = data['weather']['0']['description']
//     var tempature = data['main']['temp']
//     var coder1 =  data['main']['temp_min'];
//     var coder2 =  data['main']['temp_max'];
//     console.log(data)
//     var wndspd = data['wind']['speed']
//     var dates = data['main']['temp']
//     city.innerHTML=`Weather of <span>${nameval}<span>`
//     temp.innerHTML = ` <span>${ convertion(tempature)} C</span>`
//     datetime.innerHTML = `<span> ${convertTimeStamp(data.dt, data.timezone)}Todays date</span>`; 
//     range.innerHTML =`${convertion (coder1)}&deg;C (min) / ${coder2} &deg;C (max)`
//     description.innerHTML = `Sky Conditions: <span>${descrip}<span>`
//     wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`

//     })

//     .catch( function(){
//         // document.write(temp.innerHTML("Please type valid city name")) 
//     })
//     weatherBox.classList.add('block');
// })



 
