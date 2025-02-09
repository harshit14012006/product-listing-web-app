import {useNavigate} from 'react-router-dom'
import { Heart, ShoppingCart } from "lucide-react";
function HomeCrockery() {
    const products = [
        {
            id: 1,
            name: "Elegant Porcelain Dinner Set",
            price: "$120.00",
            image: "images/crockery1.jpg",
        },
        {
            id: 2,
            name: "Luxury Glass Serving Bowls",
            price: "$80.00",
            image: "images/crockery2.jpg",
        },
        {
            id: 3,
            name: "Handcrafted Ceramic Tea Cups",
            price: "$45.00",
            image: "images/crockery3.jpg",
        },
        {
            id: 4,
            name: "Vintage Style Plates",
            price: "$60.00",
            image: "images/crockery4.jpg",
        }
    ];
    const navigate = useNavigate();

    const handleProductClick = (product) => {
        navigate(`/product/${product.id}`, { state: product });
    };
    return (
        <div>
             <section className="py-16 pt-40 bg-[#EDE0D4]">
            <div className="px-6 mx-auto text-center max-w-7xl">
                {/* Section Title */}
                <h2 className="text-4xl font-bold text-[#3E5840]">
                    Crockery Exclusive
                </h2>
                <p className="mt-3 text-[#5A4231]">
                    Discover our premium collection of crockery for an elegant dining experience.
                </p>

                {/* Grid Layout */}
                <div className="p-4 mx-auto max-w-[1400px] pt-8">
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 sm:gap-6">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                onClick={() => handleProductClick(product)}
                                className="relative overflow-hidden cursor-pointer group"
                            >
                                {/* Image */}
                                <div className="w-full overflow-hidden bg-gray-100 rounded-lg">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="aspect-[3/4] w-full object-cover object-top hover:scale-105 transition-all duration-700"
                                    />
                                </div>

                                {/* Details */}
                                <div className="relative p-4">
                                    {/* Wishlist & Cart Icons */}
                                    <div className="absolute left-0 right-0 z-10 flex flex-wrap justify-between w-full gap-2 px-4 pt-3 transition-all duration-500 group-hover:bottom-20 lg:bottom-5 lg:opacity-0 lg:bg-white lg:group-hover:opacity-100 max-lg:bottom-20 max-lg:py-3 max-lg:bg-white/60">
                                        <button type="button" title="Add to wishlist" className="bg-transparent border-none outline-none lg:pb-2">
                                            <Heart className="w-5 h-5 text-[#5A4231]" />
                                        </button>
                                        <button type="button" title="Add to cart" className="bg-transparent border-none outline-none lg:pb-2">
                                            <ShoppingCart className="w-5 h-5 text-[#5A4231]" />
                                        </button>
                                    </div>

                                    {/* Product Name & Price */}
                                    <div className="relative z-20">
                                        <h6 className="text-sm font-semibold text-[#3E5840] truncate">{product.name}</h6>
                                        <h6 className="mt-2 text-sm text-[#5A4231]">{product.price}</h6>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* View More Button */}
                <div className="mt-8">
                    <button className="bg-[#262424] text-white px-6 py-3 rounded-full font-semibold shadow-md transition-all hover:bg-[#3E5840] hover:scale-105">
                        View More
                    </button>
                </div>
            </div>
        </section>
        </div>
    )
}

export default HomeCrockery