function checkToDo(event){
   const checkBtn = event.target;
   const checkLi = checkBtn.parentNode;
   const checkClone = checkLi.cloneNode(true);

   pendingUl.removeChild(checkLi);
   finishedUl.appendChild(checkClone);

   const finishedToDo = ToDoArray.filter(function(toDo){
      return toDo.id !== parseInt(checkLi.id);
   })

   const idx = ToDoArray.indexOf(finishedToDo);
   const Finishedidx = FinishedArray.indexOf(finishedToDo);

   console.log(finishedToDo);

   FinishedArray.push(finishedToDo);
   ToDoArray.splice(idx,true);
   
   // if(currentChecked === true){
   //    finishedToDo.checked = false;
   //    ToDoArray.push(finishedToDo);
   //    FinishedArray.splice(Finishedidx,false);
   // }else{
   //    finishedToDo[0].checked = true;
   //    FinishedArray.push(finishedToDo);
   //    ToDoArray.splice(idx,true);
   // }
   saveToDo();
}