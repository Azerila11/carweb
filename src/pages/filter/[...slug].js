import React from "react";
import carsData from "../../../data/carData";
import { useRouter } from "next/router";
import Carlist from "../../../components/template/Carlist";

const filterCars = () => {
  const router = useRouter();
  const [min, max] = router.query.slug || [];
  const filterdData = carsData.filter(
    (item) => item.price > min && item.price < max
  );

  if (!filterdData.length) return <h3>Not Found</h3>;

  return <Carlist data={filterdData} />;
};

export default filterCars;
