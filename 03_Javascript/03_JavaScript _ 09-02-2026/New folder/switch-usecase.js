function login(role) {
  switch (role) {
    case "user":
      console.log("open user dashboard");
      break;
    case "owner":
      console.log("open owner dashboard");
      break;
    case "admin":
      console.log("open admin dashboard");
  }
}

login("owner");

function selectPaymentMode(mode) {
  switch (mode) {
    case "debit":
      console.log("debit card is used for payment");
      break;
    case "credit":
      console.log("credit card");
      break;
    case "upi":
      console.log("upi is used");
      break;
  }
}

selectPaymentMode("upi");
