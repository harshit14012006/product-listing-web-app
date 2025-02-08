import { Search, User, Heart, ShoppingCart, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NavbarHome() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [textColor, setTextColor] = useState("#184a45"); // Default color

    useEffect(() => {
        const updateNavbarColor = () => {
            const slider = document.getElementById("slider-section");
            if (!slider) return;

            const bgColor = window.getComputedStyle(slider).backgroundColor;
            const [r, g, b] = bgColor.match(/\d+/g).map(Number);

            // Calculate brightness using luminance formula
            const brightness = (r * 0.299 + g * 0.587 + b * 0.114);

            if (brightness > 150) {
                setTextColor("#184a45"); // Dark teal for light backgrounds
            } else {
                setTextColor("#e5ede9"); // Light green for dark backgrounds
            }
        };

        updateNavbarColor();
        window.addEventListener("scroll", updateNavbarColor);
        return () => window.removeEventListener("scroll", updateNavbarColor);
    }, []);

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between backdrop-blur-md bg-transparent"
            style={{ color: textColor }} // Dynamic text color
        >
            {/* Left - Logo */}
            <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-2xl font-bold cursor-pointer"
                style={{ color: "#d87a38" }} // Logo always orange
            >
                Play<span style={{ color: textColor }}>Plates</span>
            </motion.div>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex space-x-6 font-medium">
                {["Home", "Toys", "Crockery", "Gift Sets", "Offers", "Contact"].map((item) => (
                    <motion.li
                        key={item}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="relative cursor-pointer transition-all duration-300 group"
                        style={{ color: textColor }}
                    >
                        {item}
                        <motion.span
                            className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#d87a38] transition-all duration-300 group-hover:w-full"
                        />
                    </motion.li>
                ))}
            </ul>

            {/* Search Bar */}
            <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="hidden md:flex items-center bg-white bg-opacity-20 px-4 py-2 rounded-lg border border-[#e4a672] shadow-md"
            >
                <input
                    type="text"
                    placeholder="Search toys or crockery..."
                    className="outline-none bg-transparent px-2 py-1 w-64"
                    style={{ color: textColor }}
                />
                <Search className="w-5 h-5 text-[#d87a38]" />
            </motion.div>

            {/* Icons & Mobile Menu Button */}
            <div className="flex space-x-4">
                {[User, Heart, ShoppingCart].map((Icon, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Icon className="w-6 h-6 cursor-pointer transition-all duration-300" style={{ color: textColor }} />
                    </motion.div>
                ))}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <Menu
                        className="w-6 h-6 lg:hidden cursor-pointer transition-all duration-300"
                        onClick={() => setMobileMenuOpen(true)}
                        style={{ color: textColor }}
                    />
                </motion.div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ x: "-100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: "-100%", opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="fixed top-0 left-0 w-full h-screen bg-[#F9F4EF] z-[9999] overflow-hidden"
                    >
                        {/* Close Button & Header */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                            className="flex justify-between items-center p-6 bg-[#F9F4EF] border-b border-[#e4a672]"
                        >
                            <div className="text-2xl font-bold text-[#d87a38]">PlayPlates</div>
                            <X
                                className="w-7 h-7 cursor-pointer text-[#6a4826] hover:text-[#d87a38] transition-all"
                                onClick={() => setMobileMenuOpen(false)}
                            />
                        </motion.div>

                        {/* Mobile Menu Items */}
                        <motion.ul
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="flex flex-col items-center space-y-6 mt-10 text-lg font-medium bg-[#F9F4EF]"
                        >
                            {["Home", "Toys", "Crockery", "Gift Sets", "Offers", "Contact"].map(
                                (item) => (
                                    <motion.li
                                        key={item}
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className="cursor-pointer transition-all duration-300 text-[#6a4826] hover:text-[#d87a38]"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item}
                                    </motion.li>
                                )
                            )}
                        </motion.ul>

                        {/* Mobile Search Bar */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                            className="flex items-center mt-10 mx-10 bg-white px-4 py-2 rounded-lg border border-[#e4a672]"
                        >
                            <input
                                type="text"
                                placeholder="Search toys or crockery..."
                                className="outline-none bg-transparent px-2 py-1 w-full text-[#6a4826]"
                            />
                            <Search className="w-5 h-5 text-[#d87a38]" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
