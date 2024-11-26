let operands = {
    operand_x: 0,
    operand_y: undefined,
    operator: undefined
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
                pressed = true;
                if (numberStream.length !== 0) {
                    operands.operand_x = +numberStream.join("");
                }
            } 
            else if (pressed) {
                if (numberStream.length !== 0) {
                    pressed = false;
                    operands.operand_y = +numberStream.join("");
                    operation(operands, displayText);
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


function operation(obj, text) {
    //obj.operand_x = 3;
    //obj.operand_y = 5;
    //obj.operator = "add";
    console.log(obj);
    switch (obj.operator) {
        case "add":
            add(obj.operand_x, obj.operand_y, text);
            break;
        default:
            console.log("No operation was performed.");
        }
}

function add(x,y,display) {
    display.textContent = x + y;
}

function subtract(x,y,display) {
    
}

function multiply(x,y,display) {
    
}

function divide(x,y,display) {
    
}