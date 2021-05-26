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
    }
}


const roundButtons = document.querySelectorAll(".round-btn");

roundButtons.forEach(button => button.addEventListener('click', function(e) {
   const screen = document.querySelector(".screen");
    getNum1(e);
    if(compute == "true"){
        let output = operate(Number(num1),Number(num2),operator);
        console.log(output);
        screen.textContent = output;
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
    if((input >= 0 || input== ".") && operator == ""){
    num1 += input;
   }
   else if((input >= 0 || input== ".") && compute == ""){
    num2 += input;
   }
   else if(input == "AC"){
    num1 = "";
    num2 = "";
    operator = "";
    compute = "";
   }
   else if(input == "C" && operator == ""){
    num1 = ""
   }
   else if(input == "C" && operator !== "" && compute == ""){ //clear operator
    operator = ""
   }
   else if(input == "C" && operator !== "" && num2 !== ""){
    num2 = "";
   }
   else if(input == "C" && operator !== "" && compute == "true"){
    num1 = "";
    num2 = "";
    operator = "";
    compute = "";
   }
   else if(input == "="){
       compute = "true";
   }
   else{
       operator = input;
   }  
}


