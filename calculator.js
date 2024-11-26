let operands = {
    operand_x: 0,
    operand_y: undefined,
    operator: undefined,
    evaluation: undefined
};
let displayText = document.querySelector(".display-text");
displayText.textContent = operands.operand_x;
let numberStream = [];
let pressed = false;

let keypad = document.querySelectorAll(".key");
keypad.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.classList.contains("number")) {
            numberStream.push(btn.innerHTML);
            displayText.textContent = numberStream.join("");
        } else if (btn.classList.contains("operation")) {
            if (!pressed) {
                pressed = true;                    displayText
                if (numberStream.length !== 0) {
                    operands.operand_x = +numberStream.join("");
                }
            } 
            else if (pressed) {
                if (numberStream.length !== 0) {
                    operands.operand_y = +numberStream.join("");
                    operands.evaluation = operation(operands);
                    displayText.textContent = operands.evaluation;
                    operands.operand_x = operands.evaluation;
                }
            }
            numberStream = [];
            operands.operator = btn.id;

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