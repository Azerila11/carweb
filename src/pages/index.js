import { Inter } from "next/font/google";
import carsData from "../../data/carData";
import SearchBar from "../../components/module/SearchBar";
import Categories from "../../components/module/Categories";
import CarsPages from "../../components/template/CarsPages";
import AllButoon from "../../components/module/AllButoon";

const inter = Inter({ subsets: ["latin"] });

function Index() {
  const cars = carsData.slice(0, 3);
  return (
    <div>
      <SearchBar />
      <Categories />
      <AllButoon />
      <CarsPages data={cars} />
    </div>
  );
}
export default Index;
