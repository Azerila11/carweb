import React from "react";
import styles from "./AllButoon.module.css";
import Link from "next/link";

const AllButoon = () => {
  return (
    <div className={styles.container}>
      <Link href="/cars">See All Cars</Link>
    </div>
  );
};

export default AllButoon;
