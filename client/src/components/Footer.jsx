import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#184a45] text-[#e5ede9] py-10">
            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Logo & About */}
                <div>
                    <h2 className="text-2xl font-bold text-[#d87a38]">PlayPlates</h2>
                    <p className="mt-2 text-sm text-[#c5dad3]">
                        Your one-stop shop for quality toys & stylish crockery.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-[#d87a38]">Quick Links</h3>
                    <ul className="mt-2 space-y-2 text-[#c5dad3]">
                        {["Home", "Toys", "Crockery", "Gift Sets", "Offers", "Contact"].map((item, index) => (
                            <li key={index}>
                                <Link to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "-")}`} className="hover:text-[#d87a38] transition">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold text-[#d87a38]">Contact Us</h3>
                    <ul className="mt-2 space-y-2 text-[#c5dad3]">
                        <li className="flex items-center">
                            <MapPin className="w-5 h-5 mr-2 text-[#d87a38]" />
                            123 Market Street, NY
                        </li>
                        <li className="flex items-center">
                            <Phone className="w-5 h-5 mr-2 text-[#d87a38]" />
                            +1 234 567 890
                        </li>
                        <li className="flex items-center">
                            <Mail className="w-5 h-5 mr-2 text-[#d87a38]" />
                            support@playplates.com
                        </li>
                    </ul>
                </div>
            </div>

            {/* Social Media & Copyright */}
            <div className="mt-8 border-t border-[#c5dad3] pt-6 text-center">
                <div className="flex justify-center space-x-6 mb-4">
                    {[Facebook, Instagram, Twitter].map((Icon, index) => (
                        <Icon key={index} className="w-6 h-6 cursor-pointer hover:text-[#d87a38] transition" />
                    ))}
                </div>
                <p className="text-sm text-[#c5dad3]">© {new Date().getFullYear()} PlayPlates. All rights reserved.</p>
            </div>
        </footer>
    );
}
