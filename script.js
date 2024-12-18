// input value to display
const myDiplay = document.getElementById('display');
function appendCharacter(value) {
    myDiplay.value += value;
}



// delete last value 
function deleteLast() {
    myDiplay.value = myDiplay.value.slice(0, -1);
}


// delete all value
function clearDisplay() {
    myDiplay.value = ''
}


// calculate now 
function calculateResult() {
    try {
        let str = myDiplay.value;
        const calculate = new Function(`return ${str}`);
        if (!calculate()) {
            myDiplay.value = 'Error! Tap on C';
            disableButtons();
        }
        else {
            myDiplay.value = calculate();
        }
    }
    catch (err) {
        myDiplay.value = 'Error! Tap on C';
        disableButtons()
    }
}


function disableButtons() {
    const buttons = document.getElementsByClassName('butt');
    const convertToArray = Array.from(buttons);

    convertToArray.forEach(button => {
        button.setAttribute('disabled', 'true');
    });
}

function enableButt() {
    const buttons = document.getElementsByClassName('butt');
    const convertToArray = Array.from(buttons);

    convertToArray.forEach(button => {
        button.removeAttribute('disabled', 'true');
    });
}






const myNewFunction = new Function(`return ${'2+5'}`);
console.log(myNewFunction());