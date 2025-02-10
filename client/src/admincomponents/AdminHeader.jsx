const AdminHeader = () => {
  return (
    <div className="flex items-center justify-between p-4 text-white bg-gray-900">
      <h1 className="text-lg font-bold">Play Plates</h1>
      <button className="px-4 py-2 bg-red-500 rounded">Logout</button>
    </div>
  );
};

export default AdminHeader;
