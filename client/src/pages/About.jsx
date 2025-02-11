import { motion } from "framer-motion";
import { Sparkles, ShoppingCart, Gift, Smile, Users, Shield, CheckCircle, Heart, Award, Globe, Truck, Clock, Star, Leaf, Coffee, Package,ArrowRight,Target } from "lucide-react";
import { useEffect, useRef } from "react";
export default function AboutUs() {
    return (
        <section className="relative w-full bg-gradient-to-r from-[#F9F4EF] to-[#E3F2FD]">
            {/* Hero Section */}
            <div className="relative w-full h-[70vh] flex items-center justify-center px-6 lg:px-20 bg-gradient-to-r from-[#F9F4EF] to-[#E3F2FD] overflow-hidden">
            {/* Background Animation */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#F9F4EF] to-[#E3F2FD] opacity-50"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
            />

            {/* Floating Icons */}
            <motion.div
                className="absolute top-20 left-20 bg-white p-3 rounded-full shadow-lg"
                animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
            >
                <Gift size={32} className="text-[#d87a38]" />
            </motion.div>
            <motion.div
                className="absolute bottom-10 left-1/3 bg-white p-3 rounded-full shadow-lg"
                animate={{ y: [0, 20, 0], rotate: [0, -10, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
            >
                <Coffee size={32} className="text-[#3e5840]" />
            </motion.div>
            <motion.div
                className="absolute top-1/4 right-20 bg-white p-3 rounded-full shadow-lg"
                animate={{ y: [0, -15, 0], rotate: [0, 15, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, repeatType: "mirror" }}
            >
                <ShoppingCart size={32} className="text-[#004e92]" />
            </motion.div>

            {/* Content */}
            <div className="max-w-7xl mx-auto text-center relative z-10">
                <motion.h1
                    className="text-6xl lg:text-8xl font-extrabold text-gray-800 bg-clip-text  bg-gradient-to-r from-[#d87a38] to-[#3e5840]"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Welcome to <span className="text-[#d87a38]">PlayPlates</span>
                </motion.h1>
                <motion.p
                    className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    Your one-stop destination for premium <strong>toys</strong> and <strong>crockery</strong> that bring joy to every home. We craft elegance and fun in every product we offer.
                </motion.p>
                <motion.div
                    className="mt-8"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <button className="group bg-gradient-to-r from-[#d87a38] to-[#c56a2e] text-black px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                        <span className="relative z-10 flex items-center gap-2">
                            Explore Our Collection
                            <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-2" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#c56a2e] to-[#d87a38] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                </motion.div>
            </div>

            {/* Sparkles Animation */}
            <motion.div
                className="absolute top-10 left-10 bg-white p-3 rounded-full shadow-lg"
                animate={{ rotate: [0, 20, -20, 0], scale: [1, 1.1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 3 }}
            >
                <Sparkles size={32} className="text-yellow-500" />
            </motion.div>
            <motion.div
                className="absolute bottom-20 right-10 bg-white p-3 rounded-full shadow-lg"
                animate={{ rotate: [0, -20, 20, 0], scale: [1, 1.1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 3, delay: 1 }}
            >
                <Sparkles size={32} className="text-yellow-500" />
            </motion.div>
        </div>
            {/* About Us Content */}
            <div className="relative w-full py-20 px-6 lg:px-20 bg-gradient-to-r from-[#F9F4EF] to-[#E3F2FD]">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    {/* Text Content */}
                    <div className="space-y-8">
                        <motion.h2
                            className="text-5xl font-extrabold text-gray-800"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            About <span className="text-[#d87a38]">PlayPlates</span>
                        </motion.h2>
                        <motion.p
                            className="text-xl text-gray-600"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                        >
                            At PlayPlates, we believe in creating products that bring joy, elegance, and functionality to your everyday life. Our toys and crockery are designed with love, care, and attention to detail.
                        </motion.p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { icon: ShoppingCart, title: "Quality Products", description: "Crafted with precision and care.", color: "text-[#d87a38]" },
                                { icon: Gift, title: "Perfect Gifts", description: "Ideal for every occasion.", color: "text-[#3e5840]" },
                                { icon: Shield, title: "Secure Shopping", description: "Safe and reliable transactions.", color: "text-[#004e92]" },
                                { icon: Users, title: "Happy Customers", description: "Thousands of satisfied families.", color: "text-[#d87a38]" },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: index * 0.2 }}
                                >
                                    <div className="flex items-center space-x-4">
                                        <item.icon size={32} className={item.color} />
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
                                            <p className="text-gray-600">{item.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Image */}
                    <motion.div
                        className="relative flex justify-center lg:justify-end"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <img
                            src="https://img.freepik.com/free-photo/blurred-kid-playing-with-toys_23-2148551439.jpg"
                            alt="PlayPlates Products"
                            className="w-full max-w-[600px] rounded-xl shadow-2xl hover:scale-105 transition-all duration-500"
                        />
                        {/* Floating Icons */}
                        <motion.div
                            className="absolute -top-8 -left-8 bg-white p-4 rounded-full shadow-lg"
                            animate={{ y: [0, -10, 0], rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
                        >
                            <ShoppingCart size={32} className="text-[#d87a38]" />
                        </motion.div>
                        <motion.div
                            className="absolute -bottom-8 -right-8 bg-white p-4 rounded-full shadow-lg"
                            animate={{ y: [0, 10, 0], rotate: [0, -10, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
                        >
                            <Gift size={32} className="text-[#3e5840]" />
                        </motion.div>
                    </motion.div>
                </motion.div>
           
      

                    {/* Mission & Vision */}
                    <div className="relative w-full py-20 px-6 lg:px-20 bg-gradient-to-r from-[#F9F4EF] to-[#E3F2FD] overflow-hidden">
            {/* Background Animation */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#F9F4EF] to-[#E3F2FD] opacity-50"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
            />

            {/* Floating Icons */}
            <motion.div
                className="absolute top-20 left-20 bg-white p-3 rounded-full shadow-lg"
                animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
            >
                <Heart size={32} className="text-[#d87a38]" />
            </motion.div>
            <motion.div
                className="absolute bottom-10 right-20 bg-white p-3 rounded-full shadow-lg"
                animate={{ y: [0, 20, 0], rotate: [0, -10, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
            >
                <Globe size={32} className="text-[#3e5840]" />
            </motion.div>

            {/* Content */}
            <div className="max-w-7xl mx-auto text-center relative z-10">
                <motion.h3
                    className="text-5xl font-extrabold text-gray-800 bg-clip-text  bg-gradient-to-r from-[#d87a38] to-[#3e5840]"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Our Mission & Vision
                </motion.h3>
                <motion.p
                    className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    At PlayPlates, we aim to bring happiness to homes through carefully crafted toys and elegant crockery that enhance your daily life. Our vision is to be the most trusted brand for families worldwide.
                </motion.p>

                {/* Mission & Vision Cards */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <div className="flex justify-center">
                            <Target size={48} className="text-[#d87a38]" />
                        </div>
                        <h4 className="text-2xl font-bold text-gray-800 mt-6">Our Mission</h4>
                        <p className="text-lg text-gray-600 mt-4">
                            To create products that bring joy, elegance, and functionality to every home, ensuring every family enjoys quality time together.
                        </p>
                    </motion.div>
                    <motion.div
                        className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        <div className="flex justify-center">
                            <Globe size={48} className="text-[#3e5840]" />
                        </div>
                        <h4 className="text-2xl font-bold text-gray-800 mt-6">Our Vision</h4>
                        <p className="text-lg text-gray-600 mt-4">
                            To be the most trusted brand for families worldwide, known for our commitment to quality, innovation, and customer satisfaction.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Sparkles Animation */}
            <motion.div
                className="absolute top-10 right-10 bg-white p-3 rounded-full shadow-lg"
                animate={{ rotate: [0, 20, -20, 0], scale: [1, 1.1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 3 }}
            >
                <Sparkles size={32} className="text-yellow-500" />
            </motion.div>
        </div>

                    {/* Why Choose Us? */}
                    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        {[
                            { icon: CheckCircle, title: "Premium Quality", description: "Every product is tested for durability and elegance.", color: "text-green-500" },
                            { icon: Smile, title: "Customer Satisfaction", description: "We prioritize our customers' happiness above all.", color: "text-yellow-500" },
                            { icon: Shield, title: "Trusted by Many", description: "Thousands of happy customers trust PlayPlates.", color: "text-blue-500" },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: index * 0.2 }}
                            >
                                <item.icon size={40} className={`mx-auto ${item.color}`} />
                                <h4 className="text-xl font-semibold mt-4">{item.title}</h4>
                                <p className="text-gray-600 mt-2">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Additional Features */}
                    <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Heart, title: "Made with Love", description: "Every product is crafted with care and passion.", color: "text-red-500" },
                            { icon: Award, title: "Award-Winning", description: "Recognized for excellence in design and quality.", color: "text-purple-500" },
                            { icon: Globe, title: "Global Reach", description: "Serving customers worldwide with fast shipping.", color: "text-green-500" },
                            { icon: Truck, title: "Fast Delivery", description: "Get your orders delivered quickly and safely.", color: "text-blue-500" },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: index * 0.2 }}
                            >
                                <item.icon size={40} className={`mx-auto ${item.color}`} />
                                <h4 className="text-xl font-semibold mt-4">{item.title}</h4>
                                <p className="text-gray-600 mt-2">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="relative w-full py-20 px-6 lg:px-20 bg-gradient-to-r from-[#F9F4EF] to-[#E3F2FD]">
                <div className="max-w-7xl mx-auto text-center">
                    <h3 className="text-4xl font-bold text-gray-800">What Our Customers Say</h3>
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { name: "John Doe", comment: "The quality of the products is exceptional. Highly recommend!", image: "/images/customer1.jpg" },
                            { name: "Jane Smith", comment: "Perfect gifts for my kids. They absolutely love them!", image: "/images/customer2.jpg" },
                            { name: "Mike Johnson", comment: "Fast delivery and excellent customer service. Will shop again!", image: "/images/customer3.jpg" },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: index * 0.2 }}
                            >
                                <p className="text-gray-600 italic">"{item.comment}"</p>
                                <div className="mt-4 flex items-center justify-center">
                                    <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full" />
                                    <span className="ml-3 font-semibold text-gray-800">{item.name}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}