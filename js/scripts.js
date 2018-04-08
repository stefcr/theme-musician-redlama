jQuery(document).ready(function(){
    jQuery('#slippry-demo').slippry()

    /*slider*/

});
mp3 = document.getElementById("cancion");
playbtn = document.getElementById("playPauseBtnmp3");

playbtn.addEventListener("click", playPause, false);

function playPause() {

    if(mp3.paused) {
        mp3.play();
        playbtn.innerHTML = "Pause";
    } else {
        mp3.pause();
        playbtn.innerHTML = "Play";
    }
}

