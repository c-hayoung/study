const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");

const INITIAL_COLOR = "#333";
const CANVAS_SIZE = 500;

canvas.width = CANVAS_SIZE+400;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = "#fff";
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

function stopPainting(){
   painting = false;
}

function startPainting(){
   painting = true;
}

function onMouseMove(event){
   const x = event.offsetX;
   const y = event.offsetY;
   if(!painting){
      // path의 시작점 갱신
      ctx.beginPath();
      ctx.moveTo(x, y);
   }else{
      // path의 시작점으로부터 이어지는 선 긋기
      ctx.lineTo(x, y);
      ctx.stroke();
      // ctx.closePath();
      // closePath가 반복됨
   }
}

function handleColorClick(event){
   // console.log(event.target.style);
   const color = event.target.style.backgroundColor;
   // console.log(color);
   // 클릭한 색상이 출력됨.
   ctx.strokeStyle = color;
   ctx.fillStyle = color;
};

function handleRangeChange(event){
   // 구하고자 하는 값 range의 value값
   // console.log(event.target.value);
   const size = event.target.value;
   ctx.lineWidth = size;
}

function handleModeClick(){
   if(filling === true){
      filling = false;
      mode.innerText = "Fill";
   }else{
      filling = true;
      mode.innerText = "Paint";
   }
}

function handleCanvasClick(){
   if(filling === true){
      ctx.fillRect(0, 0, canvas.width, canvas.height);
   }
}

function handleCM(event){
   event.preventDefault();
   // console.log(event);
}

function handleSaveClick(){
   //canvas의 데이터를 이미지로 얻기.
   const image = canvas.toDataURL();
   // const image = canvas.toDataURL("image/jpeg"); //-> jpeg으로 저장하기
   // console.log(image);
   // canvas의 저장기능을 위한 a 태그 임시 생성
   const link = document.createElement("a");
   
   //anchor(a)태그의 download기능으로 연결
   link.href = image;
   link.download = "PaintJS[🎨]";

   // console.log(link);
   //fake link click = 다운로드가 실행
   link.click();
}

if(canvas){
   canvas.addEventListener("mousemove",onMouseMove);
   canvas.addEventListener("mousedown",startPainting);
   canvas.addEventListener("mouseup",stopPainting);
   canvas.addEventListener("mouseleave", 
   stopPainting);
   canvas.addEventListener("click",handleCanvasClick);
   canvas.addEventListener("contextmenu",handleCM)
}

Array.from(colors).forEach(color => color.addEventListener("click",handleColorClick));

if(range){
   range.addEventListener("input",handleRangeChange);
};

if(mode){
   mode.addEventListener("click",handleModeClick);
}

if(saveBtn){
   saveBtn.addEventListener("click",handleSaveClick);
}