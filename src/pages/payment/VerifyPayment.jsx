import React from "react";
import { useParams } from "react-router-dom";

function VerifyPayment() {
  const params = useParams().txRef;
  console.log(params);
  return <div>VerifyPayment</div>;
}

export default VerifyPayment;
