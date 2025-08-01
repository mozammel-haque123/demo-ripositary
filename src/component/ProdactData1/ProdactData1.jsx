import React from "react";
import { useLoaderData } from "react-router-dom";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";

const ProductData1 = () => {
  const products = useLoaderData();

  return (
    <div className="px-4">
      {products.length === 0 ? (
        <p>No products found for this category.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative flex border-x border-gray-100 p-4 rounded-lg bg-white overflow-hidden transition duration-300 hover:shadow-md"
            >
              {/* Product Image with hover overlay */}
              <div className="w-1/3 flex-shrink-0 relative group overflow-hidden rounded-lg">
                {/* White overlay appears on hover */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition duration-300 z-10"></div>

                {/* Actual product image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-32 object-contain relative z-0"
                />
              </div>

              {/* Product Details */}
              <div className="flex-1 pl-4 flex flex-col my-auto gap-2 relative z-10">
                {/* Favorite Icon */}
                <AiOutlineHeart className="absolute top-4 right-4 text-gray-400 hover:text-red-500 cursor-pointer" />

                {/* Rating Stars */}
                {product.rating && (
                  <div className="flex items-center mb-2">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <AiFillStar
                        key={idx}
                        className={`${
                          idx < Math.round(product.rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                )}

                {/* Product Name */}
                <h3 className="font-semibold mb-1">{product.name}</h3>

                {/* Price Section */}
                <div>
                  <p className="text-blue-600 font-bold mb-1">
                    ${product.price.toFixed(2)}
                  </p>
                  {product.oldPrice && (
                    <p className="text-gray-500 text-sm line-through">
                      ${product.oldPrice.toFixed(2)}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductData1;
