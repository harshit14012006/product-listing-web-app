import { useState } from "react"
import ProductList from "../components/ProductList"
import FilterSidebar from "../components/FilterSidebar"
import SortingDropdown from "../components/SortingDropdown"
import Navbar from "../components/Navbar"

const MOCK_PRODUCTS = [
  {
    id: 1,
    name: "Ceramic Plate Set",
    price: 39.99,
    category: "Plates",
    material: "Ceramic",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Stoneware Bowl Set",
    price: 29.99,
    category: "Bowls",
    material: "Stoneware",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Porcelain Tea Cup Set",
    price: 24.99,
    category: "Cups",
    material: "Porcelain",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Glass Tumbler Set",
    price: 19.99,
    category: "Glasses",
    material: "Glass",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "Stainless Steel Cutlery Set",
    price: 49.99,
    category: "Cutlery",
    material: "Stainless Steel",
    image: "https://via.placeholder.com/150",
  },
  // Add more mock products as needed
]

function CrockeryPage() {
  const [products, setProducts] = useState(MOCK_PRODUCTS)
  const [filters, setFilters] = useState({
    category: [],
    material: [],
    priceRange: { min: 0, max: 100 },
  })
  const [sortBy, setSortBy] = useState("name")

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters)
    // Apply filters to products
    const filteredProducts = MOCK_PRODUCTS.filter(
      (product) =>
        (newFilters.category.length === 0 || newFilters.category.includes(product.category)) &&
        (newFilters.material.length === 0 || newFilters.material.includes(product.material)) &&
        product.price >= newFilters.priceRange.min &&
        product.price <= newFilters.priceRange.max,
    )
    setProducts(filteredProducts)
  }

  const handleSortChange = (newSortBy) => {
    setSortBy(newSortBy)
    // Sort products
    const sortedProducts = [...products].sort((a, b) => {
      if (newSortBy === "price") return a.price - b.price
      return a.name.localeCompare(b.name)
    })
    setProducts(sortedProducts)
  }

  return (
  <div>
  <Navbar/>
    <div className="container px-4 py-8 pt-24 mx-auto">
      <h1 className="mb-8 text-3xl font-bold">Crockery Collection</h1>
      <div className="flex flex-col gap-8 md:flex-row">
        <FilterSidebar filters={filters} onFilterChange={handleFilterChange} />
        <div className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <p className="text-gray-600">{products.length} products found</p>
            <SortingDropdown sortBy={sortBy} onSortChange={handleSortChange} />
          </div>
          <ProductList products={products} />
        </div>
      </div>
    </div>
    </div>
  )
}

export default CrockeryPage

