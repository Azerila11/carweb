import { useRouter } from "next/router";
import carsData from "../../../data/carData";
import Details from "../../../components/template/Details";

const CarDetails = () => {
  const router = useRouter();
  const { carDetails } = router.query;
  const deatilsCarList = carsData[carDetails - 1];

  return <Details data={deatilsCarList} />;
};

export default CarDetails;
