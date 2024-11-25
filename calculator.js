let operands = new Object();
let displayText = document.querySelector(".display-text");
let numberStream = [];

let keypad = document.querySelectorAll(".key");
keypad.forEach((btn) => {
    btn.addEventListener("click", () => {
        numberStream.push(btn.innerHTML);
        let value_x = numberStream.join("");
        displayText.textContent = value_x;
        console.log(value_x + typeof value_x);
    });
}) 


function operation(obj, text) {
    obj.operand_x = 3;
    obj.operand_y = 5;
    obj.operator = "add";
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