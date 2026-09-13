let colorbox = document.querySelector(".color-box");
let colorcode = document.querySelector(".color-code");
let copybtn = document.querySelector(".copy-btn");
let generate = document.querySelector(".chang-btn");
let copymsg = document.querySelector(".copy-msg");
const characters = "0123456789ABCDEF";


generate.addEventListener("click",()=>{
     color = "#";
for(let i = 0; i<6; i++){
  color += characters[Math.floor(Math.random()*16)];}
 console.log(color);
 colorcode.textContent = color;
 colorbox.style.backgroundColor = color;

});

copybtn.addEventListener("click",()=>{
    navigator.clipboard.writeText(color);
    copymsg.textContent = "Copied!" ;
    setTimeout(()=>{
        copymsg.textContent = "";
    },1000)
})