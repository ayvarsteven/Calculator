// ==================== display ====================

const display = document.querySelector('#display')

let displayValue = 0;

let array = [undefined, undefined,]; 

function defineDisplayContent(operatorBtnSelect) {
    if(array[2] === sum) {
        operatorBtnSelect = '+'
    } else if(array[2] === subtract) {
        operatorBtnSelect = '-'
    } else if(array[2] === multiply) {
        operatorBtnSelect = 'x'
    } else if(array[2] === divide) {
        operatorBtnSelect = '÷'
    }
    if(array[0] === undefined && array[1] === undefined && array[2] === undefined) {
        display.textContent = ``
    };
    if(typeof array[0] === 'string') {
        display.textContent = `${array[0]}`
    }
    if(typeof array[0] === 'string' && typeof array[2] === 'function') {
        display.textContent = `${array[0]} ${operatorBtnSelect}`
    }
    if(typeof array[0] === 'string' && typeof array[2] === 'function' && typeof array[1] === 'string' && typeof array[3] === 'undefined') {
        display.textContent = `${array[0]} ${operatorBtnSelect} ${array[1]}`
    }
    if(typeof array[3] === 'number') {
        display.textContent = `${array[3]}`
    }
}

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

// ==================== operator-button-logic ====================

window.addEventListener('keydown', (e) => {
    let buttonPress = e.keyCode
    // === operator buttons
    if(buttonPress === 107) {
        if(array[3] === undefined) {
            array[2] = sum
            defineDisplayContent('sum');
        } else if(typeof array[3] === 'number') {
            array[2] = sum
            array[0] = array[3]
            array[3] = undefined
            defineDisplayContent('sum')
            console.log(array)
        }
    }
    if(buttonPress === 109) {
        if(array[3] === undefined) {
            array[2] = subtract
            defineDisplayContent('subtract');
        } else if(typeof array[3] === 'number') {
            array[2] = subtract
            array[0] = array[3]
            array[3] = undefined
            defineDisplayContent('subtract')
            console.log(array)
        }
    }
    if(buttonPress === 106) {
        if(array[3] === undefined) {
            array[2] = multiply
            defineDisplayContent('multiply');
        } else if(typeof array[3] === 'number') {
            array[2] = multiply
            array[0] = array[3]
            array[3] = undefined
            defineDisplayContent('multiply')
            console.log(array)
        }
    }
    if(buttonPress === 111) {
        if(array[3] === undefined) {
            array[2] = divide
            defineDisplayContent('divide');
        } else if(typeof array[3] === 'number') {
            array[2] = divide
            array[0] = array[3]
            array[3] = undefined
            defineDisplayContent('divide')
            console.log(array)
        }
    }
    if(buttonPress === 13) {
        array[0] = Number.parseInt(array[0])
        array[1] = Number.parseInt(array[1])
        let result = operate(...array)
        array[3] = result
        console.log(array[3])
        defineDisplayContent()
        console.log(array)
        array[0] = undefined
        array[1] = undefined
        array[2] = undefined
        console.log(array)
    }
    if(buttonPress === 27) {
        array = [undefined, undefined, undefined, undefined]
        defineDisplayContent()
    }

    // === number buttons
    if(buttonPress === 96) {
        setNumber(0)
        defineDisplayContent();
    }
    if(buttonPress === 97) {
        setNumber(1)
        defineDisplayContent();
    }
    if(buttonPress === 98) {
        setNumber(2)
        defineDisplayContent();
    }
    if(buttonPress === 99) {
        setNumber(3)
        defineDisplayContent();
    }
    if(buttonPress === 100) {
        setNumber(4)
        defineDisplayContent();
    }
    if(buttonPress === 101) {
        setNumber(5)
        defineDisplayContent();
    }
    if(buttonPress === 102) {
        setNumber(6)
        defineDisplayContent();
    }
    if(buttonPress === 103) {
        setNumber(7)
        defineDisplayContent();
    }
    if(buttonPress === 104) {
        setNumber(8)
        defineDisplayContent();
    }
    if(buttonPress === 105) {
        setNumber(9)
        defineDisplayContent();
    }
})

addBtn.addEventListener('click', () => {
    array[2] = sum
    defineDisplayContent()
})

subtractBtn.addEventListener('click', () => {
    array[2] = subtract
    defineDisplayContent()
})

multiplyBtn.addEventListener('click', () => {
    array[2] = multiply
    defineDisplayContent()
})

divideBtn.addEventListener('click', () => {
    array[2] = divide
    defineDisplayContent()
})

equalsBtn.addEventListener('click', () => {
    array[0] = Number.parseInt(array[0])
    array[1] = Number.parseInt(array[1])
    result = operate(...array)
    defineDisplayContent()
})

clearBtn.addEventListener('click', () => {
    array = [undefined, undefined, undefined, undefined]
    defineDisplayContent()
})


// ==================== number-button-logic ====================

function setNumber(num) {
    if(array[0] === undefined && array[2] === undefined) {
        array[0] = `${num}`
        defineDisplayContent()
    } else if (typeof array[0] === 'string' && array[2] === undefined) {
        array[0] += `${num}`
        defineDisplayContent()
    } 
    if (typeof array[2] === 'function' && array[1] === undefined) {
        array[1] = `${num}`
        defineDisplayContent()
    } else if (typeof array[1] === 'string') {
        array[1] += `${num}`
        defineDisplayContent()
    } 
    function recursion() {
        array[0] = array[3]
        array[3] = undefined
        console.log(array)
        defineDisplayContent()
    }
    if(typeof array[3] === 'number') {
        recursion()
    }
}

twoBtn.addEventListener('click', () => {
    setNumber(2)
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
