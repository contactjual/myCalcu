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
        myDiplay.value = eval(myDiplay.value);;
    }
    catch (err) {
        myDiplay.value = 'Error';
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

function enableButt () {
    const buttons = document.getElementsByClassName('butt');
    const convertToArray = Array.from(buttons);

    convertToArray.forEach(button => {
        button.removeAttribute('disabled', 'true');
    });
}