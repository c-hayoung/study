// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const selectContainer = document.querySelector(".select-country");

const USER_FROM = "country",
      USER_FROM_NUM = "index";

function handleSelect(e){
  const yourCountry = e.target.value;
  const yourIndex = selectContainer.selectedIndex;
  localStorage.setItem(USER_FROM,yourCountry);
   localStorage.setItem(USER_FROM_NUM,yourIndex);
}

function selectCountry(){
  selectContainer.addEventListener("change",handleSelect);
}

function selectedOption(e){
   // console.log(e);
   // console.log(selectContainer.options.value);
   selectContainer.options[e].selected = "selected";
}

function loadCountry(){
  const country = localStorage.getItem(USER_FROM_NUM);
  if (country !== null){
   selectedOption(country);
  }
   selectCountry();
}

function init(){
  loadCountry();
  
}

init();