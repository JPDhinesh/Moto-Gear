import React from "react";
import "./SortBy.module.css";

export default function SortBy() {
  return (
    <div>
      <select name="cars" id="cars">
        <option value="" disabled selected style={{ display: "none" }}>
          Sort by: Recommended
        </option>
        <option value="volvo">Price - Low to High</option>
        <option value="saab">Price - High to Low</option>
        <option value="mercedes">Popularity</option>
        <option value="audi">Customer Rating</option>
      </select>
    </div>
  );
}
