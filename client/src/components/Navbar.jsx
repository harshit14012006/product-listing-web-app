import { Search, User, Heart, ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Toys", path: "/toys" },
        { name: "Crockery", path: "/crockery" },
        { name: "Gift Sets", path: "/gift-sets" },
        { name: "Offers", path: "/offers" },
        { name: "Contact", path: "/contact" }
    ];

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#fdf5e6] px-6 py-4 flex items-center justify-between border-b border-[#e4a672] shadow-lg rounded-b-xl"
        >
            {/* Left - Logo */}
            <Link to="/" className="text-2xl font-bold text-[#d87a38] cursor-pointer">
                Play<span className="text-[#6a4826]">Plates</span>
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex space-x-6 text-[#6a4826] font-medium">
                {navLinks.map((link) => (
                    <motion.li
                        key={link.name}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="relative cursor-pointer transition-all duration-300 hover:text-[#d87a38] group"
                    >
                        <Link to={link.path}>{link.name}</Link>
                        {/* Underline Effect */}
                        <motion.span
                            className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#d87a38] transition-all duration-300 group-hover:w-full"
                        />
                    </motion.li>
                ))}
            </ul>

            {/* Search Bar (Visible on Tablet & Desktop) */}
            <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="hidden md:flex items-center bg-white px-4 py-2 rounded-lg border border-[#e4a672] shadow-md"
            >
                <input
                    type="text"
                    placeholder="Search toys or crockery..."
                    className="outline-none bg-transparent px-2 py-1 text-[#6a4826] w-64"
                />
                <Search className="w-5 h-5 text-[#d87a38]" />
            </motion.div>

            {/* Icons & Mobile Menu Button */}
            <div className="flex space-x-4 text-[#6a4826]">
                {[User, Heart, ShoppingCart].map((Icon, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Icon className="w-6 h-6 cursor-pointer hover:text-[#d87a38] transition-all duration-300" />
                    </motion.div>
                ))}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <Menu
                        className="w-6 h-6 lg:hidden cursor-pointer hover:text-[#d87a38] transition-all duration-300"
                        onClick={() => setMobileMenuOpen(true)}
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
                        className="fixed top-0 left-0 w-full h-full bg-[#fdf5e6] z-50 shadow-lg rounded-b-xl"
                    >
                        {/* Close Button */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                            className="flex justify-between items-center p-6 border-b border-[#e4a672]"
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
                            className="flex flex-col items-center space-y-6 mt-10 text-[#6a4826] text-lg font-medium"
                        >
                            {navLinks.map((link) => (
                                <motion.li
                                    key={link.name}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="cursor-pointer hover:text-[#d87a38] transition-all duration-300"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <Link to={link.path}>{link.name}</Link>
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
                                className="outline-none bg-transparent px-2 py-1 text-[#6a4826] w-full"
                            />
                            <Search className="w-5 h-5 text-[#d87a38]" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
