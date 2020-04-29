// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const gameForm = document.querySelector(".range_form"),
      rangeInput = gameForm.querySelector("#limitNum"),
      myNumInput = gameForm.querySelector("#yourNum");
      playBtn = gameForm.querySelector("button");

const YOURNUM = "MYCHOICE";

function handleRange(){

}

function handleCompare(){
   
}

function compareNum(){
   playBtn.addEventListener("click",handleCompare);   
};


function init(){
   compareNum();
   rangeInput.addEventListener("change",handleRange)
};

init();