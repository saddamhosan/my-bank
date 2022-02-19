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
function updateBalance(isIncrement, amount) {
  const balanceBox = document.getElementById("balance");
  const balance = parseFloat(balanceBox.innerText);
  if (isIncrement == true) {
    balanceBox.innerText = balance + amount;
    Swal.fire({
      icon: "success",
      title: "Deposit successful!",
      showConfirmButton: false,
      timer: 1500,
    });
  } else {
    balanceBox.innerText = balance - amount;
    Swal.fire({
      icon: "success",
      title: "Withdraw successful!",
      showConfirmButton: false,
      timer: 1500,
    });
  }
}

const depositBtn = document.getElementById("deposit-btn");
depositBtn.addEventListener("click", function () {
  const depositAmount = inputFieldValue("deposit-field");
  if (depositAmount > 0) {
    updateBox("deposit", depositAmount);
    updateBalance(true, depositAmount);
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
  const withdrawAmount = inputFieldValue("withdraw-field");
  if (withdrawAmount > 0) {
    const balanceBox = document.getElementById("balance");
    const balance = parseFloat(balanceBox.innerText);
    if (balance < withdrawAmount) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Insufficient balance!",
      });
    } else {
      updateBox("withdraw", withdrawAmount);
      updateBalance(false, withdrawAmount);
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
