import React from "react";
import styles from "./Welcome.module.css";

const Welcome = () => {
  return (
    <div>
      <img
        className={styles.welcomeImg}
        src="https://img1.wsimg.com/isteam/stock/yrE3VwP/:/rs=w:2560"
        alt="containers"
      />
      <div className={styles.subContainer}>
        <p className={styles.welcomeSubText}>PEYK sayfasına hoş geldiniz!</p>
      </div>
    </div>
  );
};

export default Welcome;
