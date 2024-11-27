let operands = {
    operand_x: 0,
};
let displayText = document.querySelector(".display-text");
let displayOperator = document.querySelector(".display-operator");
displayText.textContent = operands.operand_x;
let numberStream = [];
let pressed = false;

let keypad = document.querySelectorAll(".key");
//TODO: Evaluate for floats. numberstream should be limited to
//A SINGLE decimal point after the decimal button is pressed
//handle overflow. Implement proportion, negate, clear, delete.
keypad.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.classList.contains("number")) {
            numberStream.push(btn.innerHTML);
            displayText.textContent = numberStream.join("");
            if(pressed == true) {
                operands.operand_y = +numberStream.join("");
            }
        } 
        
        else if (btn.classList.contains("operation")) {
            console.log(pressed);
            if (pressed == false && btn.id !== "evaluate") {
                pressed = true;
                if (numberStream.length !== 0) {
                    operands.operand_x = +numberStream.join("");
                }
            } 
            else if (pressed == true && btn.id !== "evaluate") {
                if (numberStream.length !== 0) {
                    operands.evaluation = operation(operands);
                    displayText.textContent = operands.evaluation;
                    operands.operand_x = operands.evaluation;
                }
            } 
            else if (btn.id === "evaluate") {
                if ("operand_y" in operands) {
                    pressed = false;
                    operands.evaluation = operation(operands);
                    displayText.textContent = operands.evaluation;
                    operands.operand_x = operands.evaluation;
                    delete operands.operand_y;
                }
            }
            numberStream = [];
            operands.operator = btn.id;
            displayOperator.textContent = btn.innerHTML;

            console.log(pressed);
            console.log(operands.operator);
            console.log(operands.operand_x);
            console.log(operands.operand_y);

            /*let functionKeys = document.querySelectorAll(".operation");
            functionKeys.forEach((key) => {
                key.disabled = true;
            });*/
        } 

        else {
            console.log(btn.classList);
        }
    });
}) 


function operation(obj) {
    //obj.operand_x = 3;
    //obj.operand_y = 5;
    //obj.operator = "add";
    let evaluation = 0;
    console.log(obj);
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
            console.log("No operation was performed.");
        }
    return evaluation;
}

function add(x,y) {
    return x + y;
}

function subtract(x,y) {
    return x - y;
}

function multiply(x,y) {
    return x * y;
}

function divide(x,y) {
    return x / y;
}