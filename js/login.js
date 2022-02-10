const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", async function () {
  const emailField = document.getElementById("email-field");
  const email = emailField.value;
  const passwordFild = document.getElementById("password-field");
  const password = passwordFild.value;
  if (email == "saddam" && password == "saddam") {
    await Swal.fire({
      icon: "success",
      title: "Login success full",
      showConfirmButton: false,
      timer: 1500,
    });
    window.location.href = "banking.html";
  } else {
    Swal.fire({
      title: "Error!",
      text: "please input right information",
      icon: "error",
      confirmButtonText: "Cool",
    });
  }
});
