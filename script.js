
gsap.to(".namesec h1",{
    transform:"translate(-61%)",
    scrollTrigger:{
        trigger:".namesec",
        scroller:"body",
        markers:true,
        start:"top 20%",
        end:"top -70%",
        scrub:2,
        pin:true
    } 
});
let videooff = document.getElementById("vd1");
let videolight = document.getElementById("vd2");
let lightbtn = document.querySelector(".lbtn");
let rain = document.querySelector(".rain");
let rainbtn = document.querySelector(".rbtn");
let lastsec = document.querySelector(".sec1");
let lastvd = document.querySelector("#vd-sea");
let info = document.querySelector(".info");


let turn =0;

let audio = new Audio();
audio.src="./rain-sound-188158.mp3";


function lightup(){
    if(turn == 0)
    {
    videooff.style.opacity = 0;
    videolight.style.opacity =1;
    turn =1
    lightbtn.textContent="lights off";
    }
    else
    {
    videooff.style.opacity = 1;
    videolight.style.opacity = 0;
    turn =0;
    lightbtn.textContent="lights on";
    }
};
// rain function
let r =0
function shower() {
    if(r == 0) {
        rainbtn.textContent = "Stop Rain";
        r = 1;
        audio.play();
        rain.style.opacity=0.3;
    }
    else{
        rainbtn.textContent = "Start Rain";
        r = 0;
        setTimeout(()=>{
            audio.pause();
        },1000)
        rain.style.opacity=0;
    }
};
// for changing mode of days and night
let change = 0;
function State(){
    info.style.opacity=1;
     if(change == 0) {
        change= 1;
        lastvd.src="./video/vd2.mp4";
        setTimeout(()=>{
            info.style.opacity=0;

        },1396);
    }
    else{
        change = 0;
        lastvd.src="./video/vd1.mp4";
        setTimeout(()=>{
            info.style.opacity=0;

        },1396);
    }

}
lightbtn.addEventListener("click",lightup);
rainbtn.addEventListener("click",shower);
lastsec.addEventListener("dblclick",State);
