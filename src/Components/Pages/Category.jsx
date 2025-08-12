import React from "react";
import "./Products.css";

export default function Products({ title, image, price }) {
  return (
    <div className="card h-100 shadow-sm product-card">
      <img
        src={image}
        alt={title}
        className="card-img-top p-3"
        style={{ height: "200px", objectFit: "contain" }}
      />
      <div className="card-body d-flex flex-column">
        <h6 className="card-title" style={{ flexGrow: 1 }}>
          {title.length > 40 ? title.slice(0, 40) + "..." : title}
        </h6>
        <p className="card-text text-success fw-bold">${price}</p>
        <button className="btn btn-sm btn-outline-primary mt-auto">
          View Details
        </button>
      </div>
    </div>
  );
}
