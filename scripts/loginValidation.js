let name1 = document.querySelector('input[id="LoginName"]');

function ifValid(){
if(name1.value===""){
    document.getElementById("message").innerHTML = "Please tell us how we should address you.";
}
else{
    document.getElementById("login").style.display='none';
    document.getElementById("home").style.display='block';
    localStorage.setItem("nameKey", name1.value);
    document.getElementById("name").value=name1.value;
}
}