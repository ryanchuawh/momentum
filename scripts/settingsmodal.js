var modal = document.getElementById('settingsmodal');
var modalBtn = document.getElementById('settings');
var closeBtn = document.getElementById('closeBtn');

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

function openModal(){
    if(modal.style.display==='block'){
        modal.style.display='none'; 
        
    }
    else{
        modal.style.display = 'block';
        todoModal.style.display='none'; 
    }
    
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
    if(todoModal.style.display==='block'){
        todoModal.style.display='none'; 
        
    }
    else{
        todoModal.style.display = 'block';
        modal.style.display='none'; 
    }
    
}
function closeTodo(){
    todoModal.style.display = 'none';
}