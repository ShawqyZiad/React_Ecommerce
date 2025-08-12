import React, { useState, useEffect } from "react";
import Products from "./Products";
import { Link } from "react-router-dom";
import "./Products.css";
import "bootstrap/dist/css/bootstrap.min.css";

const CategoryComponent = () => {
  const categories = [
    { label: "All Products", value: "all" },
    { label: "Men", value: "men's clothing" },
    { label: "Women", value: "women's clothing" },
    { label: "Electronics", value: "electronics" },
    { label: "Jewelery", value: "jewelery" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async (category) => {
    setLoading(true);
    try {
      const url =
        category === "all"
          ? "https://fakestoreapi.com/products"
          : `https://fakestoreapi.com/products/category/${category}`;

      const response = await fetch(url);
      if (!response.ok) throw new Error(`Error ${response.status}`);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">🛍 PRODUCT OVERVIEW</h2>

    
      <div className="d-flex justify-content-center mb-4 flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setSelectedCategory(cat.value)}
            className={`btn ${
              selectedCategory === cat.value ? "btn-primary" : "btn-outline-primary"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="row g-4">
          {products.map((product) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product.id}>
              <Link to={`/products/${product.id}`} style={{ textDecoration: "none" }}>
                <Products
                  title={product.title}
                  image={product.image}
                  price={product.price}
                />
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryComponent;
