var getData = function (x, y) {
  //-----

  return;
}; // it is not a callback

getData();

function f1(getProducts) {
  //-------
  getProducts();
}

f1(function () {
  // callback function
  //-----
});

f1(function add() {
  //callback
}); //not recommended
