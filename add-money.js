// ***Get Add Money Button ***   step: 1
// ***Get input field where given the amount***  step: 2
// ***Get card main balance***  step: 3
// *** update balance into card main balance***  step: 4
// ***clear input field***  step: 5

document.getElementById("add-money-btn").addEventListener("click", function () {
  // input field amount here
  const givenAmount = document.getElementById("input-amount").value;
  console.log(givenAmount);

  // card main balance
  const cardMainBalance =
    document.getElementById("card-main-balance").innerText;
  console.log(cardMainBalance);

  //  const addMoneyNumber = parseFloat(amount);
  const addMoneyNumber = parseFloat(givenAmount); // Added this line to parse the given amount
  const balanceNumber = parseFloat(cardMainBalance); // Changed 'balance' to 'cardMainBalance'
  const newBalance = addMoneyNumber + balanceNumber;
  console.log(newBalance);

  // update balance
  document.getElementById("card-main-balance").innerText = newBalance; // Changed 'car' to 'card-main-balance'

  // clear input field
  document.getElementById("input-amount").value = "";
});
