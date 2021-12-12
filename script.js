
function startTime() {
    let targetDate = new Date("december 18, 2021").getTime();
    
    let days, hours, minutes, seconds;
    let hoursToGetCar = 57600;

    setInterval(() => {
        let currentDate = new Date().getTime();
        let finalSeconds = (targetDate - currentDate + hoursToGetCar) / 1000;

        days = parseInt(finalSeconds/86400);
        finalSeconds = finalSeconds % 86400;

        hours = parseInt(finalSeconds/3600);
        finalSeconds = finalSeconds % 3600;

        minutes = parseInt(finalSeconds / 60);
        seconds = parseInt(finalSeconds % 60);

        days = days >= 10 ? hours : "0" + days
        hours = hours >= 10 ? hours : "0" + hours;
        minutes = minutes >= 10 ? minutes : "0" + minutes;
        seconds = seconds >= 10 ? seconds : "0" + seconds;

        display.textContent = days + ":" + hours + ":" + minutes + ":" + seconds;
        
        if(finalSeconds < 0){

        }
    }, 1000)
}

window.onload = () => {

    display = document.querySelector('#timer');

    startTime();
}