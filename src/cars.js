import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Cars() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("https://63234e43362b0d4e7de1159e.mockapi.io/superCars")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setCars(res);
      });
  }, []);

  const formattedcars = cars.map((fac) => {
    return (
      <>
        <Link to={"../SuperCars/" + fac.id}>
          <h4>{fac.SuperCarName}</h4>
        </Link>
      </>
    );
  });

  return formattedcars;
}

export default Cars;
