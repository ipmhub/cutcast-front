import React from "react";
import { GuardSpinner } from "react-spinners-kit";

export default function Loading() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <GuardSpinner frontColor={"#F25690"} />
    </div>
  );
}
