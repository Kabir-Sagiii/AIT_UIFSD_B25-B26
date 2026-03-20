import axios from "axios";

export function getProducts(setState) {
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      console.log(res);
      setState(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
}
