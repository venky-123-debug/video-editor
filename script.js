const videoElement = document.getElementById("videoElement");
const videoSource = document.getElementById("videoSource");
const videoFileInput = document.getElementById("videoFileInput");
const playPauseBtn = document.getElementById("playPauseBtn");
const muteBtn = document.getElementById("muteBtn");
const rewindBtn = document.getElementById("rewindBtn");
const forwardBtn = document.getElementById("forwardBtn");
const screenshotBtn = document.getElementById("screenshotBtn");
const addTextBtn = document.getElementById("addTextBtn");
const trimStart = document.getElementById("trimStart");
const trimEnd = document.getElementById("trimEnd");
const brightness = document.getElementById("brightness");
const contrast = document.getElementById("contrast");
const grayscale = document.getElementById("grayscale");
const audioFile = document.getElementById("audioFile");
const addAudioBtn = document.getElementById("addAudioBtn");
const playbackSpeed = document.getElementById("playbackSpeed");
const videoCanvas = document.getElementById("videoCanvas");
const ctx = videoCanvas.getContext("2d");

let overlayText = "";
let audioElement;

// Handle video file input
videoFileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    const fileURL = URL.createObjectURL(file);
    videoSource.src = fileURL;
    videoElement.load();
  }
});

// Play/Pause functionality
playPauseBtn.addEventListener("click", () => {
  if (videoElement.paused) {
    videoElement.play();
    playPauseBtn.textContent = "Pause";
  } else {
    videoElement.pause();
    playPauseBtn.textContent = "Play";
  }
});

// Mute/Unmute functionality
muteBtn.addEventListener("click", () => {
  videoElement.muted = !videoElement.muted;
  muteBtn.textContent = videoElement.muted ? "Unmute" : "Mute";
});

// Rewind functionality
rewindBtn.addEventListener("click", () => {
  videoElement.currentTime = Math.max(0, videoElement.currentTime - 10);
});

// Forward functionality
forwardBtn.addEventListener("click", () => {
  videoElement.currentTime = Math.min(
    videoElement.duration,
    videoElement.currentTime + 10
  );
});

// Screenshot functionality
screenshotBtn.addEventListener("click", () => {
  const screenshotCanvas = document.createElement("canvas");
  const ctx = screenshotCanvas.getContext("2d");
  screenshotCanvas.width = videoElement.videoWidth;
  screenshotCanvas.height = videoElement.videoHeight;
  ctx.drawImage(
    videoElement,
    0,
    0,
    screenshotCanvas.width,
    screenshotCanvas.height
  );
  const dataURL = screenshotCanvas.toDataURL("image/png");
  const link = document.createElement("a");
  link.href = dataURL;
  link.download = "screenshot.png";
  link.click();
});

// Add text overlay
addTextBtn.addEventListener("click", () => {
  overlayText = prompt("Enter the text to overlay:");
  drawOverlayText();
});

function drawOverlayText() {
  videoCanvas.width = videoElement.videoWidth;
  videoCanvas.height = videoElement.videoHeight;
  ctx.clearRect(0, 0, videoCanvas.width, videoCanvas.height);
  ctx.font = "24px Arial";
  ctx.fillStyle = "white";
  ctx.fillText(overlayText, 10, 30);
}

// Trim functionality
trimStart.addEventListener("input", () => {
  videoElement.currentTime = (trimStart.value * videoElement.duration) / 100;
});

trimEnd.addEventListener("input", () => {
  if (
    videoElement.currentTime >
    (trimEnd.value * videoElement.duration) / 100
  ) {
    videoElement.currentTime = (trimEnd.value * videoElement.duration) / 100;
  }
});

// Apply filters
function applyFilters() {
  const filterValue = `brightness(${brightness.value}) contrast(${contrast.value}) grayscale(${grayscale.value})`;
  videoElement.style.filter = filterValue;
}

brightness.addEventListener("input", applyFilters);
contrast.addEventListener("input", applyFilters);
grayscale.addEventListener("input", applyFilters);

// Add audio track
addAudioBtn.addEventListener("click", () => {
  if (audioFile.files.length > 0) {
    const audioSrc = URL.createObjectURL(audioFile.files[0]);
    if (audioElement) {
      audioElement.pause();
    }
    audioElement = new Audio(audioSrc);
    audioElement.play();
  }
});

// Adjust playback speed
playbackSpeed.addEventListener("input", () => {
  videoElement.playbackRate = playbackSpeed.value;
});
