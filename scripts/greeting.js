const greetContainer = document.querySelector(".greet-container"), 
    greetOfDay = greetContainer.querySelector("span");

function getGreeting(){
    const date = new Date();
    const hour = date.getHours();
    console.log(hour)
    const greet =["Good Morning,","Good Afternoon,","Good Evening,"];
    let greetText = '';
    if (hour>=5&&hour<=12) {//5AM-12
        greetText = greet[0];
    }
    else if (hour>12&&hour<18)  { //1PM-6PM
        greetText = greet[1];
    }
    else{
        greetText = greet[2];//7PM-4AM
    }
    greetOfDay.innerText=greetText;
    console.log(greetText)
}
function init2() {
    getGreeting();
    setInterval(getGreeting, 3600000);
}
init2();
