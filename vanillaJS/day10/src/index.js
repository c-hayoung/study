// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const gameForm = document.querySelector(".range_form"),
      rangeInput = gameForm.querySelector("#limitNum"),
      myNumInput = gameForm.querySelector("#yourNum");
      playBtn = gameForm.querySelector("button");

const LIMIT = "LIMIT";
const YOURNUM = "MYCHOICE";

function handleRange(){
   
}

function handleCompare(){

}

function getRandom(){
   let min = 0;
   let max = localStorage.getItem(LIMIT);
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1 )) + min;
}

function compareNum(){
   playBtn.addEventListener("click",handleCompare);
};


function init(){
   compareNum();
   rangeInput.addEventListener("change",handleRange)
};

init();