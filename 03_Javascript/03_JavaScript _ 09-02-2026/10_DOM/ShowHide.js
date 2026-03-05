function showHidePassword() {
  var input = document.getElementById("password");
  var label = document.getElementById("title");
  if (input.type === "password") {
    input.type = "text";
    label.innerText = "Uncheck to Hide Password";
    input.placeholder = "username";
  } else {
    input.type = "password";
    label.innerText = "Check to Show Password";
    input.placeholder = "password";
  }
}
