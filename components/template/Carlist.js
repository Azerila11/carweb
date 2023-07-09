import React from "react";
import styles from "./Carlist.module.css";
import { useRouter } from "next/router";
import Back from "../icons/Back";
import Card from "../module/Card";

const Carlist = ({ data }) => {
  const router = useRouter();

  const backHandeler = () => {
    router.back();
  };
  return (
    <div className={styles.container}>
      <div className={styles.back} onClick={backHandeler}>
        <Back />
        <p>Back</p>
      </div>
      <div className={styles.cards}>
        {data.map((car) => (
          <Card key={car.id} data={car} />
        ))}
      </div>
    </div>
  );
};

export default Carlist;
