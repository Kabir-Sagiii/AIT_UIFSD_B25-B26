var data = [
  {
    pName: "IPhone 16",
    price: 80000,
    rating: 4.3,
  },
  {
    pName: "IPhone 17",
    price: 90000,
    rating: 4.5,
  },
  {
    pName: "Samsung Galaxy ulta",
    price: 80000,
    rating: 4.7,
  },
  {
    pName: "Vivo F29",
    price: 40000,
    rating: 4.6,
  },
];

var filteredProducts = data.filter(function (product) {
  var status = product.rating >= 4.5;
  return status;
});

console.log(filteredProducts);
