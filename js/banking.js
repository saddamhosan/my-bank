const depositBtn = document.getElementById("deposit-btn");
depositBtn.addEventListener("click", function () {
  const depositField = document.getElementById("deposit-field");
  const depositAmount = parseFloat(depositField.value);
  const depositBox = document.getElementById("deposit");
  const deposit = parseFloat(depositBox.innerText);
  depositBox.innerText = deposit + depositAmount;
  depositField.value = "";
  const balanceBox = document.getElementById("balance");
  const balance = parseFloat(balanceBox.innerText);
  balanceBox.innerText = balance + depositAmount;
  Swal.fire({
    icon: "success",
    title: "Deposit successful!",
    showConfirmButton: false,
    timer: 1500,
  });
});
const withdrawBtn = document.getElementById("withdraw-btn");
withdrawBtn.addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");
  const withdrawAmount = parseFloat(withdrawField.value);
  const withdrawBox = document.getElementById("withdraw");
  const withdraw = parseFloat(withdrawBox.innerText);
  withdrawBox.innerText = withdraw + withdrawAmount;
  withdrawField.value = "";
  const balanceBox = document.getElementById("balance");
  const balance = parseFloat(balanceBox.innerText);
  balanceBox.innerText = balance - withdrawAmount;
  Swal.fire({
    icon: "success",
    title: "Withdraw successful!",
    showConfirmButton: false,
    timer: 1500,
  });
});
