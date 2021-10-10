// import the convertTemp.js and getDaylight.js scripts with their default export

//import {Temp} from './scripts/convertTemp.js';
//import {fTime} from './scripts/GetDayight.js';
//import { fTime } from './scripts/GetDayight.js';
//const myModule = require('./scripts/GetDayight.js');
//let val = myModule.hello();

// declare any variables needed

var TempData = document.getElementById("tempData"); // Temperature
var HumData = document.getElementById("humidData"); // Humidity
var ConData = document.getElementById("conditionsData"); // Conditions

var eButton = document.getElementById("goBttn");
var CORS = `https://cors-anywhere.herokuapp.com/`;
var eCity;
var sCity;
var sKey = `9c92b44b1a83413d6252018ca60de369`;
var API = `${CORS}api.openweathermap.org/data/2.5/weather?q=${sCity}&appid=${sKey}`;
var xhttp = new XMLHttpRequest(); // Create XML

// create an event listener for the click of the goBttn that calls a function to fetch the weather data

eButton.addEventListener("click", fUpDate);

// create a function that calls the function that queries the api 
// and then creates promises that will call a function to write the weather data to the HTML page    

function fUpDate(data)
{
    sKey = `9c92b44b1a83413d6252018ca60de369`;
    console.log(`Key: ${sKey}
`);

    eCity = document.getElementById("city").value; // Get City by Element
    sCity = eCity.replace(/\s/g,''); // Remove all whitespace
    console.log(`City: "${sCity}"
`);

    API = `${CORS}api.openweathermap.org/data/2.5/weather?q=${sCity}&appid=${sKey}`;
    console.log(`Full Address: 
${API}`);

axios.get(API) // Get that API
.then(function (responce){
    fBuild(responce) // Fill out page
})
.catch(error => console.log(`Error Responce: ${error}`)) // log any error
}

// use an asynchronous call to fetches the current weather for the specified city, awaits it, 
// and returns the resulting data

// ????? Do what now?

// create a function that writes the temperature (using local units), humidity, and conditions
// this function should also change the background color of the weather app to blue during the daylight
// hours at the specified city

function fBuild(data)
{
    fTime();
    TempData.textContent = Temp(data.data.main.temp, data.data.sys.country); // Display temp
    HumData.textContent = data.data.main.humidity + '%'; // display humidity
    ConData.textContent = data.data.weather[0].description; // display conditionals
}

function Temp(kelvin, location){ // Make the function a const

    kelvin = parseInt(kelvin); // This is kelvin, to intiger
    var fahrenheit = parseInt((kelvin - 273.15) * 9/5 + 32); // This is fahrenheit, to intiger
    var celsius = parseInt(kelvin - 273.15); // This is celsius, to intiger
    if(location == 'US'){
        return fahrenheit+'F';}
    else{
        return celsius+'C';}
}

const fTime = () => { // Make the function a constvar iTime = new Date();
    var hours = iTime.getHours();
    if(hours > 6 || hours < 18){
        TempData.parentNode.style='background-color: blue; color: white; border-radius: 8px;';
    }
    else{
        TempData.parentNode.style='background-color: black; color: white; border-radius: 8px;';
    }
}