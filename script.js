// Pages
function nextPage(num) {
  document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
  document.getElementById(`page${num}`).classList.remove('hidden');
}

// Background music autoplay (mobile safe)
const bgMusic = document.getElementById("bgMusic");
document.getElementById("yesBtn").addEventListener("click", () => {
  bgMusic.volume = 0;
  bgMusic.play().catch(() => {
    document.body.addEventListener("touchstart", () => bgMusic.play(), {once:true});
  });
  let vol = 0;
  const fade = setInterval(()=>{
    if(vol<0.6){vol+=0.02; bgMusic.volume=vol;} else clearInterval(fade);
  },200);
  nextPage(2); // Go to Why I Choose You
});

// Deep love text
const reasons=[
  "I choose you because with you, I don’t have to pretend.",
  "Because you see me at my lowest and still stay.",
  "Because your presence feels like peace.",
  "Because loving you feels natural, not forced.",
  "Because you make even silence meaningful.",
  "Because when I imagine my future, you are already there.",
  "And because choosing you every day feels right."
];

let r=0;
function startWhyText(){
  const box=document.getElementById("whyText");
  const interval=setInterval(()=>{
    if(r<reasons.length){box.innerHTML+=`<p class="fade-in glow">${reasons[r]}</p>`; r++;} 
    else clearInterval(interval);
  },2000);
}

// Voice note
function playVoice(){document.getElementById("voiceNote").play();}

// Heart hold
let heartTimer;
function holdHeart(){heartTimer=setTimeout(()=>{
  document.getElementById("heartMsg").innerText="This is how long I waited for you ❤️";
},5000);}
function releaseHeart(){clearTimeout(heartTimer);}

// Quiz
function quizAnswer(){alert("Correct 😌❤️");}

// Counter
function startCounter(){
  document.getElementById("page9").classList.remove('hidden');
  const start=new Date();
  setInterval(()=>{
    const now=new Date();
    const diff=Math.floor((now-start)/1000);
    document.getElementById("timeCounter").innerText=diff+" seconds since YES 💖";
  },1000);
}

// Show Why I Choose You text after nextPage(2)
document.getElementById("page2").addEventListener("transitionstart", startWhyText);