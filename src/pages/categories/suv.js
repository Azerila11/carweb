import React from "react";
import carsData from "../../../data/carData";
import Carlist from "../../../components/template/Carlist";
const Suv = () => {
  const suvCars = carsData.filter((car) => car.category === "suv");

  return <Carlist data={suvCars} />;
};

export default Suv;
