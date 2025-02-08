import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Toys from "./pages/Toys";
import Crockery from "./pages/Crockery";
import GiftSets from "./pages/GiftSets";
import OffersUser from "./pages/OffersUser";
import Contact from "./pages/Contact";

export default function RoutingUser() {
    return (
        <Router>
            {/* <Navbar />  Navbar stays persistent across pages */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/toys" element={<Toys />} />
                <Route path="/crockery" element={<Crockery />} />
                <Route path="/gift-sets" element={<GiftSets />} />
                <Route path="/offers" element={<OffersUser />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}
