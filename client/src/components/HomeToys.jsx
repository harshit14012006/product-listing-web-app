import { useNavigate } from 'react-router-dom';
import { Heart, ShoppingCart } from "lucide-react";

function HomeToys() {
  const products = [
    {
      id: 1,
      name: "Interactive Talking Teddy Bear",
      price: "$35.00",
      image: "images/toy1.jpg",
    },
    {
      id: 2,
      name: "Remote Control Racing Car",
      price: "$50.00",
      image: "images/toy2.jpg",
    },
    {
      id: 3,
      name: "Educational Building Blocks Set",
      price: "$25.00",
      image: "images/toy3.jpg",
    },
    {
      id: 4,
      name: "Dinosaur Action Figure Set",
      price: "$40.00",
      image: "images/toy4.jpg",
    }
  ];
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: product });
  };

  return (
    <div>
      <section className="py-16 pt-16 bg-[#FFF3E0]"> {/* Soft peach background */}
        <div className="px-6 mx-auto text-center max-w-7xl">
          <h2 className="text-4xl font-bold text-[#FF6F00]">Exclusive Toy Collection</h2> {/* Vibrant orange heading */}
          <p className="mt-3 text-[#37474F]">
            Explore our fun and exciting range of toys designed to bring joy to kids of all ages!
          </p>

          {/* Grid Layout */}
          <div className="p-4 mx-auto max-w-[1400px] pt-8">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 sm:gap-6">
              {products.map((product) => (
                <div key={product.id} onClick={() => handleProductClick(product)}
                  className="relative overflow-hidden bg-white rounded-lg shadow-lg cursor-pointer group">
                  
                  <div className="w-full overflow-hidden bg-[#FFECB3] rounded-t-lg"> {/* Soft Yellow for image bg */}
                    <img src={product.image} alt={product.name}
                      className="aspect-[3/4] w-full object-cover object-top hover:scale-105 transition-all duration-700" />
                  </div>

                  <div className="relative p-4 bg-white rounded-b-lg">
                    <div className="absolute left-0 right-0 z-10 flex flex-wrap justify-between w-full gap-2 px-4 pt-3 transition-all duration-500 group-hover:bottom-20 lg:bottom-5 lg:opacity-0 lg:bg-white lg:group-hover:opacity-100 max-lg:bottom-20 max-lg:py-3 max-lg:bg-white/60">
                      <button type="button" title="Add to wishlist" className="bg-transparent border-none outline-none lg:pb-2">
                        <Heart className="w-5 h-5 text-[#FF9800]" /> {/* Orange Icon */}
                      </button>
                      <button type="button" title="Add to cart" className="bg-transparent border-none outline-none lg:pb-2">
                        <ShoppingCart className="w-5 h-5 text-[#FF9800]" /> {/* Orange Icon */}
                      </button>
                    </div>
                    <div className="relative z-20">
                      <h6 className="text-sm font-semibold text-[#37474F] truncate">{product.name}</h6> {/* Dark text */}
                      <h6 className="mt-2 text-sm text-[#D32F2F]">{product.price}</h6> {/* Red for price */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* View More Button */}
          <div className="mt-8">
            <button className="bg-[#FF6F00] text-white px-6 py-3 rounded-full font-semibold shadow-md transition-all hover:bg-[#F57C00] hover:scale-95">
              View More
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomeToys;
