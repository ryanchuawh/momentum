const logoutBtn = document.getElementById('logoutBtn');

logoutBtn.addEventListener('click', logout);
function logout(){
    localStorage.setItem("nameKey", "");/*Clear name*/
    document.getElementById("login").style.display='block';
    /*Modal*/
    modal.style.display = 'none';
}

