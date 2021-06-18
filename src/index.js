const media = document.querySelector('video');
const playBtn = document.getElementById('play-btn');
const muteBtn = document.getElementById('mute-btn');
const volumeRange = document.getElementById('volume');

let volumeValue = 0.5;
media.volume = volumeValue;

// Functions
const mediaStatus = () => {
    if(media.paused){
        media.play();
    } else{
        media.pause();
    }
    playBtn.innerText = media.paused ? "Play" : "Pause";
};

const mediaMute = () => {
    if(media.muted){
        media.muted = false;
    } else {
        media.muted = true;
    }
    muteBtn.innerText = media.muted ? "Unmute" : "Mute";
    volumeRange.value = media.muted ? 0 : volumeValue;
};

const mediaVolume = (e) => {
    const {target : {value}} = e;
    if(media.muted){
        media.muted = false;
        muteBtn.innerText = "Mute";
    }
    volumeValue = value;
    media.volume = value;
};

// Event Listeners
playBtn.addEventListener('click', mediaStatus);
muteBtn.addEventListener('click', mediaMute);
volumeRange.addEventListener('input', mediaVolume)