import React from 'react'
import { Heart, ShoppingCart} from "lucide-react";

function HomeCrockery() {
  return (
    <div>
         <section className="py-16 bg-gray-100 pt-40">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-[#3e5840]">Crockery Exclusive</h2>
                    <p className="text-gray-600 mt-3">Discover our premium collection of crockery for an elegant dining experience.</p>

                    {/* Grid Layout */}
                    <div className="p-4  mx-auto max-w-[1400px] pt-8">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                            {/* Product 1 */}
                            <div className="group overflow-hidden cursor-pointer relative">
                                <div className="bg-gray-100 w-full overflow-hidden">
                                    <img src="images/crockery1.jpg" alt="Elegant Porcelain Dinner Set"
                                        className="aspect-[3/4] w-full object-cover object-top hover:scale-105 transition-all duration-700" />
                                </div>
                                <div className="p-4 relative">
                                    <div className="flex flex-wrap justify-between gap-2 w-full absolute px-4 pt-3 z-10 transition-all duration-500
            left-0 right-0 group-hover:bottom-20 lg:bottom-5 lg:opacity-0 lg:bg-white lg:group-hover:opacity-100
            max-lg:bottom-20 max-lg:py-3 max-lg:bg-white/60">
                                        <button type="button" title="Add to wishlist" className="bg-transparent outline-none border-none lg:pb-2">
                                            <Heart className="w-5 h-5 text-gray-800" />
                                        </button>
                                        <button type="button" title="Add to cart" className="bg-transparent outline-none border-none lg:pb-2">
                                            <ShoppingCart className="w-5 h-5 text-gray-800" />
                                        </button>
                                    </div>
                                    <div className="z-20 relative">
                                        <h6 className="text-sm font-semibold text-gray-800 truncate">Elegant Porcelain Dinner Set</h6>
                                        <h6 className="text-sm text-gray-600 mt-2">$120.00</h6>
                                    </div>
                                </div>
                            </div>

                            {/* Product 2 */}
                            <div className="group overflow-hidden cursor-pointer relative">
                                <div className="bg-gray-100 w-full overflow-hidden">
                                    <img src="images/crockery2.jpg" alt="Luxury Glass Serving Bowls"
                                        className="aspect-[3/4] w-full object-cover object-top hover:scale-105 transition-all duration-700" />
                                </div>
                                <div className="p-4 relative">
                                    <div className="flex flex-wrap justify-between gap-2 w-full absolute px-4 pt-3 z-10 transition-all duration-500
            left-0 right-0 group-hover:bottom-20 lg:bottom-5 lg:opacity-0 lg:bg-white lg:group-hover:opacity-100
            max-lg:bottom-20 max-lg:py-3 max-lg:bg-white/60">
                                        <button type="button" title="Add to wishlist" className="bg-transparent outline-none border-none lg:pb-2">
                                            <Heart className="w-5 h-5 text-gray-800" />
                                        </button>
                                        <button type="button" title="Add to cart" className="bg-transparent outline-none border-none lg:pb-2">
                                            <ShoppingCart className="w-5 h-5 text-gray-800" />
                                        </button>
                                    </div>
                                    <div className="z-20 relative">
                                        <h6 className="text-sm font-semibold text-gray-800 truncate">Luxury Glass Serving Bowls</h6>
                                        <h6 className="text-sm text-gray-600 mt-2">$80.00</h6>
                                    </div>
                                </div>
                            </div>

                            {/* Product 3 */}
                            <div className="group overflow-hidden cursor-pointer relative">
                                <div className="bg-gray-100 w-full overflow-hidden">
                                    <img src="images/crockery3.jpg" alt="Handcrafted Ceramic Tea Cups"
                                        className="aspect-[3/4] w-full object-cover object-top hover:scale-105 transition-all duration-700" />
                                </div>
                                <div className="p-4 relative">
                                    <div className="flex flex-wrap justify-between gap-2 w-full absolute px-4 pt-3 z-10 transition-all duration-500
            left-0 right-0 group-hover:bottom-20 lg:bottom-5 lg:opacity-0 lg:bg-white lg:group-hover:opacity-100
            max-lg:bottom-20 max-lg:py-3 max-lg:bg-white/60">
                                        <button type="button" title="Add to wishlist" className="bg-transparent outline-none border-none lg:pb-2">
                                            <Heart className="w-5 h-5 text-gray-800" />
                                        </button>
                                        <button type="button" title="Add to cart" className="bg-transparent outline-none border-none lg:pb-2">
                                            <ShoppingCart className="w-5 h-5 text-gray-800" />
                                        </button>
                                    </div>
                                    <div className="z-20 relative">
                                        <h6 className="text-sm font-semibold text-gray-800 truncate">Handcrafted Ceramic Tea Cups</h6>
                                        <h6 className="text-sm text-gray-600 mt-2">$45.00</h6>
                                    </div>
                                </div>
                            </div>

                            {/* Product 4 */}
                            <div className="group overflow-hidden cursor-pointer relative">
                                <div className="bg-gray-100 w-full overflow-hidden">
                                    <img src="images/crockery4.jpg" alt="Vintage Style Plates"
                                        className="aspect-[3/4] w-full object-cover object-top hover:scale-105 transition-all duration-700" />
                                </div>
                                <div className="p-4 relative">
                                    <div className="flex flex-wrap justify-between gap-2 w-full absolute px-4 pt-3 z-10 transition-all duration-500
            left-0 right-0 group-hover:bottom-20 lg:bottom-5 lg:opacity-0 lg:bg-white lg:group-hover:opacity-100
            max-lg:bottom-20 max-lg:py-3 max-lg:bg-white/60">
                                        <button type="button" title="Add to wishlist" className="bg-transparent outline-none border-none lg:pb-2">
                                            <Heart className="w-5 h-5 text-gray-800" />
                                        </button>
                                        <button type="button" title="Add to cart" className="bg-transparent outline-none border-none lg:pb-2">
                                            <ShoppingCart className="w-5 h-5 text-gray-800" />
                                        </button>
                                    </div>
                                    <div className="z-20 relative">
                                        <h6 className="text-sm font-semibold text-gray-800 truncate">Vintage Style Plates</h6>
                                        <h6 className="text-sm text-gray-600 mt-2">$60.00</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* View More Button */}
                    <div className="mt-8">
                        <button className="bg-[#262424] text-white px-6 py-3 rounded-full font-semibold shadow-md transition-all hover:scale-105">
                            View More
                        </button>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default HomeCrockery