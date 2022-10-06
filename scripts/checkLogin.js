
let nameStored = localStorage.getItem("nameKey");
/*console.log(nameStored)*/

function checkLogin(){
if(nameStored===""){
    document.getElementById("login").style.display='block';
}
else{
    document.getElementById("login").style.display='none';
    document.getElementById("home").style.display='block';
    document.getElementById("name").value=nameStored;

}
}