/*Video*/

var vid, playbtn, seekslider;

function intializePlayer() {
    // Set object references
    vid = document.getElementById("myVideo");
    playbtn = document.getElementById("playPauseBtn");
    seekslider = document.getElementById("seekSlider");

    //Add event listeners
    playbtn.addEventListener("click", playPause, false);
    seekslider.addEventListener("change", vidSeek, false);
    vid.addEventListener("timeUpdate", seekTimeUpdate, false)
}

window.onload = intializePlayer;



function playPause() {

    if(vid.paused) {
        vid.play();
        playbtn.innerHTML = "Pause";
    } else {
        vid.pause();
        playbtn.innerHTML = "Play";
    }
}

function vidSeek() {
    var seekto = vid.duration * (seekslider.value / 100);
    vid.currentTime = seekto;

}

function  seekTimeUpdate() {
    var nt = vid.currentTime * (100 / vid.duration);
    seekslider.value = nt;

}