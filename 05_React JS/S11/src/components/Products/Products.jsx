import { useState, useEffect } from "react";
import "./Products.css";
import { getProducts, data } from "./productsService";
function Products() {
  const [state, setState] = useState(null);

  useEffect(() => {
    getProducts(setState);
  }, []);
  return (
    <div>
      <section className="categories">
        {data.map((category) => {
          return (
            <div>
              <img src={category.image} width={70} height={70} alt="" />
              <h2>{category.name}</h2>
            </div>
          );
        })}
      </section>

      <div className="products">
        {state &&
          state.map((product) => {
            return (
              <div id="product-card" key={product.id}>
                <img src={product.image} width={"100%"} height={230} alt="" />
                <h2>{product.title.slice(0, 21)}</h2>
                <p>${product.price}</p>
                <p>{product.description.slice(0, 100)}</p>
                <button>Product Details</button>
              </div>
            );
          }, [])}
      </div>
    </div>
  );
}

export default Products;
