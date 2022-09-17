"use strict";
const billInput = document.querySelector(".bill-input");
const cashInput = document.querySelector(".cash-input");
const button = document.querySelector(".button");
const message = document.querySelector(".message");
const notes = document.querySelectorAll(".no-of-notes");

const arrayOfNotes = [2000, 500, 200, 100, 50, 10, 5, 2, 1];
// const arrayOfNotesReturned = [];

const showMessage = function (msg) {
  message.textContent = msg;
};

const hideMessage = function () {
  message.textContent = "";
};
hideMessage();

const calculateChange = function (change) {
  for (let i = 0; i < arrayOfNotes.length; i++) {
    const notesToBeReturned = Math.trunc(change / arrayOfNotes[i]);

    notes[i].innerText = notesToBeReturned;
    change = change - arrayOfNotes[i] * notesToBeReturned;
  }
};

button.addEventListener("click", function displayResults() {
  showMessage("");
  const bill = Number(billInput.value);
  const cash = Number(cashInput.value);
  let change = cash - bill;

  if (bill > 0 && cash > 0) {
    if (bill > cash) {
      showMessage(`"Do you want to wash some plates😂"`);
      calculateChange(0);
    } else if (cash > bill) {
      calculateChange(change);
    }
  } else {
    showMessage(`Please enter valid amount❌`);
  }
});
