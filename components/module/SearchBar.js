import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import { useRouter } from "next/router";

const SearchBar = () => {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const router = useRouter();

  const SearchHandeler = () => {
    if (min && max) {
      router.push(`/filter/${min}/${max}`);
    } else {
      alert("Please Enter Min and max price ");
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <input
          placeholder="Enter min-price"
          value={min}
          onChange={(e) => setMin(e.target.value)}
        />
        <input
          placeholder="Enter max-price"
          value={max}
          onChange={(e) => setMax(e.target.value)}
        />
      </div>
      <button onClick={SearchHandeler}>Search</button>
    </div>
  );
};

export default SearchBar;
