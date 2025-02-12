import { useState, useEffect } from "react";
import { Edit, Trash2, PlusCircle, Upload, X } from "lucide-react";
import axios from "axios";

const API_BASE_URL = "http://localhost:5000/toys"; // Update with your API endpoint

const AdminToys = () => {
  const [toyItems, setToyItems] = useState([]);
  const [newToy, setNewToy] = useState({
    title: "",
    image: "",
    category: "",
    material: "",
    price: "",
  });
  const [editingIndex, setEditingIndex] = useState(null);

  const categories = ["Action Figures", "Dolls", "Puzzles", "Cars", "Board Games"];
  const materials = ["Plastic", "Wood", "Metal", "Fabric"];

  // Fetch toy items on mount
  useEffect(() => {
    fetchToys();
  }, []);

  const fetchToys = async () => {
    try {
      const response = await axios.get(API_BASE_URL);
      setToyItems(response.data);
    } catch (error) {
      console.error("Error fetching toys:", error);
    }
  };

  const handleInputChange = (e) => {
    setNewToy({ ...newToy, [e.target.name]: e.target.value });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post(`${API_BASE_URL}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setNewToy({ ...newToy, image: response.data.imageUrl }); // Backend should return image URL
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const addItem = async () => {
    if (!newToy.title || !newToy.image || !newToy.category || !newToy.material || !newToy.price) return;

    try {
      const response = await axios.post(API_BASE_URL, newToy);
      setToyItems([...toyItems, response.data]);
      setNewToy({ title: "", image: "", category: "", material: "", price: "" });
    } catch (error) {
      console.error("Error adding toy:", error);
    }
  };

  const editItem = (index) => {
    setNewToy(toyItems[index]);
    setEditingIndex(index);
  };

  const updateItem = async () => {
    if (!newToy.title || !newToy.image || !newToy.category || !newToy.material || !newToy.price) return;

    try {
      const response = await axios.put(`${API_BASE_URL}/${toyItems[editingIndex]._id}`, newToy);
      const updatedItems = [...toyItems];
      updatedItems[editingIndex] = response.data;
      setToyItems(updatedItems);
      setNewToy({ title: "", image: "", category: "", material: "", price: "" });
      setEditingIndex(null);
    } catch (error) {
      console.error("Error updating toy:", error);
    }
  };

  const deleteItem = async (index) => {
    try {
      await axios.delete(`${API_BASE_URL}/${toyItems[index]._id}`);
      setToyItems(toyItems.filter((_, i) => i !== index));
    } catch (error) {
      console.error("Error deleting toy:", error);
    }
  };

  return (
    <div className="p-5 bg-white rounded shadow">
      <h2 className="mb-4 text-2xl font-bold">Manage Toy Items</h2>

      <div className="flex flex-wrap gap-2 mb-4">
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

        <input type="text" name="title" placeholder="Enter Title" value={newToy.title} onChange={handleInputChange} className="w-full p-2 border rounded md:w-1/4" />
        
        <select name="category" value={newToy.category} onChange={handleInputChange} className="w-full p-2 border rounded md:w-1/4">
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        
        <select name="material" value={newToy.material} onChange={handleInputChange} className="w-full p-2 border rounded md:w-1/4">
          <option value="">Select Material</option>
          {materials.map((material) => (
            <option key={material} value={material}>{material}</option>
          ))}
        </select>
        
        <input type="number" name="price" placeholder="Enter Price" value={newToy.price} onChange={handleInputChange} className="w-full p-2 border rounded md:w-1/4" />

        {editingIndex !== null ? (
          <button onClick={updateItem} className="p-2 text-white bg-yellow-500 rounded">Update Item</button>
        ) : (
          <button onClick={addItem} className="flex items-center p-2 text-white bg-blue-500 rounded">
            <PlusCircle className="w-4 h-4 mr-1" />
            Add Item
          </button>
        )}
      </div>

      {toyItems.length > 0 ? (
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
            {toyItems.map((item, index) => (
              <tr key={index} className="text-center">
                <td className="p-2 border">{index + 1}</td>
                <td className="p-2 border">
                  <img src={item.image} alt="Toy" className="w-12 h-12 mx-auto rounded" />
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
        <p className="text-gray-500">No toy items found.</p>
      )}
    </div>
  );
};

export default AdminToys;
