import { useContext } from "react"
import { useParams } from "react-router-dom"
import { StoreContext } from "../context/StoreContext"

export default function SingleProduct (){
    const {id} = useParams()
    const {products,cart,handleCartAction} = useContext(StoreContext)

    const product = products.find((productItem)=> productItem.id ===  id)
      const isInCart = cart.some((item) => item.id === product.id);
    console.log(product)
    console.log(id)
     return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        {/* Product Image */}
        <div className="flex justify-center items-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-auto object-contain rounded-xl"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-between space-y-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{product.title}</h1>
            <p className="text-sm text-gray-500 capitalize">{product.category}</p>
            <div className="mt-2 text-yellow-500">
              {"★".repeat(Math.round(product.rating.rate)) +
                "☆".repeat(5 - Math.round(product.rating.rate))}
              <span className="ml-2 text-gray-600 text-sm">
                ({product.rating.count} reviews)
              </span>
            </div>
            <p className="mt-4 text-gray-700">{product.description}</p>
          </div>

          <div>
            <p className="text-2xl font-semibold text-blue-600">${product.price}</p>
            <button
                onClick={() =>  handleCartAction(product, isInCart)}
                className={`mt-4 w-full py-2 rounded transition ${
                  isInCart ? "  bg-red-500" : "  bg-orange-500"
                } text-white`}
              >
                {isInCart ? "Remove from Cart" : "Add to Cart"}
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}