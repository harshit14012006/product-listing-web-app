import { useState } from "react";
import { Edit, Trash2, PlusCircle, Upload, X } from "lucide-react";

const AdminToys = () => {
  const [toyItems, setToyItems] = useState([]);
  const [newToy, setNewToy] = useState({
    title: "",
    image: "",
    category: "",
    ageGroup: "",
    price: "",
  });
  const [editingIndex, setEditingIndex] = useState(null);

  const categories = ["Soft Toys", "Action Figures", "Educational Toys", "Puzzles", "Vehicles"];
  const ageGroups = ["0-2 years", "3-5 years", "6-8 years", "9+ years"];

  // Handle input change
  const handleInputChange = (e) => {
    setNewToy({ ...newToy, [e.target.name]: e.target.value });
  };

  // Handle Image Upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setNewToy({ ...newToy, image: imageUrl });
    }
  };

  // Add new toy
  const addToy = () => {
    if (!newToy.title || !newToy.image || !newToy.category || !newToy.ageGroup || !newToy.price) return;
    setToyItems([...toyItems, newToy]);
    setNewToy({ title: "", image: "", category: "", ageGroup: "", price: "" }); // Reset form
  };

  // Edit toy
  const editToy = (index) => {
    setNewToy(toyItems[index]);
    setEditingIndex(index);
  };

  // Update toy
  const updateToy = () => {
    if (!newToy.title || !newToy.image || !newToy.category || !newToy.ageGroup || !newToy.price) return;
    const updatedToys = [...toyItems];
    updatedToys[editingIndex] = newToy;
    setToyItems(updatedToys);
    setNewToy({ title: "", image: "", category: "", ageGroup: "", price: "" });
    setEditingIndex(null);
  };

  // Delete toy
  const deleteToy = (index) => {
    const filteredToys = toyItems.filter((_, i) => i !== index);
    setToyItems(filteredToys);
  };

  return (
    <div className="p-5 bg-white rounded shadow">
      <h2 className="mb-4 text-2xl font-bold">Manage Toy Items</h2>

      {/* Input Form */}
      <div className="flex flex-wrap gap-2 mb-4">
        {/* Image Upload */}
        <label className="flex items-center gap-2 p-2 border rounded cursor-pointer">
          <Upload className="w-5 h-5" />
          Upload Image
          <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
        </label>
        {newToy.image && (
          <div className="relative">
            <img src={newToy.image} alt="Preview" className="w-16 h-16 rounded" />
            <button className="absolute top-0 right-0 p-1 bg-red-500 rounded-full" onClick={() => setNewToy({ ...newToy, image: "" })}>
              <X className="w-4 h-4 text-white" />
            </button>
          </div>
        )}

        {/* Title Input */}
        <input
          type="text"
          name="title"
          placeholder="Enter Title"
          value={newToy.title}
          onChange={handleInputChange}
          className="w-full p-2 border rounded md:w-1/4"
        />

        {/* Category Dropdown */}
        <select name="category" value={newToy.category} onChange={handleInputChange} className="w-full p-2 border rounded md:w-1/4">
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        {/* Age Group Dropdown */}
        <select name="ageGroup" value={newToy.ageGroup} onChange={handleInputChange} className="w-full p-2 border rounded md:w-1/4">
          <option value="">Select Age Group</option>
          {ageGroups.map((ageGroup) => (
            <option key={ageGroup} value={ageGroup}>
              {ageGroup}
            </option>
          ))}
        </select>

        {/* Price Input */}
        <input
          type="number"
          name="price"
          placeholder="Enter Price"
          value={newToy.price}
          onChange={handleInputChange}
          className="w-full p-2 border rounded md:w-1/4"
        />

        {/* Add / Update Button */}
        {editingIndex !== null ? (
          <button onClick={updateToy} className="p-2 text-white bg-yellow-500 rounded">
            Update Toy
          </button>
        ) : (
          <button onClick={addToy} className="flex items-center p-2 text-white bg-blue-500 rounded">
            <PlusCircle className="w-4 h-4 mr-1" />
            Add Toy
          </button>
        )}
      </div>

      {/* Toy Items Table */}
      {toyItems.length > 0 ? (
        <table className="w-full mt-4 border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">#</th>
              <th className="p-2 border">Image</th>
              <th className="p-2 border">Title</th>
              <th className="p-2 border">Category</th>
              <th className="p-2 border">Age Group</th>
              <th className="p-2 border">Price</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {toyItems.map((item, index) => (
              <tr key={index} className="text-center">
                <td className="p-2 border">{index + 1}</td>
                <td className="p-2 border">
                  <img src={item.image} alt="Toy" className="w-12 h-12 mx-auto rounded" />
                </td>
                <td className="p-2 border">{item.title}</td>
                <td className="p-2 border">{item.category}</td>
                <td className="p-2 border">{item.ageGroup}</td>
                <td className="p-2 border">${item.price}</td>
                <td className="p-2 border">
                  <button onClick={() => editToy(index)} className="p-1 text-yellow-500">
                    <Edit />
                  </button>
                  <button onClick={() => deleteToy(index)} className="p-1 text-red-500">
                    <Trash2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-500">No toy items found.</p>
      )}
    </div>
  );
};

export default AdminToys;
