import React from "react";
import styles from "./Layout.module.css";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <Link href="/ ">
          <h2>AzerilaCar</h2>
          <p>Choose an Buy your car</p>
        </Link>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        Azerila | AzerilaCar Project &copy;
      </footer>
    </>
  );
};
export default Layout;
