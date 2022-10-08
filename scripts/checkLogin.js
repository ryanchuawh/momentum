let nameStored = localStorage.getItem("nameKey");
/*console.log(nameStored)*/

window.addEventListener('load', function() {
    //console.log("reload"+nameStored)
    if(nameStored===""){
        document.getElementById("login").style.display='block';
    }
    else{
        document.getElementById("login").style.display='none';
        document.getElementById("home").style.display='block';
        document.getElementById("name").value=nameStored;
        //For Main Focus
        const keyComplete=localStorage.getItem("completeKey");
        const mainCheck = document.getElementById("mainCheck");
        let focusMain = localStorage.getItem("focusKey");
      
        if(focusMain!==""){
            document.getElementById("todoMessage").innerHTML = "";
            document.getElementById("main-todo").style.display='none';
            document.getElementById("hiddenTodo").style.display='block';
            document.getElementById("focus").innerHTML=focusMain;
            if(keyComplete==="true"){
                console.log("test1")
                mainCheck.checked=true;  
                document.getElementById("focus").classList.add("checked") ;    
                successTodo.style.display="block";    
            }
            else{
                mainCheck.checked=false; 
                document.getElementById("focus").classList.remove("checked") ; 
                successTodo.style.display="none";            
            }
            //console.log("load")
            //console.log(keyComplete) 
        }
        else{
            document.getElementById("main-todo").style.display='block';
            document.getElementById("hiddenTodo").style.display='none';
        }
       
    }
   
})
