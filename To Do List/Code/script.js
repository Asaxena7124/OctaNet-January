document.addEventListener("DOMContentLoaded", function() {
    // Your existing JavaScript code here

// Shows current time
function startTime() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("ctime").innerHTML = h + ":" + m;
    let t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
  
  // Show today's date
  const currentDate = document.getElementById("cdate");
  const options = {weekday : "long", month:"short", day:"numeric"};
  const today = new Date();
  currentDate.innerHTML = today.toLocaleDateString("en-US", options);


  let item = document.getElementById("new-item");
  let list = document.getElementById("list");

  
  function newItem(toDo){
    toDoItem = `<li>
                  
                  <p class="item">${toDo}</p>
                  <i class="fa fa-trash" job="delete"></i>
              </li>` 

    const position = "beforeend";
    list.insertAdjacentHTML(position, toDoItem);
              

  }

  function addItem(){
   let toDo = item.value;
    if (toDo) {
      newItem(toDo);
      item.value ="";
    }
  }

  //Press enter to add ToDo
  item.addEventListener("keyup", function(event){
    if(event.code === 'Enter'){
      event.preventDefault();
        let toDo = item.value;
         if (toDo) {
           newItem(toDo);
           item.value ="";
       }
     
    }
  });


  //delete task
list.addEventListener("click", function(event){
  let element = event.target; //<i class="fa fa-trash" job="delete"></i>
  const deleteJOB = event.target.attributes.job.value; //delete completed task
  if(deleteJOB =="delete"){
    removeToDo(element);
  }
});

// remove to do
function removeToDo(element){
  element.parentNode.parentNode.removeChild(element.parentNode);
}


// CLICK A TARGET ITEM TO STRIKE THROUGH
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('strike-through');
  }

  if(ev.target.tagName === 'P') {
    ev.target.parentNode.classList.toggle('strike-through');
  }
  
}, false);

});