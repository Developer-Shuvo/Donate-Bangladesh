// ***Get Add Money Button ***   step: 1
// ***Get input field where given the amount***  step: 2
// ***Get card main balance***  step: 3
// *** update balance into card main balance***  step: 4
// ***clear input field***  step: 5

// ______________________________ ---Card-1--- _______________________________________

// ***Get Add Money Button ***
document.getElementById("add-money-btn").addEventListener("click", function () {
  // input field amount here
  const givenAmount = document.getElementById("input-amount").value;

  // Validate the input
  const addMoneyNumber = parseFloat(givenAmount);
  if (isNaN(addMoneyNumber) || addMoneyNumber <= 0) {
    alert("Please enter a valid, positive number.");
    return;
  }

  // card main balance
  const cardMainBalance = parseFloat(
    document.getElementById("card-main-balance").innerText
  );

  // Calculate new balance
  const newBalance = addMoneyNumber + cardMainBalance;

  // Update balance
  document.getElementById("card-main-balance").innerText = newBalance;

  // Clear input field
  document.getElementById("input-amount").value = "";
});

// ______________________________ ---Card-2--- _______________________________________
// ***Get Add Money Button ***
document
  .getElementById("add-money-btn2")
  .addEventListener("click", function () {
    // input field amount here
    const givenAmount = document.getElementById("input-amount2").value;

    // Validate the input
    const addMoneyNumber = parseFloat(givenAmount);
    if (isNaN(addMoneyNumber) || addMoneyNumber <= 0) {
      alert("Please enter a valid, positive number.");
      return;
    }

    // card main balance
    const cardMainBalance = parseFloat(
      document.getElementById("card-main-balance2").innerText
    );

    // Calculate new balance
    const newBalance = addMoneyNumber + cardMainBalance;

    // Update balance
    document.getElementById("card-main-balance2").innerText = newBalance;

    // Clear input field
    document.getElementById("input-amount2").value = "";
  });

// ______________________________ ---Card-3--- _______________________________________
// ***Get Add Money Button ***
document
  .getElementById("add-money-btn3")
  .addEventListener("click", function () {
    // input field amount here
    const givenAmount = document.getElementById("input-amount3").value;

    // Validate the input
    const addMoneyNumber = parseFloat(givenAmount);
    if (isNaN(addMoneyNumber) || addMoneyNumber <= 0) {
      alert("Please enter a valid, positive number.");
      return;
    }

    // card main balance
    const cardMainBalance = parseFloat(
      document.getElementById("card-main-balance3").innerText
    );

    // Calculate new balance
    const newBalance = addMoneyNumber + cardMainBalance;

    // Update balance
    document.getElementById("card-main-balance3").innerText = newBalance;

    // Clear input field
    document.getElementById("input-amount3").value = "";
  });
