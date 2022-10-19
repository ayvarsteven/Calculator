// ==================== display ====================

const display = document.querySelector('#display')
display.textContent = 'displayValue:'

let displayValue = 0;

let array = [undefined, undefined, ]; 

// ==================== buttons ====================

const addBtn = document.querySelector('#add')
const subtractBtn = document.querySelector('#subtract')
const multiplyBtn = document.querySelector('#multiply')
const divideBtn = document.querySelector('#divide')
const equalsBtn = document.querySelector('#equals')
const clearBtn = document.querySelector('#clear')

const oneBtn = document.querySelector('#one')
const twoBtn = document.querySelector('#two')
const threeBtn = document.querySelector('#three')
const fourBtn = document.querySelector('#four')
const fiveBtn = document.querySelector('#five')
const sixBtn = document.querySelector('#six')
const sevenBtn = document.querySelector('#seven')
const eightBtn = document.querySelector('#eight')
const nineBtn = document.querySelector('#nine')

addBtn.addEventListener('click', () => {
    array[2] = sum
    display.textContent += '+'
    console.log(array)
})
subtractBtn.addEventListener('click', () => {
    array[2] = subtract
    display.textContent += '-'
    console.log(array)
})
multiplyBtn.addEventListener('click', () => {
    array[2] = multiply
    display.textContent += 'x'
    console.log(array)
})
divideBtn.addEventListener('click', () => {
    array[2] = divide
    display.textContent += '÷'
    console.log(array)
})
equalsBtn.addEventListener('click', () => {
    array[0] = Number.parseInt(array[0])
    array[1] = Number.parseInt(array[1])
    console.log(operate(...array))
    display.textContent = operate(...array)
})
clearBtn.addEventListener('click', () => {
    array = [undefined, undefined]
})

twoBtn.addEventListener('click', () => {
    if(array[0] === undefined && array[2] === undefined) {
        array[0] = '2'
        display.textContent = array[0]
    } else if (typeof array[0] === 'string' && array[2] === undefined) {
        array[0] += '2'
        display.textContent = array[0]
    } 
    if (typeof array[2] === 'function' && array[1] === undefined) {
        array[1] = '2'
        display.textContent += array[1]
    } else if (typeof array[1] === 'string') {
        array[1] += '2'
        // display.textContent += array[1]
    }



    console.log(array)
})


// ==================== basic functions ====================
function sum(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

// ==================== operator function ====================

function operate(a, b, operator) {
    return operator(a, b)
}

// ==================== title ====================
