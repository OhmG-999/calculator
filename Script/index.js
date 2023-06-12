// Declare each key from the keypad as a variable
let buffer= "0";
let computeSymbol;
let previousBuffer = 0;
let result = 0;
let previousComputeSymbol;

function buttonClick(keyStroke){
    
    if (isKeyANumber(keyStroke) === true){
        buffer = updateBuffer(buffer, keyStroke);
        displayResult(buffer);
    } else if (isFunctionKey(keyStroke) === true){
        buffer = updateBuffer(buffer, keyStroke);
        displayResult(buffer);
    } else if (isOperatorKey(keyStroke) === true && previousBuffer === 0){
        //previousBuffer = parseInt(buffer);
        console.log("The buffer is " + buffer);
        previousComputeSymbol = keyStroke;
        previousBuffer = computeNumbers(previousBuffer, buffer, previousComputeSymbol);
        console.log("The previous buffer when it is equal to 0 is " + previousBuffer);
        displayResult(previousBuffer);
        buffer = '0';
    } else if (previousBuffer > 0 && isOperatorKey(keyStroke) === true){
        console.log("we are in the last block of code")
        previousBuffer= computeNumbers(previousBuffer, buffer, previousComputeSymbol);
        displayResult(previousBuffer);
        previousComputeSymbol = keyStroke;
        buffer = '0';
    } else if (previousBuffer > 0 && keyStroke === "="){
        previousBuffer= computeNumbers(previousBuffer, buffer, previousComputeSymbol);
        displayResult(previousBuffer);
        previousBuffer = 0;
    }

    //console.log("previousBuffer = " + previousBuffer);
    //console.log("previous compute symbol " + previousComputeSymbol)

    //displayResult(buffer);
}

function init(){
    document.querySelector('.key')
        .addEventListener("click", function(event){
            buttonClick(event.target.innerText)
        });
}

// Helper functions
function isBufferEqualZero(bufferState){
    if (bufferState === "0"){
        return true;
    }
    else {
        return false;
    }
}

function isFunctionKey(keyEvent){
    if(keyEvent === "←" || keyEvent === "C"){
        return true;
    } 
    else {
        return false;
    }
}

function isOperatorKey(keyEvent){
    if(keyEvent === "÷" || keyEvent === "×" || keyEvent === "+" || keyEvent === "-"){
        return true;
    } else {
        return false;
    }
}


function displayResult(currentBuffer){
    let display = document.querySelector(".display-result");
    return display.innerHTML = currentBuffer;
}

function addANumber(number){
    let theNumber = theNumber + number;
    
    return theNumber
}

// Returns TRUE when the key stroken is a number, else FALSE
function isKeyANumber(keyEvent){
    number = parseInt(keyEvent)

    switch (number){
        case 9:
        case 8:
        case 7:
        case 6:
        case 5:
        case 4:
        case 3:
        case 2:
        case 1:
        case 0:
            return true;
        default:
            return false;
    }
}

function updateBuffer(buffer, keyEvent){

    let bufferIsZero = isBufferEqualZero(buffer);

    if (bufferIsZero === true) {
        buffer = keyEvent;
    } else if (keyEvent === "←"  && bufferIsZero === false){
        if (buffer.length > 1){
            buffer = buffer.slice(0,(buffer.length-1));
        }
        else{
            buffer = '0';
        }
    }
    else if (keyEvent === "C"  && bufferIsZero === false){
        buffer = '0';
    }
    else if(bufferIsZero === false){
            buffer = buffer + keyEvent;
    }
    return buffer;
}

function computeNumbers(previousBuffer, buffer, previousComputeSymbol){

    let intBuffer = parseInt(buffer);
    
    if (previousComputeSymbol === "÷"){
        previousBuffer = previousBuffer / intBuffer;
    } else if(previousComputeSymbol === "×"){
        previousBuffer = previousBuffer * intBuffer;
    } else if(previousComputeSymbol === "+"){
        previousBuffer = previousBuffer + intBuffer;
    } else if(previousComputeSymbol === "-"){
        previousBuffer = previousBuffer - intBuffer;
    } else if(previousComputeSymbol === "="){
        displayResult(previousBuffer);
    } else {
        displayResult(previousBuffer);
    }
    
    return previousBuffer;
}

init();