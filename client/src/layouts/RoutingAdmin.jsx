import AdminSidebar from "../admincomponents/AdminSidebar";
import AdminHeader from "../admincomponents/AdminHeader";
import { Outlet } from "react-router-dom";

const RoutingAdmin = () => {
  return (
    <div className="flex h-screen">
      <AdminSidebar />
      <div className="flex flex-col flex-1">
        <AdminHeader />
        <main className="flex-1 p-5 overflow-auto bg-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default RoutingAdmin;
