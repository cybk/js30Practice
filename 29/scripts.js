const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

let countDown;

function timer(seconds){
  clearInterval(countDown);

  const date = Date.now();
  const then = date + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countDown = setInterval(() => {
    const secondsToLeft = Math.round((then - Date.now()) / 1000);

    if(secondsToLeft < 0){
      clearInterval(countDown);
      return;
    }

    displayTimeLeft(secondsToLeft);
  }, 1000)

}

function displayTimeLeft(seconds){
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const display = `${minutes}:${remainingSeconds < 10  ? '0' : ''}${remainingSeconds}`;
  timerDisplay.textContent = display;
  document.title = display;
  console.log(minutes, remainingSeconds);
}

function displayEndTime (timeStamp) {
  const end = new Date(timeStamp);
  const hours = end.getHours();
  const minutes = end.getMinutes();
  endTime.textContent = `Be back at ${hours > 12 ? hours - 12 : hours}:${minutes < 10  ? '0' : ''}${minutes}`;
}

function startTimer(){
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach( button => button.addEventListener('click', startTimer));
