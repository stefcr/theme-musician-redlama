var songs = [
    "music/WolfieRaps - Check the Statistics Feat. Ricegum (Official Music Video) (Big Shaq Diss Track).mp3",
    "http://scummbar.com/mi2/MI1-CD/14%20-%20Monkey%20Island.mp3",
    "http://scummbar.com/mi2/MI1-CD/14%20-%20Monkey%20Island.mp3",
    "http://scummbar.com/mi2/MI1-CD/14%20-%20Monkey%20Island.mp3",
    "http://scummbar.com/mi2/MI2-CD1/01%20-%20Opening%20Themes%20&%20Introduction.mp3"
]; //Array con URL's de las canciones
var e = window.event;
var currentSong = 0; //Cancion actual
var audio = document.getElementById("cancion");
var screen = document.getElementById("screen");
var tiempo = document.getElementById("tiempo");
var lista = document.getElementById("list");
var volumeslider = document.getElementById("volumeslider")


//LLAMADA a FUNCIONES__________
cargar();
rellenarLista();



//EVENT LISTENER's__________
audio.addEventListener("ended", next, false); //Continua a siguente pista cuando acaba la cancion presente.
lista.addEventListener("click", playListItem, false); //Carga y reproduce al hacer click, la cancion seleccionada en lista.
volumeslider.addEventListener("change",setVolume, false);


//DEFINICION de FUNCIONES__________
function rellenarLista() {
    for (i in songs) {
        li = document.createElement("li");
        li.setAttribute("id", i);
        li.textContent = limpiarNombre(songs[i]);
        lista.appendChild(li);
    }
}


function limpiarNombre(texto) {
    var nombre = decodeURIComponent(texto);
    var pos = nombre.lastIndexOf("/");
    var nombre = nombre.substring(pos + 1);
    return nombre;
    // return nombre.replace(".mp3", "");
}

function playListItem(e){
    selected = e.target;
    currentSong = selected.getAttribute("id");
    cargar();
    play();
}

function selectedEnLista(){
    for (i in lista.children){
        if(lista.children.item(i).getAttribute("id") == currentSong){
            lista.children.item(i).classList.add("selected");
        }
        else{
            lista.children.item(i).classList.remove("selected");
        }
    }
}

function cargar() {
    audio.src = songs[currentSong];
}

function play() {
    audio.play();
    mostrar();
    if(!lista.classList.contains("expand"))
    {
        expandirLista();
    }
    selectedEnLista()
}

function stop() {
    audio.pause();
    audio.currentTime = 0;
}

function mostrar() {
    screen.textContent = limpiarNombre(songs[currentSong]);
}

function pause() {
    audio.pause();
    console.log(audio.played)
}

function next() {
    if (currentSong == songs.length - 1) {
        currentSong = 0;
    } else {
        currentSong++;
    }
    cargar();
    play();
}

function prev() {
    if (currentSong == 0) {
        currentSong = songs.length - 1;
    } else {
        currentSong--;
    }
    cargar();
    play();
}
function setVolume() {
    audio.volume=volumeslider.value / 100;

}

