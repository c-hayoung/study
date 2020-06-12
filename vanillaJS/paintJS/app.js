const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 900;
canvas.height = 500;

ctx.strokeStyle = "#333";
ctx.lineWidth = 2.5;


let painting = false;

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
   }
}

if(canvas){
   canvas.addEventListener("mousemove",onMouseMove);
   canvas.addEventListener("mousedown",startPainting);
   canvas.addEventListener("mouseup",stopPainting);
   canvas.addEventListener("mouseleave", stopPainting);
}