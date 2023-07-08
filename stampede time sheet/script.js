'use strict';

function updateTime() {
    const currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let amPm = '';
  
    if (hours >= 12) {
      amPm = 'PM';
      if (hours > 12) {
        hours -= 12;
      }
    } else {
      amPm = 'AM';
      if (hours === 0) {
        hours = 12;
      }
    }
  
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');
  
    const currentTimeString = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${amPm}`;
  
    const currentTimeElement = document.getElementById('current-time');
    currentTimeElement.textContent = currentTimeString;
}
  
// Call updateTime() initially to display the time immediately
updateTime();
  
// Call updateTime() every second (1000 milliseconds) to update the time
setInterval(updateTime, 1000);