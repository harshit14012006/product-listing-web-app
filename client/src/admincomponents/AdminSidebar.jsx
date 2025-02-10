import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Sidebar for Large Screens */}
      <div className="flex-col hidden w-64 h-screen p-5 text-white bg-gray-800 md:flex">
        <h2 className="mb-6 text-xl font-bold">Admin Panel</h2>
        <nav className="flex flex-col space-y-4">
          <Link to="/admin" className="p-2 rounded hover:bg-gray-700">
            Dashboard
          </Link>
          <Link to="/admin/crockery" className="p-2 rounded hover:bg-gray-700">
            Crockery
          </Link>
          <Link to="/admin/toys" className="p-2 rounded hover:bg-gray-700">
            Toys
          </Link>
        </nav>
      </div>

      {/* Mobile Sidebar */}
      <div className="md:hidden">
        <button
          className="p-3 text-white bg-gray-800"
          onClick={() => setIsOpen(true)}
        >
          <Menu />
        </button>

        {/* Mobile Sidebar Menu */}
        {isOpen && (
          <div className="fixed top-0 left-0 z-50 flex flex-col w-64 h-screen p-5 text-white bg-gray-800 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Admin Panel</h2>
              <button
                className="p-2 rounded hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col space-y-4">
              <Link
                to="/admin"
                className="p-2 rounded hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                to="/admin/crockery"
                className="p-2 rounded hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                Crockery
              </Link>
              <Link
                to="/admin/toys"
                className="p-2 rounded hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                Toys
              </Link>
            </nav>
          </div>
        )}
      </div>
    </>
  );
};

export default AdminSidebar;
