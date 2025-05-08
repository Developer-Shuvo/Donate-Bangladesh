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
  // ____________________________________________________________________________________________________
  // Total main balance calculation
  const totalMainBalance = parseFloat(
    document.getElementById("total-main-balance").innerText
  );

  // Deduct the given amount from the total main balance
  const updatedTotalMainBalance = totalMainBalance - addMoneyNumber;

  // Check if the total main balance is sufficient
  if (updatedTotalMainBalance < 0) {
    document.getElementById("error-message").innerHTML = `
      <div class="h-[120vh] w-[100%] bg-[#9fabc68b] fixed flex items-center justify-center">
        <div class="h-[300px] w-[400px] justify-center flex rounded-xl bg-red-700 ">
          <div class="flex flex-col items-center justify-center">
            <h1 class="text-4xl text-blue-200 font-bold">Alert !</h1>
            <h2 class="text-xl font-semibold text-lime-300 mt-8">Insufficient balance in the main account</h2>
            <h2 class="text-xl font-semibold text-yellow-400">${time}</h2>
            <!-- button -->
            <a href='./index.html' class="px-8 py-2 mt-10 text-base font-semibold text-white bg-green-500 rounded cursor-pointer hover:bg-pink-500">Go Back</a>
          </div>
        </div>
      </div>`;
    return;
  }

  // Update the total main balance in the DOM
  document.getElementById("total-main-balance").innerText =
    updatedTotalMainBalance.toFixed(2);
  // ____________________________________________________________________________________________________

  // Validate the input
  const addMoneyNumber = parseFloat(givenAmount);
  if (isNaN(addMoneyNumber) || addMoneyNumber <= 0) {
    document.getElementById("error-message").innerHTML = `
      <div class="h-[120vh] w-[100%] bg-[#9fabc68b] fixed flex items-center justify-center">
        <div class="h-[300px] w-[400px] justify-center flex rounded-xl bg-red-700 ">
          <div class="flex flex-col items-center justify-center">
            <h1 class="text-4xl text-blue-200 font-bold">Alert !</h1>
            <h2 class="text-xl font-semibold text-lime-300 mt-8">Please enter a valid amount</h2>
            <h2 class="text-xl font-semibold text-yellow-400">${time}</h2>
            <!-- button -->
            <a href='./index.html' class="px-8 py-2 mt-10 text-base font-semibold text-white bg-green-500 rounded cursor-pointer hover:bg-pink-500">Go Back</a>
          </div>
        </div>
      </div>`;
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

//   ___________________________________________________________________________________________________________________
// _________________________________________Congratulation message_________________________________________
//
if (newBalance > 0) {
  document.getElementById(
    "congrats-message"
  ).innerHTML = ` <div id="congrats-overlay" class="h-[120vh] w-[100%] bg-[#bbe8348b] fixed flex items-center justify-center">
      <div class="h-[300px] w-[400px] justify-center flex rounded-xl bg-black">
          <div class="flex flex-col items-center justify-center">
              <h1 class="text-2xl font-bold text-sky-400">Congratulations!</h1>
              <h3 class="mt-6 font-semibold text-gray-300 text-md">You have donated   <span class= "text-lime-300 text-lg font-semibold">${addMoneyNumber}৳ </span>  for humanity</h3>
              <h2 class= "mt-4 text-xl font-semibold text-yellow-400">${time} </h2>
              
              <h2 class="text-lg uppercase font-bold text-green-600">Successfully</h2>
              <!-- button -->
              <button id="close-congrats" class="px-8 py-2 mt-10 text-base font-semibold text-white bg-green-500 rounded cursor-pointer hover:bg-pink-500">Close</button>
          </div>
      </div>
  </div>`;

  // Add event listener to close the congrats message
  document
    .getElementById("close-congrats")
    .addEventListener("click", function () {
      document.getElementById("congrats-overlay").remove();
    });
}

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
