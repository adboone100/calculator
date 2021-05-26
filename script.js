function add(a,b) {
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function modulo(a,b){
    return a % b;
}

function operate(a,b,operator) {
    switch(operator){
        case "+":
            return add(a,b);
            break;
        case "-":
            return subtract(a,b);
            break;
        case "×":
            return multiply(a,b);
            break;
        case "÷":
            return divide(a,b);
            break;
        case "%":
            return modulo(a,b);
            break;      
    }
}


const roundButtons = document.querySelectorAll(".round-btn");

roundButtons.forEach(button => button.addEventListener('click', function(e) {
   const screen = document.querySelector(".screen");
    getNum1(e);
    if(compute == "true"){
        let output = operate(Number(num1),Number(num2),operator);
        let roundedOutput = Math.round(output * 10000) / 10000;
        screen.textContent = roundedOutput;
    }
    else{
    screen.textContent = `${num1} ${operator} ${num2}`;
    }

}))


let num1 = "";
let num2 = "";
let operator = "";
let compute = "";


function getNum1(e) {
    let input = e.target.dataset.key;
    if(input >= 0  && operator == "" && num1.length <= 14){
    num1 += input;
   }
   else if(input >= 0 && operator !== "" && num2.length <= 14){
    num2 += input;
   }
   else if(input== "." && operator == "" && checkOneDecimal(num1) == false){
       num1 += input;
   }
   else if(input == "." && operator !== "" && checkOneDecimal(num2) == false){
       num2 += input;
   }
   else if(input == "AC"){
    num1 = "";
    num2 = "";
    operator = "";
    compute = "";
   }
   else if(input == "C" && operator == ""){
    num1 = "";
   }
   else if(input == "C" && operator !== "" && num2 == ""){ //clear operator
    operator = "";
   }
   else if(input == "C" && operator !== "" && num2 !== "" && compute == ""){
    num2 = "";
   }
   else if(input == "C" && operator !== "" && num2 !== "" && compute == "true"){
    num1 = "";
    num2 = "";
    operator = "";
    compute = "";
   }
   else if(input && operator !== "" && num2 !== "" && compute == "true"){
    num1 = "";
    num2 = "";
    operator = "";
    compute = "";
   }
   else if(input == "=" && num1 !== "" && operator !== "" && num2 !== ""){
       compute = "true";
   }
   else if(input == "="){
       //do nothing
   }
   else if((input == "+" || input == "-" || input == "%" || input == "×" || input == "÷") && operator == "" && num1 !== ""){
       operator = input;
   }
    
}

function checkOneDecimal(num) {
    const numArray = Array.from(num);
    const oneDecimal = numArray.includes(".")

    return oneDecimal;
}
