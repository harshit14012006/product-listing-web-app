import { useState } from "react";
import { Edit, Trash2, PlusCircle, Upload, X } from "lucide-react";

const AdminCrockery = () => {
  const [crockeryItems, setCrockeryItems] = useState([]);
  const [newItem, setNewItem] = useState({
    title: "",
    image: "",
    category: "",
    material: "",
    price: "",
  });
  const [editingIndex, setEditingIndex] = useState(null);

  const categories = ["Plates", "Bowls", "Cups", "Glasses", "Cutlery"];
  const materials = ["Steel", "Glass", "Bone China"];

  // Handle input change
  const handleInputChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  // Handle Image Upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setNewItem({ ...newItem, image: imageUrl });
    }
  };

  // Add new item
  const addItem = () => {
    if (!newItem.title || !newItem.image || !newItem.category || !newItem.material || !newItem.price) return;
    setCrockeryItems([...crockeryItems, newItem]);
    setNewItem({ title: "", image: "", category: "", material: "", price: "" }); // Reset form
  };

  // Edit item
  const editItem = (index) => {
    setNewItem(crockeryItems[index]);
    setEditingIndex(index);
  };

  // Update item
  const updateItem = () => {
    if (!newItem.title || !newItem.image || !newItem.category || !newItem.material || !newItem.price) return;
    const updatedItems = [...crockeryItems];
    updatedItems[editingIndex] = newItem;
    setCrockeryItems(updatedItems);
    setNewItem({ title: "", image: "", category: "", material: "", price: "" });
    setEditingIndex(null);
  };

  // Delete item
  const deleteItem = (index) => {
    const filteredItems = crockeryItems.filter((_, i) => i !== index);
    setCrockeryItems(filteredItems);
  };

  return (
    <div className="p-5 bg-white rounded shadow">
      <h2 className="mb-4 text-2xl font-bold">Manage Crockery Items</h2>

      {/* Input Form */}
      <div className="flex flex-wrap gap-2 mb-4">
        {/* Image Upload */}
        <label className="flex items-center gap-2 p-2 border rounded cursor-pointer">
          <Upload className="w-5 h-5" />
          Upload Image
          <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
        </label>
        {newItem.image && (
          <div className="relative">
            <img src={newItem.image} alt="Preview" className="w-16 h-16 rounded" />
            <button className="absolute top-0 right-0 p-1 bg-red-500 rounded-full" onClick={() => setNewItem({ ...newItem, image: "" })}>
              <X className="w-4 h-4 text-white" />
            </button>
          </div>
        )}

        {/* Title Input */}
        <input
          type="text"
          name="title"
          placeholder="Enter Title"
          value={newItem.title}
          onChange={handleInputChange}
          className="w-full p-2 border rounded md:w-1/4"
        />

        {/* Category Dropdown */}
        <select name="category" value={newItem.category} onChange={handleInputChange} className="w-full p-2 border rounded md:w-1/4">
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        {/* Material Dropdown */}
        <select name="material" value={newItem.material} onChange={handleInputChange} className="w-full p-2 border rounded md:w-1/4">
          <option value="">Select Material</option>
          {materials.map((material) => (
            <option key={material} value={material}>
              {material}
            </option>
          ))}
        </select>

        {/* Price Input */}
        <input
          type="number"
          name="price"
          placeholder="Enter Price"
          value={newItem.price}
          onChange={handleInputChange}
          className="w-full p-2 border rounded md:w-1/4"
        />

        {/* Add / Update Button */}
        {editingIndex !== null ? (
          <button onClick={updateItem} className="p-2 text-white bg-yellow-500 rounded">
            Update Item
          </button>
        ) : (
          <button onClick={addItem} className="flex items-center p-2 text-white bg-blue-500 rounded">
            <PlusCircle className="w-4 h-4 mr-1" />
            Add Item
          </button>
        )}
      </div>

      {/* Crockery Items Table */}
      {crockeryItems.length > 0 ? (
        <table className="w-full mt-4 border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">#</th>
              <th className="p-2 border">Image</th>
              <th className="p-2 border">Title</th>
              <th className="p-2 border">Category</th>
              <th className="p-2 border">Material</th>
              <th className="p-2 border">Price</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {crockeryItems.map((item, index) => (
              <tr key={index} className="text-center">
                <td className="p-2 border">{index + 1}</td>
                <td className="p-2 border">
                  <img src={item.image} alt="Crockery" className="w-12 h-12 mx-auto rounded" />
                </td>
                <td className="p-2 border">{item.title}</td>
                <td className="p-2 border">{item.category}</td>
                <td className="p-2 border">{item.material}</td>
                <td className="p-2 border">${item.price}</td>
                <td className="p-2 border">
                  <button onClick={() => editItem(index)} className="p-1 text-yellow-500">
                    <Edit />
                  </button>
                  <button onClick={() => deleteItem(index)} className="p-1 text-red-500">
                    <Trash2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-500">No crockery items found.</p>
      )}
    </div>
  );
};

export default AdminCrockery;
