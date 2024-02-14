let song_list = document.getElementById("all-songs");
let play = document.getElementById("playBtn");
let forward = document.getElementById("forwardBtn");
let back = document.getElementById("backwardBtn");
let progress = document.getElementById("progress");

let song_arr = [
    {
        id:1,
        name:"Aankhon Se Batana"
    },
    {
        id: 2,
        name: "Mi Amor"
    },
    {
        id: 3,
        name: "Tere Hawaale"
    },
    {
        id: 4,
        name: "Dilbar"
    }
];


for (const item of song_arr) {
    let li = document.createElement("li");
    li.setAttribute("id","song_li");
    li.classList.add("song_li");
    let icon = document.createElement("i");
    icon.setAttribute("class", "fa-solid fa-music");
    let textSpan = document.createElement("span");
    textSpan.innerHTML = item.name;
    li.appendChild(icon);
    li.appendChild(textSpan);

    song_list.appendChild(li); 
}

let isAudioPlaying = false;
let audio;
let currentSongIndex = 0;

//for first time song play on play btn click
audio = new Audio(`./media/${song_arr[currentSongIndex].name}.mp3`);

play.addEventListener("click",function(){

    if(audio.paused){
        playSong();
    }
    else {
        pauseSong();
    }    
});

let songs = document.querySelectorAll(".song_li");

songs.forEach(function(item){
    item.addEventListener("click",function(){
        if (isAudioPlaying == true) {
            pauseSong();
        }
        // console.log(item.children[1].innerHTML);
        audio = new Audio(`./media/${item.children[1].innerHTML}.mp3`)
        playSong();

    })
});

forward.addEventListener("click",function(){
    if (isAudioPlaying == false){
        currentSongIndex++;
        audio = new Audio(`./media/${song_arr[currentSongIndex].name}.mp3`);
        playSong();

    }else{
        pauseSong();
        currentSongIndex++;
        audio = new Audio(`./media/${song_arr[currentSongIndex].name}.mp3`);
        playSong();
    }
    console.log(currentSongIndex);
});

back.addEventListener("click", function () {
    if (isAudioPlaying == false) {
        currentSongIndex--;
        audio = new Audio(`./media/${song_arr[currentSongIndex].name}.mp3`);
        playSong();

    } else {
        pauseSong();
        currentSongIndex--;
        audio = new Audio(`./media/${song_arr[currentSongIndex].name}.mp3`);
        playSong();
    }
    console.log(currentSongIndex);
});

function playSong(){
    audio.play();
    isAudioPlaying = true;
    play.children[0].classList.remove("fa-circle-play");
    play.children[0].classList.add("fa-circle-pause");

    audio.addEventListener('timeupdate', function () {
        progress.value = (audio.currentTime / audio.duration) * 100;
    });
}

function pauseSong() {
    audio.pause();
    isAudioPlaying = false;
    play.children[0].classList.remove("fa-circle-pause");
    play.children[0].classList.add("fa-circle-play");
}