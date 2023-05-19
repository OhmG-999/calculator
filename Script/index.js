// capture the key clicked by the user
let keyPressed = document.querySelector(".grey-button");
let ninthButton = document.querySelector(".nine-button");

ninthButton.addEventListener("click", function(){
    console.log("Hello");
})

let display = document.querySelector(".display-result");

function displayResult(keyEvent){
    return display.innerHTML = keyEvent;
}

// determine if the value is either a number or an operational sign
// if it is a number, store it and keep appending numbers to it until an operation key has been clicked
// if it is an operational sign
// when the user press the equal sign, give back the result