import { Routes, Route } from "react-router-dom";
import RoutingAdmin from "../layouts/RoutingAdmin";
import AdminHome from "../adminpages/AdminHome";
import AdminCrockery from "../adminpages/AdminCrockery";
import AdminToys from "../adminpages/AdminToys";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/admin" element={<RoutingAdmin />}>
        <Route index element={<AdminHome />} />
        <Route path="crockery" element={<AdminCrockery />} />
        <Route path="toys" element={<AdminToys />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
