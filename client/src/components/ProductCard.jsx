function ProductCard({ product }) {
  return (
    <div className="relative bg-white rounded-lg shadow-lg cursor-pointer group">
      {/* Image Section */}
      <div className="w-full h-72 overflow-hidden bg-[#E0C8B0] rounded-t-lg"> {/* Soft Sand Background */}
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="object-cover object-center w-full h-48 transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Details Section */}
      <div className="p-4 bg-white rounded-b-lg">
        <h2 className="text-lg font-semibold text-[#6B4226] truncate">{product.name}</h2> {/* Elegant Brown */}
        <p className="text-sm text-[#8D6E63] mt-1">{product.category}</p> {/* Soft Brown */}
        <p className="text-sm text-[#B88C65]">{product.material}</p> {/* Muted Gold */}

        {/* Price & Cart Button */}
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-[#6B4226]">${product.price.toFixed(2)}</span> {/* Elegant Brown */}
          <button
            className="bg-[#6B4226] text-white px-4 py-2 rounded-lg font-semibold shadow-md transition-all hover:bg-[#8D6E63] hover:scale-95"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
