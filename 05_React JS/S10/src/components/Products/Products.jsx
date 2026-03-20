import { useState } from "react";
import "./Products.css";
import { getProducts } from "./productsService";
function Products() {
  const [state, setState] = useState(null);
  return (
    <div className="products">
      <h1>Products Information</h1>
      <button
        onClick={() => {
          getProducts(setState);
        }}
      >
        Get Products
      </button>
    </div>
  );
}

export default Products;
