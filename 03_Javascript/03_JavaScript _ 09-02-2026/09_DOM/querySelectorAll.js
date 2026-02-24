function getDomElement() {
  // var collection = document.querySelectorAll(".blue");

  var collection = document.getElementsByClassName("blue");

  var domElement = collection[0];

  domElement.style.backgroundColor = "black";
  domElement.style.padding = "20px";
  domElement.style.color = "white";

  var domElement = collection[1];

  domElement.style.backgroundColor = "green";
  domElement.style.padding = "20px";
  domElement.style.color = "white";

  var domElement = collection[2];

  domElement.style.backgroundColor = "red";
  domElement.style.padding = "20px";
  domElement.style.color = "white";
}
