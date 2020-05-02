//bg.js
const body = document.querySelector("body"),
      wrap = body.querySelector("#wrap");

const IMG_NUMBER = 6;

//function handleImgLoad(){
//	console.log("finished loading");
//}
//API활용시 필요

function paintImage(imgNumber){
	const image = new Image();
  	image.src = `./images/${imgNumber + 1}.jpg`;
  	image.classList.add("bgImage");
  	wrap.append(image);
  	//image.addEventListener("loadend",handleImgLoad);
  	//API활용시 필요
}

function genRandom(){
	const number = Math.floor(Math.random() * IMG_NUMBER);
 	return number;
}

function init(){
	const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();