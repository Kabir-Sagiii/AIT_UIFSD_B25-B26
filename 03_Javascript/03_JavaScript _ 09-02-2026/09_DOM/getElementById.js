function addToCart() {
  var card = document.getElementById("card");
  var h3 = document.getElementById("title");
  var btn = document.getElementById("btn");

  if (btn.style.backgroundColor === "green") {
    card.style.boxShadow = "0 0 10px red";
    h3.style.color = "Red";
    btn.style.backgroundColor = "red";
    btn.innerText = "Remove From Cart";
  } else {
    card.style.boxShadow = "0 0 10px green";
    h3.style.color = "green";
    btn.style.backgroundColor = "green";
    btn.innerText = "Add to Cart";
  }
}
