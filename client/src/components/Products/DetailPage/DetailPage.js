import React from "react";
import { useRouteLoaderData } from "react-router-dom";
import { json } from "react-router-dom";

export default function DetailPage() {
  const data = useRouteLoaderData("product-detail");
  const product = data.data;

  return (
    <div>
      {product.map((values) => {
        return (
          <div key={values.id}>
            <h1>{values.title}</h1>
          </div>
        );
      })}
    </div>
  );
}

export async function loader({ request, params }) {
  const id = params.id;

  const response = await fetch(`http://localhost:3000/users?id=${id}`);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
}
