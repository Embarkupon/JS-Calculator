let operands = new Object();

function operation(obj) {
    obj.operand_x = 3;
    obj.operand_y = 5;
    obj.operator = "add";
    console.log(obj);
    switch (obj.operator) {
        case "add":
            add(obj.operand_x, obj.operand_y);
            break;
        default:
            console.log("No operation was performed.");
        }
}

function add(x,y) {
    console.log(x + y);
}

function subtract(x,y) {
    
}

function multiply(x,y) {
    
}

function divide(x,y) {
    
}