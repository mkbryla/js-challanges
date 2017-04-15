var secondsHand = document.querySelector('.second-hand');
var minutesHand = document.querySelector('.min-hand');
var hoursHand = document.querySelector('.hour-hand');

function setDate() {
    var date = new Date();
    //console.log(date);
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hours = date.getHours();

    var secondsDegrees = ((seconds / 60) * 360) + 90;
    var minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    var hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;

    secondsHand.style.transform = 'rotate(' + secondsDegrees + 'deg)';
    minutesHand.style.transform = 'rotate(' + minutesDegrees + 'deg)';
    hoursHand.style.transform = 'rotate(' + hoursDegrees + 'deg)';
}
setInterval(setDate, 1000);
