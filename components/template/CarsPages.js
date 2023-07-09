import Card from "../module/Card";
import styles from "./CarsPages.module.css";

const CarsPages = ({ data }) => {
  return (
    <div className={styles.container}>
      {data.map((car) => (
        <Card key={car.id} data={car} />
      ))}
    </div>
  );
};

export default CarsPages;
