import React from "react";
import carsData from "../../../data/carData";
import Carlist from "../../../components/template/Carlist";
const Hatchabck = () => {
  const hatchbackCars = carsData.filter((car) => car.category === "hatchback");

  return <Carlist data={hatchbackCars} />;
};

export default Hatchabck;
