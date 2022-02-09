const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", function () {
  const emailField = document.getElementById("email-field");
  const email = emailField.value;
  const passwordFild = document.getElementById("password-field");
  const password = passwordFild.value;
  if (email == "saddam@gmail.com" && password == "saddam") {
    window.location.href = "banking.html";
  } else {
    alert("please input right information");
  }
});
