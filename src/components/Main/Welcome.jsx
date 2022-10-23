import React from "react";
import styles from "./Welcome.module.css";

const Welcome = () => {
  return (
    <div>
      <img
        className={styles.welcomeImg}
        src="https://images2.imgbox.com/7e/ff/mn6tvmEZ_o.jpg"
        alt="containers"
      />
      <div className={styles.subContainer}>
        <p className={styles.welcomeSubText}>PEYK sayfasına hoş geldiniz!</p>
      </div>
    </div>
  );
};

export default Welcome;
