import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import ProductItem from "../components/ProductItem";
import { Link } from "react-router-dom";

function Home() {
  const { products, cart,handleCartAction } = useContext(StoreContext);


  console.log(cart);

  return (
    <>
      <div className="p-4 grid grid-cols-3 gap-6">
        {products.map((product) => {
          const isInCart = cart.some((item) => item.id === product.id);

          return (
           
          
            <ProductItem key={product.id} onSmash={handleCartAction} isInCart={isInCart} product={product}/>
             
          );
        })}
      </div>
    </>
  );
}

export default Home;
