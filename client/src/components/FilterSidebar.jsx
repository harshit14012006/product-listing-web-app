"use client";

import { useState, useEffect } from "react";
import { Filter } from "lucide-react"; // Using Lucide React for the filter icon

function FilterSidebar({ filters, onFilterChange }) {
  const [localFilters, setLocalFilters] = useState(filters);
  const [isOpen, setIsOpen] = useState(false); // State to handle mobile sidebar toggle

  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  const handleCategoryChange = (category) => {
    const updatedCategories = localFilters.category.includes(category)
      ? localFilters.category.filter((c) => c !== category)
      : [...localFilters.category, category];
    setLocalFilters({ ...localFilters, category: updatedCategories });
  };

  const handleMaterialChange = (material) => {
    const updatedMaterials = localFilters.material.includes(material)
      ? localFilters.material.filter((m) => m !== material)
      : [...localFilters.material, material];
    setLocalFilters({ ...localFilters, material: updatedMaterials });
  };

  const handlePriceChange = (min, max) => {
    setLocalFilters({ ...localFilters, priceRange: { min, max } });
  };

  const applyFilters = () => {
    onFilterChange(localFilters);
    setIsOpen(false); // Close the sidebar after applying filters on mobile
  };

  return (
    <div>
      {/* Mobile Filter Toggle Button */}
      <button
        className="md:hidden flex items-center gap-2 bg-[#6B4226] text-white px-4 py-2 rounded-lg shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Filter className="w-5 h-5" /> Filters
      </button>

      {/* Sidebar Container */}
      <div
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } md:relative md:opacity-100 md:visible md:bg-transparent`}
      >
        {/* Sidebar Panel */}
        <div
          className={`fixed left-0 top-0 w-72 h-full bg-[#F5ECE3] shadow-lg p-6 transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:relative md:w-full md:translate-x-0 md:h-auto md:p-6`}
        >
          <h2 className="text-2xl font-semibold text-[#6B4226] mb-5">Filters</h2>

          {/* Category Section */}
          <div className="mb-6">
            <h3 className="font-semibold text-[#4E342E] mb-3">Category</h3>
            {["Plates", "Bowls", "Cups", "Glasses", "Cutlery"].map((category) => (
              <label key={category} className="flex items-center gap-2 mb-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={localFilters.category.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                  className="w-4 h-4 accent-[#B88C65]"
                />
                <span className="text-[#6B4226]">{category}</span>
              </label>
            ))}
          </div>

          {/* Material Section */}
          <div className="mb-6">
            <h3 className="font-semibold text-[#4E342E] mb-3">Material</h3>
            {["Ceramic", "Stoneware", "Porcelain", "Glass", "Stainless Steel"].map((material) => (
              <label key={material} className="flex items-center gap-2 mb-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={localFilters.material.includes(material)}
                  onChange={() => handleMaterialChange(material)}
                  className="w-4 h-4 accent-[#B88C65]"
                />
                <span className="text-[#6B4226]">{material}</span>
              </label>
            ))}
          </div>

          {/* Price Range Section */}
          <div className="mb-6">
            <h3 className="font-semibold text-[#4E342E] mb-3">Price Range</h3>
            <div className="flex items-center gap-3">
              <input
                type="number"
                value={localFilters.priceRange.min}
                onChange={(e) => handlePriceChange(Number(e.target.value), localFilters.priceRange.max)}
                className="w-20 p-2 border border-[#E0C8B0] rounded bg-white text-[#6B4226] shadow-sm"
              />
              <span className="text-[#6B4226]">-</span>
              <input
                type="number"
                value={localFilters.priceRange.max}
                onChange={(e) => handlePriceChange(localFilters.priceRange.min, Number(e.target.value))}
                className="w-20 p-2 border border-[#E0C8B0] rounded bg-white text-[#6B4226] shadow-sm"
              />
            </div>
          </div>

          {/* Apply Filters Button */}
          <button
            onClick={applyFilters}
            className="w-full bg-[#6B4226] text-white py-3 rounded-lg font-semibold shadow-md transition-all hover:bg-[#8D6E63] hover:scale-95"
          >
            Apply Filters
          </button>

          {/* Close Button for Mobile */}
          <button
            className="absolute top-4 right-4 md:hidden text-[#6B4226] font-bold text-lg"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterSidebar;
