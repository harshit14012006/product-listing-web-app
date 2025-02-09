import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Toys from "./pages/Toys";
import Crockery from "./pages/Crockery";
import GiftSets from "./pages/GiftSets";
import OffersUser from "./pages/OffersUser";
import Contact from "./pages/Contact";
import ProductDetail from "./pages/ProductDetail"; // Import Product Detail Page
import Footer from './components/Footer';

export default function RoutingUser() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/toys" element={<Toys />} />
                <Route path="/crockery" element={<Crockery />} />
                <Route path="/gift-sets" element={<GiftSets />} />
                <Route path="/offers" element={<OffersUser />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/product/:id" element={<ProductDetail />} /> {/* Dynamic Route for Product */}
            </Routes>
            <Footer />
        </Router>
    );
}
