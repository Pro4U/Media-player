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
    li.innerHTML = item.name;
    song_list.append(li);    
}


let audio = new Audio("./media/song1.mp3");

play.addEventListener("click",function(){

    if(audio.paused){
        audio.play();
        play.children[0].classList.remove("fa-circle-play");
        play.children[0].classList.add("fa-circle-pause");

    }
    else {
        audio.pause();
        play.children[0].classList.remove("fa-circle-pause");
        play.children[0].classList.add("fa-circle-play");

    }    
});

audio.addEventListener('timeupdate',function(){
    progress.value = (audio.currentTime / audio.duration) * 100;
});

let songs = document.querySelectorAll(".song_li");

songs.forEach(function(item){
    item.addEventListener("click",function(){
        // console.log(item.innerHTML);
        audio = new Audio(`./media/${item.innerHTML}.mp3`)
        audio.play();
    })
});