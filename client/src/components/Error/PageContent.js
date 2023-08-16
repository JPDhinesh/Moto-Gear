import React from "react";

export default function PageContent({ title, children }) {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
}
