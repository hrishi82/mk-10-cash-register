const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");


const availableNotes = [2000, 500, 100, 50, 10, 5, 1];


checkButton.addEventListener("click", function validate() {
    
    hidemessage(); //So that we don't always need to refresh page to enter a new amount

    if (billAmount.value > 0) {
        if (cashGiven.value >= billAmount.value) {
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        }
        else{
            showMessage("Insufficient cash provided")
        }
    }
    
    else{
        showMessage("Bill amount should be greater than 0")
    }
})

function calculateChange(amountToBeReturned){
    for (let i = 0; i < availableNotes.length; i++){
        const numberOfNotes = Math.trunc(
            amountToBeReturned/availableNotes[i]
            );
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function hidemessage(){
    message.style.display = "none";
}

function showMessage(msg){
    message.style.display = "block";
    message.innerText = msg;    
}



