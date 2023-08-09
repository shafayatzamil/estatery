import React from "react";
import { useParams } from "react-router-dom";

const PaymentSuccess = () => {
  const { trainId } = useParams();
  console.log(trainId);
  return (
    <div className="p-8">
      <h2 className="text-5xl font-bold text-green-500 text-center">
        Payment Successfull :{trainId}
      </h2>
    </div>
  );
};

export default PaymentSuccess;
