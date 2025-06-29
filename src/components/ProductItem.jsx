import { useNavigate } from "react-router-dom";

export default function ProductItem ({product,onSmash,isInCart}){

    const navigate = useNavigate()


    return (
        <div onClick={()=>navigate(`/product/${product.id}`)}
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
                onClick={(e) => {e.stopPropagation() ;onSmash(product, isInCart)}}
                className={`mt-4 w-full py-2 rounded transition ${
                  isInCart ? "  bg-red-500" : "  bg-orange-500"
                } text-white`}
              >
                {isInCart ? "Remove from Cart" : "Add to Cart"}
              </button>
            </div>
    )
}