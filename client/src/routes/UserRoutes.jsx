import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Toys from "../pages/Toys";
import Crockery from "../pages/Crockery";
import GiftSets from "../pages/GiftSets";
import OffersUser from "../pages/OffersUser";
import Contact from "../pages/Contact";
import ProductDetail from "../pages/ProductDetail"; // Import Product Detail Page
import Footer from '../components/Footer';
import AuthForm from "../pages/AuthForm";
import AboutUs from "../pages/About";
export default function RoutingUser() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/toys" element={<Toys />} />
                <Route path="/crockery" element={<Crockery />} />
                <Route path="/gift-sets" element={<GiftSets />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/account" element={<AuthForm />} />
                <Route path="/product/:id" element={<ProductDetail />} /> {/* Dynamic Route for Product */}
            </Routes>
            <Footer />
            </div>
    );
}
