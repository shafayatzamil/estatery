import React, { useEffect, useState } from "react";
import Card from "./Card";

const Rent = () => {
  const [rentProperty, setRentProperty] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/rent")
      .then((res) => res.json())
      .then((data) => {
        setRentProperty(data.data);
      });
  }, []);

  return (
    <div className="px-16 py-8 grid grid-cols-3 gap-6">
      {rentProperty.map((singleProperty) => (
        <Card key={singleProperty._id} singleProperty={singleProperty}></Card>
      ))}
    </div>
  );
};

export default Rent;
