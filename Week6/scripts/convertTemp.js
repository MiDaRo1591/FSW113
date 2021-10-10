// This script should return the results of a function that converts the temperature provided by the api (Kelvin).
// Depending on the location of the city, the function should return degrees in either fahrenheit or centigrade.

export function Temp(kelvin, location){ // Make the function a const

    kelvin = parseInt(kelvin); // This is kelvin, to intiger
    var fahrenheit = parseInt((kelvin - 273.15) * 9/5 + 32); // This is fahrenheit, to intiger
    var celsius = parseInt(kelvin - 273.15); // This is celsius, to intiger
    if(location == 'US'){
        return fahrenheit+'F';}
    else{
        return celsius+'C';}
}