const setClock = () => {
    let currentDate = new Date();
    let currentMiliSecond = currentDate.getMilliseconds()/1000;
    let currentsecond = (currentMiliSecond + currentDate.getSeconds())/60;
    let currentMinute = (currentsecond + currentDate.getMinutes())/60;
    let currentHour = (currentMinute + currentDate.getHours())/12;
    rotation(secondHand,currentsecond);
    rotation(minuteHand,currentMinute);
    rotation(hourHand,currentHour);
}

setInterval(setClock);

const hourHand = document.querySelector('.hour');
const minuteHand = document.querySelector('.minute');
const secondHand = document.querySelector('.second');

const rotation = (hand,time) => hand.style.setProperty('--rotation',time*360);

setClock();