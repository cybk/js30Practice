/* Get all the elements */
const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');
const toggle = document.querySelector('.toggle');
const skipButtons = document.querySelectorAll('[data-skip]');
const rangers = document.querySelectorAll('.player__slider');


/* Build functions */
function togglePlay(){
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function updateButton(){
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

function skip(){
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate(){
  video[this.name] = this.value;
}

/* Hook up the events listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(btn=> btn.addEventListener('click', skip));

rangers.forEach(rng => rng.addEventListener('change', handleRangeUpdate));
rangers.forEach(rng => rng.addEventListener('mousemove', handleRangeUpdate));
