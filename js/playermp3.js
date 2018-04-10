var songs = [
   "music/01 - Perfect Strangers.wav",
    "music/02 - Awakening (feat. Bjonko).wav",
    "music/03 - Post Optimism.wav",
    "music/04 - Have a Great Today.wav",
    "music/05 - Come What May.wav",
    "music/06 - Fular.wav",
    "music/07 - Wave.wav",
    "music/08 - Elements I.wav",
    "music/09 - Elements II.wav"
]; //Here we put our music

var currentSong = 0; //Actual Song
var audio = document.getElementById("music");
var screen = document.getElementById("screen");
var list = document.getElementById("list");
var ee = window.event;
var buttonplay = document.getElementById("playButton");
buttonplay.style.background = "url(img/playbutton.png) no-repeat";


//Functions
load();
fillList();


audio.addEventListener("ended", next, false); //When the song ends, the next will start
list.addEventListener("click", playListItem, false); //When you click a song in the list, will start playing

// Define our functions


function fillList() {
    for (i in songs) {
        li = document.createElement("li");
        li.setAttribute("id", i);
        li.textContent = cleanName(songs[i]);
        list.appendChild(li);
    }
}
function cleanName(text) {
    var name = decodeURIComponent(text);
    var pos = name.lastIndexOf("/");
    var name = name.substring(pos + 1);
    return name.replace(".wav", "");
}

function playListItem(ee){
    selected = ee.target;
    currentSong = selected.getAttribute("id");
    load();
    play();
}

function selectedItem(){
    for (i in list.children){
        if(list.children.item(i).getAttribute("id") == currentSong){
            list.children.item(i).classList.add("selected");
        }
        else{
            list.children.item(i).classList.remove("selected");
        }
    }
}

function load() {
    audio.src = songs[currentSong];
}

function show() {
    screen.textContent = cleanName(songs[currentSong]);
}
function play() {
    if(audio.paused){
        audio.play();
        buttonplay.style.background = "url(img/pausebutton.png) no-repeat";
    } else {
        audio.pause();
        buttonplay.style.background = "url(img/playbutton.png) no-repeat";
    }
    show();
    selectedItem()
}





function next() {
    if (currentSong == songs.length - 1) {
        currentSong = 0;
    } else {
        currentSong++;
    }
    load();
    play();
}




