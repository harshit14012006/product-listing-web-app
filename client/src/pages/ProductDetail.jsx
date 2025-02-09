import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import { Heart, Star, ShoppingCart } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Navbar from "../components/Navbar";

const ProductDetail = () => {
  const location = useLocation();
  const product = location.state;

  const [isInWishlist, setIsInWishlist] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Check if product is already in wishlist (using local storage for persistence)
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (savedWishlist.some((item) => item.id === product.id)) {
      setIsInWishlist(true);
    }
  }, [product]);

  const handleWishlistToggle = () => {
    setIsInWishlist((prev) => !prev);

    // Add/remove product from local storage wishlist
    let savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (isInWishlist) {
      savedWishlist = savedWishlist.filter((item) => item.id !== product.id);
    } else {
      savedWishlist.push(product);
    }
    localStorage.setItem("wishlist", JSON.stringify(savedWishlist));
  };

  const handleAddToCart = () => {
    setCart((prev) => [...prev, product]);

    // Add to local storage cart
    let savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    savedCart.push(product);
    localStorage.setItem("cart", JSON.stringify(savedCart));
  };

  if (!product) {
    return <p className="text-xl text-center text-gray-700">Product not found</p>;
  }

  return (
    <div>
      <Navbar />
      <div className="p-6 mx-auto mt-16 max-w-7xl lg:grid lg:grid-cols-2 lg:gap-16"> {/* Added mt-16 to account for navbar height */}
        {/* Left - Product Image Slider */}
        <div className="lg:col-span-1">
          {product.images && product.images.length > 0 ? (
            <>
              <Swiper
                modules={[Navigation, Thumbs]}
                navigation
                loop={true}
                className="overflow-hidden rounded-lg shadow-lg"
              >
                {product.images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={img}
                      alt={product.name}
                      className="w-full h-[450px] object-cover rounded-lg"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Thumbnails */}
              <div className="flex justify-center mt-4 space-x-4">
                <Swiper
                  modules={[Thumbs]}
                  slidesPerView={5}
                  spaceBetween={10}
                  watchSlidesProgress
                >
                  {product.images.map((img, index) => (
                    <SwiperSlide key={index} className="cursor-pointer">
                      <img
                        src={img}
                        alt="Thumbnail"
                        className="object-cover w-20 h-20 transition border-2 border-transparent rounded-md hover:border-indigo-500"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </>
          ) : (
            <p className="text-gray-500">No images available</p>
          )}
        </div>

        {/* Right - Product Details */}
        <div className="space-y-6 lg:col-span-1">
          <h2 className="text-3xl font-bold text-gray-900">{product.name || "No Name Available"}</h2>
          <p className="text-lg text-gray-600">{product.category || "No Category"}</p>

          {/* Pricing Section */}
          <div className="flex items-center space-x-4">
            <h5 className="text-3xl font-semibold text-gray-900">${product.price || "N/A"}</h5>
            <span className="px-3 py-1 text-lg text-indigo-600 rounded-full bg-indigo-50">30% Off</span>
          </div>

          {/* Color Options (Safely Check) */}
          {product.colors && product.colors.length > 0 ? (
            <div>
              <p className="text-lg font-medium text-gray-900">Color</p>
              <div className="grid grid-cols-3 gap-3">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    className="w-12 h-12 border-2 rounded-full hover:ring-4 focus:outline-none"
                    style={{ backgroundColor: color.hex }}
                  ></button>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-gray-500">No colors available</p>
          )}

          {/* Wishlist Icon */}
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={handleWishlistToggle}
              className={`text-3xl ${isInWishlist ? "text-red-600" : "text-gray-500"} transition-colors duration-300`}
            >
              <Heart />
            </button>
            <span className="text-sm text-gray-600">
              {isInWishlist ? "Added to Wishlist" : "Add to Wishlist"}
            </span>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="flex items-center justify-center w-full gap-3 px-6 py-3 font-medium text-white transition-all duration-300 bg-indigo-600 rounded-lg hover:bg-indigo-700 lg:w-auto"
          >
            <ShoppingCart size={20} />
            Add to Cart
          </button>

          {/* Rating Section */}
          <div className="flex items-center gap-2 text-yellow-400">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star, index) => (
                <Star key={index} size={20} />
              ))}
            </div>
            <span className="text-sm text-gray-600">(200 reviews)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
