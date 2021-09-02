const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
const nextStepButton = document.querySelector("#btn-next-step");
const cashGivenLabel = document.querySelector(".cash-given-label");
const changeTable = document.querySelector(".change-table");

hiddenfnc()

const availableNotes = [2000, 500, 100, 50, 10, 5, 1];

nextStepButton.addEventListener('click', function shownextstep() {

    var billType = Number(billAmount.value);


    if (billAmount.value == billType && billType > 0) {
        checkButton.style.display = "block";
        cashGiven.style.display = "block";
        cashGivenLabel.style.display = "block";

    } else {
        showMessage("Invalid input provided. \n Please enter a number and its value should be greater than 0");
    }

})


checkButton.addEventListener("click", function validate() {

    hidemessage(); //So that we don't always need to refresh page to enter a new amount

    var cashType = Number(cashGiven.value);

    if (cashGiven.value == cashType && cashType > 0) {
        if (billAmount.value > 0) {
            if (cashGiven.value >= billAmount.value) {
                const amountToBeReturned = cashGiven.value - billAmount.value;
                calculateChange(amountToBeReturned);
                showMessage("The number of each notes that you need to return is displayed below")
            } else {
                showMessage("Insufficient cash provided")
            }
        } else {
            showMessage("Bill amount should be greater than 0");
        }

    } else {

        showMessage("Invalid input provided. \n Please enter a number and its value should be greater than 0");
    }






})

function calculateChange(amountToBeReturned) {
    for (let i = 0; i < availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(
            amountToBeReturned / availableNotes[i]
        );
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function hidemessage() {
    message.style.display = "none";
}

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}


function hiddenfnc() {
    checkButton.style.display = "none";
    cashGiven.style.display = "none";
    cashGivenLabel.style.display = "none";


}