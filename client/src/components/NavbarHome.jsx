import { Link } from "react-router-dom";
import { Search, User, Heart, ShoppingCart, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NavbarHome() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [textColor, setTextColor] = useState("#184a45");

    useEffect(() => {
        const updateNavbarColor = () => {
            const slider = document.getElementById("slider-section");
            if (!slider) return;

            const bgColor = window.getComputedStyle(slider).backgroundColor;
            const [r, g, b] = bgColor.match(/\d+/g).map(Number);
            const brightness = (r * 0.299 + g * 0.587 + b * 0.114);

            setTextColor(brightness > 150 ? "#184a45" : "#e5ede9");
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
    className="fixed top-0 left-0 z-50 flex items-center justify-between w-full px-6 py-4 bg-transparent backdrop-blur-md"
    style={{ color: textColor }}
>

            {/* Logo */}
            <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-2xl font-bold cursor-pointer"
            >
                <Link to="/" style={{ color: "#d87a38" }}>
                    Play<span style={{ color: textColor }}>Plates</span>
                </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <ul className="hidden space-x-6 font-medium lg:flex">
                {["Home", "Toys", "Crockery", "Gift Sets", "Offers", "Contact"].map((item, index) => (
                    <motion.li
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="relative transition-all duration-300 cursor-pointer group"
                    >
                        <Link
                            to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                            style={{ color: textColor }}
                        >
                            {item}
                        </Link>
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
                    className="w-64 px-2 py-1 bg-transparent outline-none"
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
                        <Link to={index === 0 ? "/account" : index === 1 ? "/wishlist" : "/cart"}>
                            <Icon className="w-6 h-6 transition-all duration-300 cursor-pointer" style={{ color: textColor }} />
                        </Link>
                    </motion.div>
                ))}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <Menu
                        className="w-6 h-6 transition-all duration-300 cursor-pointer lg:hidden"
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
                            <Link to="/" className="text-2xl font-bold text-[#d87a38]">
                                PlayPlates
                            </Link>
                            <X
                                className="w-7 h-7 cursor-pointer text-[#6a4826] hover:text-[#d87a38] transition-all"
                                onClick={() => setMobileMenuOpen(false)}
                            />
                        </motion.div>

                        {/* Mobile Menu Items */}
                        {/* Mobile Menu Items */}
                        <motion.ul
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="flex flex-col items-center space-y-6 mt-10 text-lg font-medium bg-[#F9F4EF]"
                        >
                            {["Home", "Toys", "Crockery", "Gift Sets", "Offers", "Contact"].map((item, index) => (
                                <motion.li
                                    key={index}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="cursor-pointer transition-all duration-300 text-[#6a4826] hover:text-[#d87a38]"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <Link
                                        to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}
                                        className="block w-full text-center"
                                    >
                                        {item}
                                    </Link>
                                </motion.li>
                            ))}
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
