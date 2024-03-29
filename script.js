let state = false;
let btn = document.querySelector(".btn");
let record = document.querySelector(".record");
let tonearm = document.querySelector(".tone-arm");
let song = document.querySelector(".longdistance");
let slider = document.querySelector(".slider");

btn.addEventListener("click", () => {
    if(state==false){
        record.classList.add("on");
        tonearm.classList.add("play");
        setTimeout(()=>{
            song.play();
        }, 1000);
    } else{
        record.classList.remove("on");
        tonearm.classList.remove("play");
        song.pause();
    }
    state= !state;
})

slider.addEventListener("input", (e)=>{
    song.volume = Number(e.target.value);
});