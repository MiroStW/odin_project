// initialise calculation values
let displayValue = "";
let valueA = "";
let valueB = "";
let operator = "";

// identify elements
const display = document.querySelector("#display");
const btnEnter = document.querySelector("#enter");
const btnClear = document.querySelector("#clear");

// init with 0
// press number: update display, dont store yet
// press number: if valueA & operator & display not clear: clear display & write
// number

const btnNumbers = [];
for (let i = 0; i < 10; i++) {
    btnNumbers[i] = document.querySelector("#number"+i);
    btnNumbers[i].addEventListener("click",() => {enterNumber(btnNumbers[i].value)});
}

function enterNumber(button) {
    // operator ? displayValue = button : 
    // TODO replace display after operator was added - and only on first number
    if (valueA && operator && !displayValue) {
        displayValue = button;
    }
    else displayValue += button;

    display.textContent = displayValue;
    console.log(display.textContent);
}

// press operator: store display value A, store operator
// press operator: if valueA & operator are set: store display as value B &
// execute operation + save solution as valueA + display solution + save new operator
// EventListeners on btns

const btnAdd = document.querySelector("#add");
const btnSubstract = document.querySelector("#substract");
const btnMultiply = document.querySelector("#multiply");
const btnDivide = document.querySelector("#divide");
const btnOperators = [btnAdd, btnSubstract, btnMultiply, btnDivide];

for (let i = 0; i < btnOperators.length; i++) {
    btnOperators[i].addEventListener("click", () => {
        console.log(btnOperators[i].id);
        if (valueA) {
            storeValueB();
            valueA = operate(operator,valueA,valueB);
        }
        else {
            storeValueA();
            displayValue = "";
        }
        storeOperator(btnOperators[i].id);
        btnAdd.classList.add("active")
    });
}

// press enter: if valueA & operator are stored: store display as valueB +
// execute operation + store solution as value A + display solution



btnEnter.addEventListener("click", () => {
    console.log("ENTER");
    if (valueA) {
        storeValueB();
        displayValue = operate(operator,valueA,valueB);
    }
});

btnClear.addEventListener("click",  () => {reset()});


function storeValueA() {
    if (displayValue) valueA = Number(displayValue);
}

function storeValueB() {
    if (displayValue) valueB = Number(displayValue);
}

function storeOperator(btn) {
    operator = btn;
}

function displaySolution(solution) {
    display.textContent = solution;
    displayValue = "";
}

function reset() {
    displayValue = "";
    display.textContent = 0;
    valueA = "";
    valueB = "";
    operator = "";
}

const operations = {
    add: function (a,b) {
        return a+b
    },

    substract: function(a,b) {
        return a-b
    },

    multiply: function(a,b) {
        return a*b
    },

    divide: function(a,b) {
        return a/b
    }
}

function operate(operator,a,b) {
    const solution = Number(operations[operator](a,b));
    reset();
    displaySolution(solution);
    return solution
}