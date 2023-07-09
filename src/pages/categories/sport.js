import React from "react";
import carsData from "../../../data/carData";
import Carlist from "../../../components/template/Carlist";
const Sport = () => {
  const sportCars = carsData.filter((car) => car.category === "sport");

  return <Carlist data={sportCars} />;
};

export default Sport;
