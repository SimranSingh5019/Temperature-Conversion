const textBox  = document.getElementById("textBox");
const toCelsius = document.getElementById("toCelsius");
const toFarenheit = document.getElementById("toFarenheit");
const result = document.getElementById("result");
let temp;
function convert(){
    if(toCelsius.checked){
        temp =Number(textBox.value);
        temp = 5/9*(temp-32);
        result.textContent = temp+"° Celsius";
    }
    else if(toFarenheit.checked){
        temp =Number(textBox.value);
        temp = (9/5*temp)+32;
        result.textContent = temp+"° Fahrenheit";
    }
    else{
        result.textContent =  "Select an unit";
    }
}
