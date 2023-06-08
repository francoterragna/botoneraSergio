let currentAudio = null;

function playAudio(id) {
  if (currentAudio !== null) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
  
  let audio = document.getElementById(id);
  audio.play();
  currentAudio = audio;
}
