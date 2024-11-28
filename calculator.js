let numberStream = [0];
let operands = {operand_x: 0,};
let displayText = document.querySelector(".display-text");
let displayOperator = document.querySelector(".display-operator");
displayText.textContent = 0;
let pressed = false;
const max = Number.MAX_SAFE_INTEGER;
const min = -max;

let keypad = document.querySelectorAll(".key");
//TODO: Implement clear, delete.
keypad.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.classList.contains("number")) {//everytime number is pressed
            if (numberStream.length === 0) { 
                numberStream.push(0); //calculator starts with 0
            }
            numberStream.push(btn.innerHTML); //store number pressed
            if (numberStream[0] == 0 && !numberStream.includes(".")) {
                numberStream.shift();//prevents leading 0s
            }
            displayText.textContent = numberStream.join("");//displays number
            if(pressed == true) { //assigns numberstream to y if operation in progress
                operands.operand_y = +numberStream.join("");
            }
        }
        else if (btn.id == "decimal") { //whenever decimal is pressed
            if (numberStream.length === 0) {
                numberStream.push(0); //puts a 0 before empty decimal
            }
            if (!numberStream.includes(btn.innerHTML)) {
                numberStream.push(btn.innerHTML); //puts decimal in number
                displayText.textContent = numberStream.join("");
            } 
        }
        else if (btn.id == "negate") {
            if (!numberStream.includes("-")) {
                let negative = +displayText.textContent * -1;
                numberStream = negative.toString().split('');
                if(pressed == true) {
                    operands.operand_y = +numberStream.join("");
                }
                displayText.textContent = numberStream.join("");
            }
        }
        else if (btn.id === "proportion") {
            let proportion = +displayText.textContent / 100;
            numberStream = proportion.toString().split('');
            if(pressed == true ) {
                operands.operand_y = +numberStream.join("");
            }
            displayText.textContent = numberStream.join("");
        }
        else if (btn.id == "clear") {
            operands.operand_x = 0;
            delete operands.operand_y;
            delete operands.operator;
            delete operands.evaluation;
            numberStream = [0];
            displayText.textContent = 0;
            displayOperator.textContent = "";
        }
        else if (btn.id == "delete") {
            if (numberStream.length !== 0) {
                numberStream.pop();
                displayText.textContent = numberStream.join("");
            }
            if (numberStream.length === 0) {
                numberStream = [0];
                displayText.textContent = numberStream.join("");
            }
            if(pressed == true ) {
                operands.operand_y = +numberStream.join("");
            }
        }
        else if (btn.classList.contains("operation")) {
            if (pressed == false && btn.id !== "evaluate") {
                pressed = true;
                if (numberStream.length !== 0) {
                    operands.operand_x = +numberStream.join("");
                }
            } 
            else if (pressed == true && btn.id !== "evaluate") {
                if (numberStream.length !== 0) {
                    operation(operands);
                    displayText.textContent = operands.evaluation;
                }  
            } 
            else if (btn.id === "evaluate") {
                pressed = false;
                if ("operand_y" in operands) {
                    operation(operands);
                    displayText.textContent = operands.evaluation;
                } else if (numberStream.length !== 0) {
                    operands.operand_x = +numberStream.join("");
                    operation(operands);
                    displayText.textContent = operands.evaluation;
                } 
            }
            numberStream = [];
            operands.operator = btn.id;
            displayOperator.textContent = btn.innerHTML;
        } 
    });
}) 

function operation(obj) {
    let evaluation = 0;
    switch (obj.operator) {
        case "add":
            evaluation = add(obj.operand_x, obj.operand_y);
            break;
        case "subtract":
            evaluation = subtract(obj.operand_x, obj.operand_y);
            break;
        case "multiply":
            evaluation = multiply(obj.operand_x, obj.operand_y);
            break;
        case "divide":
            evaluation = divide(obj.operand_x, obj.operand_y);
            break;
        default:
            evaluation = obj.operand_x;
            console.log("No operation was performed.");
        }
    operands.evaluation = evaluation;
    operands.operand_x = operands.evaluation;
    delete operands.operand_y;
}

function add(x,y) {return handleOverflow(Number(x + y));}
function subtract(x,y) {return handleOverflow(Number(x - y));}
function multiply(x,y) {return handleOverflow(x * y);}
function divide(x,y) {return handleOverflow(!y ? "bruh" : x / y);}
function handleOverflow(result) {
    if (result > max || result < min) {
        return "OVERFLOW";
    } else {
        return result;
    }
}