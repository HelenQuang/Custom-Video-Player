const video = document.querySelector("video");
const controls = document.querySelector(".controls");
const play = document.querySelector(".play");
const stop = document.querySelector(".stop");

const progress = document.querySelector(".progress");
const timestamp = document.querySelector(".timestamp");

video.removeAttribute("controls");
controls.style.visibility = "visible";

//To play and pause video
function playPauseVideo() {
  if (video.paused) {
    play.setAttribute("data-icon", "u");
    video.play();
  } else {
    play.setAttribute("data-icon", "P");
    video.pause();
  }
}

//Stop video
function stopVideo() {
  video.pause();
  video.currentTime = 0;
  play.setAttribute("data-icon", "P");
}

//Update timer and time bar
function setTime() {
  progress.value = (video.currentTime / video.duration) * 100;

  let minutes = Math.floor(video.currentTime / 60);
  let seconds = Math.floor(video.currentTime - minutes * 60);

  if (minutes < 10) {
    minutes = "0" + String(minutes);
  }

  if (seconds < 10) {
    seconds = "0" + String(seconds);
  }

  timestamp.textContent = `${minutes}:${seconds}`;
}

//Set video to the progess point
function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration) / 100;
}

//Event listeners
video.addEventListener("click", playPauseVideo);
video.addEventListener("ended", stopVideo);
video.addEventListener("timeupdate", setTime);

play.addEventListener("click", playPauseVideo);
stop.addEventListener("click", stopVideo);

progress.addEventListener("change", setVideoProgress);
