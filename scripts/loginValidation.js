function ifValid(){
const name1 = document.querySelector('input[id="LoginName"]');
if(name1.value===""){
    document.getElementById("message").innerHTML = "Please tell us how we should address you.";
    
}
else{
    document.getElementById("login").style.display='none';
    document.getElementById("home").style.display='block';
    document.getElementById("name").value=name1.value;
}
}