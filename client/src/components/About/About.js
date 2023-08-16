import React from "react";
import { getPost } from "../util/Api";
import { useLoaderData } from "react-router-dom";
import { Image } from "react-bootstrap";
import classes from "./About.module.css";

export default function About() {
  const data = useLoaderData();
  const event = data.data[3];
  const productName = data.data[4];
  return (
    <div>
      <div>
        <h1 className={`${classes.heading} text-center`}>Motor Progear</h1>
        <p className={classes.description}>
          Motor ProGear, popularly known as MPG is the leading manufacturer,
          importer and distributor of all categories of riding gear for bikers
          in India. Our Mission - Making safety affordable for all bikers
          without any compromise on quality. Being a company started and run by
          bikers, our products are meticulously designed with emphasis on
          Practicality, Functionality and Style. Our product range includes
          Motorcycle Helmets, Riding Jackets, Riding Pants, Riding Gloves,
          Motorcycle Boots and other accessories for bikers. We believe in
          ATGATT....... All The Gear All The Time.
        </p>
      </div>
      <div className={classes.brandImages} id="Motor_products">
        <h1 className="text-center">Brands</h1>
        <div className={classes.images}>
          {event.map((element) => {
            return (
              <Image
                src={element.imgSrc}
                className={classes.brand_images_img}
              ></Image>
            );
          })}
        </div>
      </div>
      <div className={classes.products}>
        <h1 className="text-center">Our Products</h1>
        <div className={classes.productsList}>
          {productName.map((element) => {
            return (
              <div className={classes.productsName}>
                <Image
                  src={element.imgSrc}
                  className={classes.productImage}
                ></Image>
                <div className={classes.productOverlay}>
                  <div className={classes.overlayContent}>
                    <h3>{element.productListName}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function loader() {
  return getPost();
}
