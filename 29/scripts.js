const timerDisplay = document.querySelector('.display__time-left');

let countDown;

function timer(seconds){
  const date = Date.now();
  const then = date + seconds * 1000;

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
  const display = `${minutes}:${remainingSeconds}`;


  console.log(minutes, remainingSeconds);
}
