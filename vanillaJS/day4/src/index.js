// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const body = document.querySelector("body");
const sizeList = ["wide", "basic", "short"];

function handleResize() {
  let currentWidth = window.innerWidth;

  if (currentWidth >= 800) {
    body.classList.remove(sizeList[1]);
    body.classList.add(sizeList[0]);
  } else if (currentWidth < 800 && currentWidth >= 500) {
    body.classList.remove(sizeList[0], sizeList[2]);
    body.classList.add(sizeList[1]);
  } else {
    body.classList.remove(sizeList[1]);
    body.classList.add(sizeList[2]);
  }
}

handleResize();

window.addEventListener("resize", handleResize);
