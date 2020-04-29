// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const gameForm = document.querySelector(".range_form"),
      rangeInput = gameForm.querySelector("#limitNum"),
      myNumInput = gameForm.querySelector("#yourNum"),
      playBtn = gameForm.querySelector("button"),
      resultZone = document.querySelector(".result_zone"),
      h2 = document.querySelector('h2');

const yourNumZone = resultZone.querySelector(".your_num");
const machineNumZone = resultZone.querySelector(".machine_num");
const compareResultZone = resultZone.querySelector(".result");

const LIMIT = "LIMIT";
const YOURNUM = "YOURNUM";

localStorage.setItem(LIMIT,0);
localStorage.setItem(YOURNUM,"");

function handleRange(){
   const limitNum = h2.querySelector("span");
   localStorage.setItem(LIMIT,rangeInput.value);
   limitNum.innerText = `${rangeInput.value}`;
}

function handleNum(){
   localStorage.setItem(YOURNUM,myNumInput.value);
}

function handleCompare(){
   const checkNumChange = parseInt(localStorage.getItem(YOURNUM));
   const max = parseInt(localStorage.getItem(LIMIT));
   if(isNaN(checkNumChange)){
      alert("Please fill the form");
   }else if(checkNumChange > max){
      alert(`Please check the numbers. You cannot exceed ${max}.`);
   }else if(checkNumChange < 0){
      alert("Please check the numbers. You cannot enter a value less than zero.")
   }else{
      const randomNum = Math.floor(Math.random() * max);
      const yourNum = localStorage.getItem(YOURNUM);
   
      yourNumZone.innerText =`${yourNum}`;
      machineNumZone.innerText = `${randomNum}`;
      if(yourNum >= randomNum - 5 && yourNum <= randomNum + 5){
         compareResultZone.innerText = `CORRECT!! YOU WIN!`;
      }else{
         compareResultZone.innerText = `YOU LOSE`;
      }
      resultZone.classList.add("action");
   }
}

function init(){
   rangeInput.addEventListener("input",handleRange);
   myNumInput.addEventListener("change",handleNum);
   playBtn.addEventListener("click",handleCompare);
};

init();