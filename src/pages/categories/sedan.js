import React from "react";
import carsData from "../../../data/carData";
import Carlist from "../../../components/template/Carlist";
const Hatchabck = () => {
  const sedanCars = carsData.filter((car) => car.category === "sedan");

  return <Carlist data={sedanCars} />;
};

export default Hatchabck;
