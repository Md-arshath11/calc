const display=document.getElementById("input-value")

function appentToDisplay(input){
    display.value += input
}

function clearDisplay(){
    display.value="";
}

function calculate(){
    try{
        display.value=eval(display.value)
    }
    catch{
        display.value="error"
    }
    
}