import React from "react";
import styles from "./CarsDetails.module.css";
import Company from "../icons/Company";
import Model from "../icons/Model";
import Calender from "../icons/Calender";
import Road from "../icons/Road";
import Location from "../icons/Location";
import Money from "../icons/Money";

const Details = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <div className={styles.container}>
      <img src={data?.image} className={styles.image} />
      <h3 className={styles.header}>
        {" "}
        {data?.name} {data?.model}{" "}
      </h3>
      <div className={styles.details}>
        <div>
          <Company />
          <p>Company</p>
          <span>{data?.name}</span>
        </div>
        <div>
          <Model />
          <p>Model</p>
          <span>{data?.name}</span>
        </div>
        <div>
          <Calender />
          <p>First registration</p>
          <span>{data?.year}</span>
        </div>
        {/* <div>
          <Calender />
          <p>First registration</p>
          <span>{data?.year}</span>
        </div> */}
        <div>
          <Road />
          <p>kms driven</p>
          <span>{data?.distance}</span>
        </div>
      </div>
      <div className={styles.details}>
        <div>
          <Location />
          <p>Location</p>
          <span>{data?.location}</span>
        </div>
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.descriptionTitle}>Extra Information</p>
          <p className={styles.descriptionText}>{data?.description}</p>
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.price}>
          <Money />
          <p>Price:</p>
          <span>{data?.price}</span>
        </div>
      </div>
      <button className={styles.button}>Buy</button>
    </div>
  );
};

export default Details;
