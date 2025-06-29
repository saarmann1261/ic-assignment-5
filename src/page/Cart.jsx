import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

function Cart() {
  const { cart, setCart } = useContext(StoreContext);

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  function updateQuantity(id, action) {
    const item = cart.find((cartItem) => cartItem.id === id);
    if (!item) return;

    const newQuantity = item.quantity + action;

    if (newQuantity <= 0) {
      const newCart = cart.filter((cartItem) => cartItem.id !== id);
      setCart(newCart);
    } else {
      const newCart = cart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, quantity: newQuantity }
          : cartItem
      );
      setCart(newCart);
    }
  }

  function removeItem(id) {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>

      {cart.length === 0 ? (
        <div className="text-xl text-red-600 font-semibold">
          No items in the cart.
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row gap-4 p-4 border rounded-2xl shadow-sm hover:shadow-md transition"
              >
                {/* Product Image */}
                <div className="w-full sm:w-36 h-36 flex-shrink-0 bg-gray-100 rounded-xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mt-1">
                    ${item.price.toFixed(2)} x {item.quantity}
                  </p>
                  <p className="text-gray-800 font-bold mt-1">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>

                {/* Quantity & Remove */}
                <div className="flex items-center justify-start sm:justify-end gap-4">
                  <div className="flex items-center border px-2 py-1 rounded-md">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="px-2 text-lg font-bold"
                    >
                      -
                    </button>
                    <span className="px-2">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="px-2 text-lg font-bold"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-600 text-sm underline hover:text-red-800 transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Box */}
          <div className="h-fit bg-gray-50 p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
            <p className="text-gray-700">
              Items:{" "}
              <span className="font-medium">
                {cart.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            </p>
            <p className="text-gray-700 mt-2">
              Total: <span className="font-bold">${totalPrice.toFixed(2)}</span>
            </p>
            <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
