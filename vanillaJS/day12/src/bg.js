//bg.js
const body = document.querySelector("body"),
      wrap = body.querySelector("#wrap"),
      mainBox = wrap.querySelector("#mainBox"),
      clockContainer = mainBox.querySelector("#clock"),
      nameBox = mainBox.querySelector("#nameBox");



// 1. clock

const dayKor = [`일`,`월`, `화`, `수`, `목`, `금`, `토`];

function getTime(){
   const date = new Date();
   let hours = date.getHours();
   let minutes = date.getMinutes();
   let seconds = date.getSeconds();
   const day = date.getDay();

   hours = hours%12;

   clockContainer.innerText = `${hours < 10 ? `0${hours}`: hours}:${minutes < 10 ? `0${minutes}`:minutes}:${seconds < 10 ? `0${seconds}`:seconds}`;
   // clockContainer.innerText = `${dayKor[day]}요일`;
}


// 2. Username Persistance
const headGreeting = mainBox.querySelector("h1");
const nameZone = nameBox.querySelector(".input_name");
const printNameBox = nameBox.querySelector(".know_name");
const printName = printNameBox.querySelector("span");
const resetName = printNameBox.querySelector("button");

const USER_LS = "username";

function handleEnter(){
   resetName.innerText = "I want to change my name";
   resetName.classList.add("action");
}

function handleLeave(){
   resetName.innerText =`Is it not your name?`;
   resetName.classList.remove("action");
}

function paintGreeting(){
   const savedName = localStorage.getItem(USER_LS);

   nameZone.classList.remove("action");
   printNameBox.classList.add('action');
   printName.innerText = `I'm waiting for you, ${savedName}!`;
   headGreeting.innerText = "welcome back!!";
   
   resetName.addEventListener("click",askForName);
   resetName.addEventListener("mouseenter",handleEnter);
   resetName.addEventListener("mouseleave",handleLeave);
};

function handleSubmit(e){
   e.preventDefault();
   const userName = nameZone.value;
   if(userName === ""){
      alert("fill your name");
   }else{
      localStorage.setItem(USER_LS,userName);
      nameZone.value = "";
      paintGreeting();
   }
};

function askForName(){
   localStorage.setItem(USER_LS,"");
   printNameBox.classList.remove('action');
   nameZone.classList.add("action");
   nameBox.addEventListener("submit",handleSubmit);
   headGreeting.innerText = "welcome...?";
};


function loadName(){
   const currentUserName = localStorage.getItem(USER_LS);
   if(currentUserName === ""){
      askForName();
   }else{
      paintGreeting();
   }   
}


// 3. TO DO LIST
const TODO_LS = "to do List";

function paintToDo(text){
   const li = document.createElement("li");
   const delBtn = document.createElement("button");

}


function loadToDo(){
   const savedToDo = localStorage.getItem(TODO_LS);
   if(savedToDo !== null){
      const parsedToDo = JSON.parse(savedToDo);
      parsedToDo.forEach(function(ToDo){
         paintToDo(ToDo.text);
      })
   }
};



// 4. RANDOM BGI
const IMG_NUMBER = 5;

//function handleImgLoad(){
//	console.log("finished loading");
//}
//API활용시 필요

function paintImage(imgNumber){
	const image = new Image();
  	image.src = `./images/${imgNumber + 1}.jpg`;
  	image.classList.add("bgImage");
  	mainBox.appendChild(image);
  	//image.addEventListener("loadend",handleImgLoad);
  	//API활용시 필요
}

function genRandom(){
	const number = Math.floor(Math.random() * IMG_NUMBER);
 	return number;
}


// 5. Weather with Geolocation





// function init
function init(){
   // 1. clock
   getTime();
   setInterval(getTime,1000);
   
   // 2. username
   loadName();

   // 3. to do list
   loadToDo();

   // 4. random background
	const randomNumber = genRandom();
   paintImage(randomNumber);

   // 5. 
}

init();