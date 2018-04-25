const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

setInterval(() => {
  const seconds = new Date().getSeconds();
  const mins = new Date().getMinutes();
  const hours = new Date().getHours();
  
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  const minsDegrees = mins / 60 * 360 + seconds / 60 * 6 + 90;
  const hoursDegrees = hours / 12 * 360 + mins / 60 * 30 + 90;
  
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minsDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}, 1000);