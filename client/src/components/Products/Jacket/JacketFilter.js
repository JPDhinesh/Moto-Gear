import React from "react";
import { Form } from "react-bootstrap";
import { getPost } from "../../util/Api";
import { useLoaderData } from "react-router-dom";

export default function JacketFilter() {
  const data = useLoaderData();
  const event = data.data[1];
  const uniqueBrands = [];
  return (
    <div className="filters">
      <div className="brand">
        <h6>Brands</h6>
        <ul className="brands_name">
          {event.map((element) => {
            if (!uniqueBrands.includes(element.brand)) {
              uniqueBrands.push(element.brand);
              return (
                <>
                  <Form.Check
                    type="checkbox"
                    label={element.brand}
                    style={{ textTransform: "upperCase" }}
                  />
                </>
              );
            } else {
              return null;
            }
          })}
        </ul>
      </div>
      <div className="priceRange">
        <h6>Price</h6>
        <ul>
          <Form.Check type="checkbox" label="Below Rs.1000"></Form.Check>
          <Form.Check type="checkbox" label="Rs 1001 - Rs 3000"></Form.Check>
          <Form.Check type="checkbox" label="Rs 3001 - Rs 6000"></Form.Check>
          <Form.Check type="checkbox" label="Rs 6001 - Rs 9000"></Form.Check>
          <Form.Check type="checkbox" label="Rs 9001 - Rs 15000"></Form.Check>
          <Form.Check type="checkbox" label="Above Rs 15000"></Form.Check>
        </ul>
      </div>
      <div className="sizeList">
        <h6>Size</h6>
        <ul>
          <Form.Check type="checkbox" label="XS"></Form.Check>
          <Form.Check type="checkbox" label="S"></Form.Check>
          <Form.Check type="checkbox" label="M"></Form.Check>
          <Form.Check type="checkbox" label="L"></Form.Check>
          <Form.Check type="checkbox" label="XL"></Form.Check>
        </ul>
      </div>
      <div className="discount">
        <h6>Discount</h6>
        <ul>
          <Form.Check type="checkbox" label="10% Off or more"></Form.Check>
          <Form.Check type="checkbox" label="20% Off or more"></Form.Check>
          <Form.Check type="checkbox" label="30% Off or more"></Form.Check>
          <Form.Check type="checkbox" label="40% Off or more"></Form.Check>
          <Form.Check type="checkbox" label="50% Off or more"></Form.Check>
          <Form.Check type="checkbox" label="60% Off or more"></Form.Check>
        </ul>
      </div>
      <div className="colorPicker">
        <h6>Color Picker</h6>
        <ul>
          <Form.Control type="color"></Form.Control>
        </ul>
      </div>
      <div className="availability">
        <h6>Availability</h6>
        <ul>
          <Form.Check type="checkbox" label="Inc. Out of stock"></Form.Check>
        </ul>
      </div>
    </div>
  );
}

export function loader() {
  return getPost();
}
