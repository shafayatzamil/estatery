import { useEffect, useState } from "react";

const useSeller = (user) => {
  const [seller, setSeller] = useState(false);
  const [sellerLoading, setSellerLoading] = useState(true);

  // useEffect(() => {
  //   const email = user?.email;
  //   if (email) {
  //     fetch(`http://localhost:5000/users/useseller/:${email}`, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((data) => console.log(data));
  //   }
  // }, [user]);
  // return [seller, sellerLoading];
};

export default useSeller;
