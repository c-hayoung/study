// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const toDoForm = document.querySelector(".toDoForm"),
  toDoInput = toDoForm.querySelector(".toDoInput"),
  pendingUl = document.querySelector(".pending_task"),
  finishedUl = document.querySelector(".finished_task");

const TODOS_LS = "PENDING";
const FINISHED_LS = "FINISHED"

let ToDoArray = [];
let FinishedArray = [];

function saveToDo(){
   localStorage.setItem(TODOS_LS, JSON.stringify(ToDoArray));
   localStorage.setItem(FINISHED_LS, JSON.stringify(FinishedArray));
};

function deleteToDo(event){
   // html에서 제거
   const deleteBtn = event.target;
   const deleteLi = deleteBtn.parentNode;
   const taskUl = deleteLi.parentNode;
   console.log(taskUl.classList.value);
      const deleteParse = parseInt(deleteLi.id);
   taskUl.removeChild(deleteLi);
   
   //LS에서 제거
   const newToDo = ToDoArray.filter(function(toDo){
      return toDo.id !== deleteParse;
   })
   ToDoArray = newToDo;

   const newFinished = FinishedArray.filter(function(toDo){
      return toDo.id !== deleteParse;
   })
   FinishedArray = newFinished;

   saveToDo();
}

function checkToDo(event){
   const checkBtn = event.target;
   const checkLi = checkBtn.parentNode;
      const checkId = parseInt(checkLi.id);
   const checkUl = checkLi.parentNode;
   const checkClass = checkUl.classList.value;
   
   if(checkClass === "pending_task"){
      checkBtn.innerText = "🆗";
      const finishedToDo = ToDoArray.filter(function(toDo){
         return toDo.id === checkId;
      })
      FinishedArray = FinishedArray.concat(finishedToDo);
      finishedUl.appendChild(checkLi);
   
      const pendingToDo = ToDoArray.filter(function(toDo){
         return toDo.id !== checkId;
      })
      ToDoArray = pendingToDo;
   }else{
      checkBtn.innerText = "✔️";
      const pendingToDo = FinishedArray.filter(function(toDo){
         return toDo.id === checkId;
      })
      ToDoArray = ToDoArray.concat(pendingToDo);
      pendingUl.appendChild(checkLi);

      const finishedToDo = FinishedArray.filter(function(toDo){
         return toDo.id !== checkId;
      })
      FinishedArray = finishedToDo;
   }
   saveToDo();
}


function paintToDo(text) {
  //html에 추가
  const li = document.createElement("li");
  const delBtn = document.createElement("Button");
  const ckBtn = document.createElement("button");
  const span = document.createElement("span");
  span.innerText = text;
  delBtn.innerText = "❌";
   delBtn.addEventListener("click",deleteToDo);
  ckBtn.innerText = "✔️";
   ckBtn.addEventListener("click",checkToDo);
  li.appendChild(span);
  li.appendChild(ckBtn);
  li.appendChild(delBtn);
  pendingUl.appendChild(li);

  //LS에 추가
  const taskId = ToDoArray.length + 1;
   li.id = taskId;
  const toDoObj = {
    text: text,
    id: taskId
  }
  ToDoArray.push(toDoObj);
  saveToDo();
};

function loadFinishedToDo(text) {
   const li = document.createElement("li");
   const delBtn = document.createElement("Button");
   const ckBtn = document.createElement("button");
   const span = document.createElement("span");
   span.innerText = text;
   delBtn.innerText = "❌";
    delBtn.addEventListener("click",deleteToDo);
   ckBtn.innerText = "🆗";
    ckBtn.addEventListener("click",checkToDo);
   li.appendChild(span);
   li.appendChild(ckBtn);
   li.appendChild(delBtn);
   finishedUl.appendChild(li);
 
   //LS에 추가
   const taskId = ToDoArray.length + FinishedArray.length + 1;
    li.id = taskId;
   const toDoObj = {
     text: text,
     id: taskId
   }
   FinishedArray.push(toDoObj);
   saveToDo();
 };

function handleSubmit(e) {
  e.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}


function loadToDo() {
  const myToDoList = localStorage.getItem(TODOS_LS);
  const myFinishedList = localStorage.getItem(FINISHED_LS);
  if (myToDoList !== null && myFinishedList !== null) {
      const parsedToDo = JSON.parse(myToDoList);
      parsedToDo.forEach(function(toDo){
         paintToDo(toDo.text);
      })
      const parsedFinished = JSON.parse(myFinishedList);
      parsedFinished.forEach(function(toDo){
         loadFinishedToDo(toDo.text);
     })
  };
}

function init() {
  loadToDo();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
