// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const calBox = document.querySelector("#calBox"),
      resultZone = calBox.querySelector(".result_zone"),
      clearBtn = calBox.querySelector(".clear_btn"),
      numBtns = calBox.querySelector(".num_btns"),
      arithmeticBtns = calBox.querySelector(".arithmetic_btns");
      arithmeticBtn = arithmeticBtns.querySelectorAll("div");

const result = resultZone.querySelector("span");

const INPUT_STORAGE = "INPUTSTORAGE";
const INPUT_NUM = "INPUT";
const TEMP_NUM = "TEMP";
const ALU = "ALU";
const CAL_RESULT = "RESULT";

localStorage.setItem(ALU,"");
localStorage.setItem(CAL_RESULT,0);

function loadResult(){
   const cal_result_num = localStorage.getItem(CAL_RESULT);
   const tempResult = localStorage.getItem(TEMP_NUM);
   const inputResult = localStorage.getItem(INPUT_NUM);
   // result.innerText = `${tempResult},${inputResult} = ${cal_result_num}` ; 
   result.innerText = inputResult;
}

function handleClear(){
   localStorage.setItem(INPUT_NUM,0);
   localStorage.setItem(TEMP_NUM,0);
   localStorage.setItem(ALU,"");
   localStorage.setItem(CAL_RESULT,0);
   localStorage.setItem(INPUT_STORAGE,"");

   console.log("clear");
   loadResult();
}

function handleMath(){
   const myAlu = event.path[0].classList.value.charAt(6);
   console.log(myAlu);
   localStorage.setItem(ALU,myAlu);
   let temp = localStorage.getItem(TEMP_NUM);
   result.innerText = temp;
}

function handlePress(event){
   console.log("press");
   const myNum = event.path[0].classList.value.charAt(4);
   let cal_result_num = localStorage.getItem(CAL_RESULT);
   
   if(myNum === "="){
      localStorage.setItem(INPUT_STORAGE,myNum);
      localStorage.setItem(INPUT_NUM,localStorage.getItem(INPUT_NUM));
      localStorage.setItem(ALU,"");

      let temp = parseInt(localStorage.getItem(TEMP_NUM));
      localStorage.setItem(CAL_RESULT,temp);
      cal_result_num = localStorage.getItem(CAL_RESULT);
      result.innerText = cal_result_num;
      localStorage.setItem(TEMP_NUM,0);

   }else if(isNaN(parseInt(myNum))){

   }else{
      localStorage.setItem(INPUT_NUM,myNum);
      localStorage.setItem(INPUT_STORAGE,myNum);

      let input = parseInt(localStorage.getItem(INPUT_NUM));
      let temp = parseInt(localStorage.getItem(TEMP_NUM));
      let temp_alu = localStorage.getItem(ALU);
      localStorage.setItem(TEMP_NUM, parseInt(cal_result_num));

      if(temp_alu === ""){
         temp = `${temp}` + `${input}`;
         localStorage.setItem(CAL_RESULT,parseInt(input));
         localStorage.setItem(TEMP_NUM,parseInt(temp));
         result.innerText = parseInt(temp);
      }else{
         localStorage.setItem(CAL_RESULT,temp);
         temp = eval(`${temp} ${temp_alu} ${input}`);
         localStorage.setItem(TEMP_NUM,parseInt(temp));
         loadResult();
      }
   }
}

function init(){
   clearBtn.addEventListener("click",handleClear);
   numBtns.addEventListener("click",handlePress);
   arithmeticBtns.addEventListener("click",handleMath);
   loadResult();
};

init();