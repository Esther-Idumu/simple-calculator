let display = document.getElementById("display");

function playAudio(){
    const audio = new Audio('click.mp3');
    audio.play();
}

function appendToDisplay(value){
    if(display.value === "Syntax Error" || display.value === "undefined"){
        display.value = ''
    }
    display.value += value;
}

function clearDisplay(){
    display.value = '';
}

function evaluateResult(){
    try{
      let result = eval(display.value);
      clearDisplay();
      appendToDisplay(result);
    }
    catch(e){
        console.error('Invalid input');
        clearDisplay();
        appendToDisplay("Syntax Error");
        
    }
}