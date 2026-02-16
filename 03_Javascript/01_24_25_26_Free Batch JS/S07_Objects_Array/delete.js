var product = {
  id: 101,
  productName: "Trimmer",
  price: 3550,
  rating: 4.3,
};

console.log(product);

delete product.id;
delete product.price;

console.log(product);
