import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

function Home() {
  const { products, setCart, cart } = useContext(StoreContext);

  function handleCartAction(product, isInCart) {
    console.log(isInCart);
    if (!isInCart) {
      console.log(product.id);

      setCart((prev) => [...prev, { ...product, quantity: 1 }]);
    } else {
      const newCart = cart.filter((cartItem) => cartItem.id !== product.id);
      setCart(newCart);
    }
  }
  console.log(cart);

  return (
    <>
      <div className="p-4 grid grid-cols-3 gap-6">
        {products.map((product) => {
          const isInCart = cart.some((item) => item.id === product.id);

          return (
            <div
              key={product.id}
              className="border p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-40 object-contain mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">
                {product.title.slice(0, 23)}
              </h3>
              <p className="text-green-600 font-bold">${product.price}</p>
              <p className="text-sm text-gray-600 mt-2">
                {product.description.slice(0, 50)}
              </p>
              <button
                onClick={() => handleCartAction(product, isInCart)}
                className={`mt-4 w-full py-2 rounded transition ${
                  isInCart ? "  bg-red-500" : "  bg-orange-500"
                } text-white`}
              >
                {isInCart ? "Remove from Cart" : "Add to Cart"}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
