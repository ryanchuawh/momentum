var modal = document.getElementById('settingsmodal');
var modalBtn = document.getElementById('settings');
var closeBtn = document.getElementById('closeBtn');

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

function openModal(){
    modal.style.display = 'block';
}
function closeModal(){
    modal.style.display = 'none';
}
/*Todo Modal */
const todoModal = document.getElementById('todoModal');
const openTodoBtn =document.getElementById('todoBtn');
const closeTodoBtn = document.getElementById('todoClose');

openTodoBtn.addEventListener('click', openTodo);
closeTodoBtn.addEventListener('click', closeTodo);

function openTodo(){
    todoModal.style.display = 'block';
}
function closeTodo(){
    todoModal.style.display = 'none';
}