
const toDoForm = document.querySelector(".todolist");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".handleTodoList");

const listTodo = "toDos";
let toDos = [];

function deleteTodo(id) {
  /*const btn = event.target;
  const li = btn.parentNode;*/
  const cleanToDos  =  toDos.filter(function (toDo) {
    /*return toDo.id !== parseInt(li.id);*/
    return toDo.id != id;
  });
  toDos = cleanToDos;
  saveToDos(toDos);
}

function saveToDos(toDos) {
  localStorage.setItem(listTodo, JSON.stringify(toDos));
  paintTodo(toDos);
}

function paintTodo(toDos) {
  toDoList.innerHTML = "";

  toDos.forEach(function(item) {
    const checked = item.completed ? "checked": null;
    const li = document.createElement("li");
    li.setAttribute("class", "item");
    li.setAttribute("id", item.id);
    if (item.completed === true) {
      li.classList.add("checked");
    }
    li.innerHTML = `
      <input type="checkbox" class="checkbox" ${checked}>
      ${item.text}
      <button class="delBtn fa-solid fa-delete-left"></button>
    `;
    toDoList.append(li);
  });

}
function addTodo(text) {
  
    const toDoObj  = {
      id: Date.now(),
      text: text,
      completed: false
    };

    toDos.push(toDoObj );
    saveToDos(toDos); 
    
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    if (currentValue !== "") {
      addTodo(currentValue);
      toDoInput.value = "";
    }
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(listTodo);
  if (loadedToDos!== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    /*parsedToDos.forEach(function (toDo) {
    paintToDo(toDo.text);
    });*/
    toDos=parsedToDos;
    paintTodo(toDos);
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}
init();
//For checkbox if complete
function toggle(id) {
  toDos.forEach(function(item) {
    if (item.id == id) {
      item.completed = !item.completed;
    }
  });
  saveToDos(toDos);
}

loadToDos();

toDoList.addEventListener("click", function(event) {
  if (event.target.type === "checkbox") {
    toggle(event.target.parentElement.getAttribute("id"));
  }

  if (event.target.classList.contains("delBtn")) {
    deleteTodo(event.target.parentElement.getAttribute("id"));
  }
});
//Main Todo
const mainTodo = document.getElementById("todoMain");
const mainInput = document.getElementById("mainTodo");
const mainCheck = document.getElementById("mainCheck");
mainTodo.addEventListener("submit",handleTodo);
function handleTodo(event){
  event.preventDefault();
  if(mainInput.value===""){
    document.getElementById("todoMessage").innerHTML = "Please input a task";
  }
  else{
      document.getElementById("todoMessage").innerHTML = "";
      document.getElementById("main-todo").style.display='none';
      document.getElementById("hiddenTodo").style.display='block';
      localStorage.setItem("focusKey", mainInput.value);
      localStorage.setItem("completeKey", true);
      document.getElementById("focus").innerHTML=mainInput.value;
  }
}
const success = document.getElementById('successMessage');
//let keyComplete=localStorage.getItem("completeKey");
//Focus Checkbox
mainCheck.addEventListener("click",check);

function check(){
  if(mainCheck.checked===true){
    localStorage.setItem("completeKey", true);
    document.getElementById("focus").classList.add("checked") ;
    success.style.display="block";
    
  }
  else{
    localStorage.setItem("completeKey", false);
    document.getElementById("focus").classList.remove("checked")
    success.style.display="none";
    
  }
  //console.log(keyComplete)
}
//Delete Focus
const delFocus = document.getElementById("deleteFocus");
delFocus.addEventListener("click",del);
function del(){
  localStorage.setItem("focusKey", "");
  localStorage.setItem("completeKey", false);
  mainCheck.checked=false;
  document.getElementById("todoMessage").innerHTML = "";
  document.getElementById("focus").classList.remove("checked")
  success.style.display="none";
  document.getElementById("main-todo").style.display='block';
  document.getElementById("hiddenTodo").style.display='none';
}
