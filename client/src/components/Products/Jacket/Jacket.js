import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import { Card, Row, Col } from "react-bootstrap";
import { getPost } from "../../util/Api";
import classes from "../Product.module.css";
import SortBy from "../SortBy/SortBy";
import JacketFilter from "./JacketFilter";

export default function Jacket() {
  const data = useLoaderData();
  const event = data.data[1];
  return (
    <div className={classes.ProductList}>
      <Row>
        <Col lg={2}>
          <JacketFilter />
        </Col>
        <Col lg={10}>
          <SortBy />
          <Row>
            {event.map((values) => {
              return (
                <>
                  <Col lg={2} className="mb-3">
                    <Card className={classes.card}>
                      <Link to={values.id}>
                        <div className={classes.cardImage} key={values.id}>
                          <Card.Img
                            className={classes.productImage}
                            variant="top"
                            src={values.imgSrc}
                          />
                        </div>
                      </Link>
                      <Card.Body style={{ textAlign: "center" }}>
                        <Card.Title className={classes.productTile}>
                          {values.title}
                        </Card.Title>
                        <p className={classes.productPrice}>
                          Price : Rs {values.price}
                        </p>
                      </Card.Body>
                    </Card>
                  </Col>
                </>
              );
            })}
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export function loader() {
  return getPost();
}
