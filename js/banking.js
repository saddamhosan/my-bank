function inputFieldValue(inputId) {
  const inputField = document.getElementById(inputId);
  const amount = parseFloat(inputField.value);
  inputField.value = "";

  return amount;
}
function updateBox(boxId, amount) {
  const box = document.getElementById(boxId);
  const dollar = parseFloat(box.innerText);
  box.innerText = dollar + amount;
}
function updateBalance(depositAmount) {
  const balanceBox = document.getElementById("balance");
  const balance = parseFloat(balanceBox.innerText);
  balanceBox.innerText = balance + depositAmount;
}

const depositBtn = document.getElementById("deposit-btn");
depositBtn.addEventListener("click", function () {
  // const depositField = document.getElementById("deposit-field");
  // const depositAmount = parseFloat(depositField.value);
  const depositAmount = inputFieldValue("deposit-field");
  // const depositBox = document.getElementById("deposit");
  // const deposit = parseFloat(depositBox.innerText);
  // depositBox.innerText = deposit + depositAmount;
  // depositField.value = "";
  if (depositAmount > 0) {
    updateBox("deposit", depositAmount);
    // const balanceBox = document.getElementById("balance");
    // const balance = parseFloat(balanceBox.innerText);
    // balanceBox.innerText = balance + depositAmount;
    updateBalance(depositAmount);
    Swal.fire({
      icon: "success",
      title: "Deposit successful!",
      showConfirmButton: false,
      timer: 1500,
    });
  } else {
    Swal.fire({
      title: "Error!",
      text: "please input the right value",
      icon: "error",
      confirmButtonText: "Cool",
    });
  }
});
const withdrawBtn = document.getElementById("withdraw-btn");
withdrawBtn.addEventListener("click", function () {
  // const withdrawField = document.getElementById("withdraw-field");
  // const withdrawAmount = parseFloat(withdrawField.value);
  const withdrawAmount = inputFieldValue("withdraw-field");
  // const withdrawBox = document.getElementById("withdraw");
  // const withdraw = parseFloat(withdrawBox.innerText);
  if (withdrawAmount > 0) {
    const balanceBox = document.getElementById("balance");

    const balance = parseFloat(balanceBox.innerText);
    if (balance < withdrawAmount) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Insufficient balance!",
      });
      // withdrawField.value = "";
    } else {
      // withdrawBox.innerText = withdraw + withdrawAmount;
      // withdrawField.value = "";
      updateBox("withdraw", withdrawAmount);
      balanceBox.innerText = balance - withdrawAmount;
      Swal.fire({
        icon: "success",
        title: "Withdraw successful!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  } else {
    Swal.fire({
      title: "Error!",
      text: "please input the right value",
      icon: "error",
      confirmButtonText: "Cool",
    });
  }
});
