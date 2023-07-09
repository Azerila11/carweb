import Link from "next/link";
import Location from "../icons/Location";
import styles from "./Card.module.css";

const Card = ({ data }) => {
  console.log(data, ">>>>>>>>>>>>>>>>>>>>");
  return (
    <Link href={`cars/${data.id}`}>
      <div className={styles.container}>
        <img src={data.image} className={styles.image} alt="carimage" />
        <h4 className={styles.tile}>{`${data.name} ${data.model}`}</h4>
        <p className={styles.detail}>{`${data.year}. ${data.distance}km `}</p>
        <div className={styles.footer}>
          <p>$ {data.price}</p>
          <div className={styles.location}>
            <p>{data.location}</p>
            <Location />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
