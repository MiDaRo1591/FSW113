// This script should return the results of a function that use data from the api to determine whether it 
// is daylight in the specified city. It should return "blue" if daylight, and "black" if night time.

export const fTime = () => { // Make the function a constvar iTime = new Date();
    var hours = iTime.getHours();
    if(hours > 6 || hours < 18){
        TempData.parentNode.style='background-color: blue; color: white; border-radius: 8px;';
    }
    else{
        TempData.parentNode.style='background-color: black; color: white; border-radius: 8px;';
    }
}