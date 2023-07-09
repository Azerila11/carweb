import carsData from "../../../data/carData";
import CarsPages from "../../../components/template/CarsPages";
import Categories from "../../../components/module/Categories";
import SearchBar from "../../../components/module/SearchBar";

const Details = () => {
  return (
    <div>
      <SearchBar />
      <Categories />
      <CarsPages data={carsData} />{" "}
    </div>
  );
};

export default Details;
