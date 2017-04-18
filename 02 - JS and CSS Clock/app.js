var secondsHand = document.querySelector('.second-hand');
var minutesHand = document.querySelector('.min-hand');
var hoursHand = document.querySelector('.hour-hand');
var dayName = document.querySelector('h1');
var fullDate = document.querySelector('h2');

var days = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function setDate() {
    var date = new Date();

    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hours = date.getHours();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    var secondsDegrees = ((seconds / 60) * 360) + 90;
    var minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    var hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;

    secondsHand.style.transform = 'rotate(' + secondsDegrees + 'deg)';
    minutesHand.style.transform = 'rotate(' + minutesDegrees + 'deg)';
    hoursHand.style.transform = 'rotate(' + hoursDegrees + 'deg)';

    dayName.innerHTML = days[date.getDay()];
    fullDate.innerHTML = day + '.' + month + '.' + year;


}

setInterval(setDate, 1000);
