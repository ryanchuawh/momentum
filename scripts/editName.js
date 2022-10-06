let name2 = document.querySelector('input[id="name"]');
const editNameBtn = document.getElementById('editNameBtn');
let editedName="";

editNameBtn.addEventListener('click', editName);

function editName(){
    name2.style.pointerEvents="all";
    name2.focus();
    
}

name2.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        if(name2.value!==""){
            console.log("input value: "+name2.value)  
            localStorage.setItem("nameKey", name2.value);
            editedName=name2.value;
            console.log("nameStored: "+nameStored)
            name2.style.pointerEvents="none";
            name2.blur();
        }
        else{
            console.log("edited empty: "+nameStored)/*shows previous, only show latest when on reload*/
            name2.value=editedName;
            if(editedName===""){
                name2.value=nameStored;
            }
        }
    }
  });