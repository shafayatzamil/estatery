import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";

const Sell = () => {
  const [sellProperty, setSellProperty] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/sell")
      .then((res) => res.json())
      .then((data) => {
        setSellProperty(data.data);
      });
  }, []);
  return (
    <div className="px-16 py-8 grid grid-cols-3 gap-6">
      {sellProperty.map((singleProperty) => (
        <Card key={singleProperty._id} singleProperty={singleProperty}></Card>
      ))}
    </div>
  );
};

export default Sell;
