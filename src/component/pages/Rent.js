import React, { useEffect, useState } from "react";

const Rent = () => {
  const [rent, setRent] = useState();
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/property")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, [1]);

  return (
    <div className="px-16 py-8 grid grid-cols-3 gap-6">
      {/* {rent.map((singleProperty))} */}
    </div>
  );
};

export default Rent;
