// ***Get Add Money Button ***   step: 1
// ***Get input field where given the amount***  step: 2
// ***Get card main balance***  step: 3
// *** update balance into card main balance***  step: 4
// ***clear input field***  step: 5

// ______________________________ ---Card-1--- _______________________________________

// ***Get Add Money Button ***
document.getElementById("add-money-btn").addEventListener("click", function () {
  // Time set
  const time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

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

  //   ___________________________________________________________________________________________________________________
  // _________________________________________Congratulation message_________________________________________
  //
  if (newBalance > 0) {
    document.getElementById(
      "modal-container"
    ).innerHTML = `  <div class="h-[120vh] w-[100%] bg-[#bbe8348b] fixed flex items-center justify-center">
      <div class="h-[300px] w-[400px] justify-center flex rounded-xl bg-black border border-gray-400">
          <div class="flex flex-col items-center justify-center">
              <h1 class="text-2xl font-bold text-yellow-400">Congratulations!</h1>
              <h3 class="mt-6 font-semibold text-gray-300 text-md">You have donated   <span class= "text-red-500 text-lg font-semibold">${addMoneyNumber}৳ </span>  for humanity</h3>
              <h2 class= "text-xl font-semibold text-yellow-400">${time} </h2>
              
              <h2 class="text-lg font-bold text-green-600">Successfully</h2>
              <!-- button -->
              <a href = './index.html' class="px-8 py-2 mt-10 text-base font-semibold text-white bg-green-500 rounded cursor-pointer hover:bg-pink-500">Go Back</a>
          </div>
      </div>
  </div>`;
    //
  }
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
