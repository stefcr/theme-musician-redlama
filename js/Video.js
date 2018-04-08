var songs = [
    "music/WolfieRaps - Check the Statistics Feat. Ricegum (Official Music Video) (Big Shaq Diss Track).mp3",
    "http://scummbar.com/mi2/MI1-CD/14%20-%20Monkey%20Island.mp3",
    "http://scummbar.com/mi2/MI1-CD/14%20-%20Monkey%20Island.mp3",
    "http://scummbar.com/mi2/MI1-CD/14%20-%20Monkey%20Island.mp3",
    "http://scummbar.com/mi2/MI2-CD1/01%20-%20Opening%20Themes%20&%20Introduction.mp3"
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
    return name.replace(".mp3", "");
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




