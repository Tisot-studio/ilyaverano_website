const tracks = document.querySelectorAll('.track');
const currentTimeEls = document.querySelectorAll('.current-time');
const durationEls = document.querySelectorAll('.duration');
const progress = document.querySelectorAll('.progress');
const progressContainers = document.querySelectorAll('.progress-container');
const playBtns = document.querySelectorAll('.play-button');


// Check if Playing
let isPlaying = false;

// Play
function playSong(playBtn, music) {
  isPlaying = true;
  playBtn.classList.replace('fa-play-circle', 'fa-pause-circle');
  playBtn.setAttribute('title', 'Pause');
  music.play();
}

// Pause
function pauseSong(playBtn, music) {
  isPlaying = false;
  playBtn.classList.replace('fa-pause-circle', 'fa-play-circle');
  playBtn.setAttribute('title', 'Play');
  music.pause();
}

// Update Progress Bar & Time
function updateProgressBar (progress, durationEl, currentTimeEl) {
  return (e) => {
    if (isPlaying) {
      const { duration, currentTime } = e.srcElement;
      // Update progress bar width
      const progressPercent = (currentTime / duration) * 100;
      progress.style.width = `${progressPercent}%`;
      // Calculate display for duration
      const durationMinutes = Math.floor(duration / 60);
      let durationSeconds = Math.floor(duration % 60);
      if (durationSeconds < 10) {
        durationSeconds = `0${durationSeconds}`;
      }
      // Delay switching duration Element to avoid NaN
      if (durationSeconds) {
        durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
      }
      // Calculate display for currentTime
      const currentMinutes = Math.floor(currentTime / 60);
      let currentSeconds = Math.floor(currentTime % 60);
      if (currentSeconds < 10) {
        currentSeconds = `0${currentSeconds}`;
      }
      currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
    }
  }
}


function setProgressBar (music) {
  return function (e)  {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const { duration } = music;
    music.currentTime = (clickX / width) * duration;
  }
}

// Player 1
playBtns[0].addEventListener('click', () => (isPlaying ? pauseSong(playBtns[0], tracks[0]) : playSong(playBtns[0], tracks[0])));
tracks[0].addEventListener('timeupdate', updateProgressBar(progress[0], durationEls[0], currentTimeEls[0]));
progressContainers[0].addEventListener('click', setProgressBar(tracks[0]));

// Player 2
playBtns[1].addEventListener('click', () => (isPlaying ? pauseSong(playBtns[1], tracks[1]) : playSong(playBtns[1], tracks[1])));
tracks[1].addEventListener('timeupdate', updateProgressBar(progress[1], durationEls[1], currentTimeEls[1]));
progressContainers[1].addEventListener('click', setProgressBar(tracks[1]));

// Player 3
playBtns[2].addEventListener('click', () => (isPlaying ? pauseSong(playBtns[2], tracks[2]) : playSong(playBtns[2], tracks[2])));
tracks[2].addEventListener('timeupdate', updateProgressBar(progress[2], durationEls[2], currentTimeEls[2]));
progressContainers[2].addEventListener('click', setProgressBar(tracks[2]));

