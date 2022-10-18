import React from "react";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={styles.aboutUs}>
      <p className={styles.aboutTitle}>Hakkımızda</p>
      <div className={styles.aboutCards}>
        <div className={styles.card}>
          <img
            className={styles.cardImg}
            src="https://img1.wsimg.com/isteam/stock/YoOKxNQ/:/rs=w:1200,h:600,cg:true,m/cr=w:1200,h:600"
            alt="card"
          />
          <span className={styles.cardTitle}>Heyecan uyandırın</span>
          <p className={styles.cardText}>
            İşletmenizin sunduklarıyla ilgili heyecan verici neler var? Bunları
            burada dile getirebilirsiniz.
          </p>
        </div>
        <div className={styles.card}>
          <img
            className={styles.cardImg}
            src="https://img1.wsimg.com/isteam/stock/pY5wyY4/:/rs=w:1200,h:600,cg:true,m/cr=w:1200,h:600"
            alt="card"
          />
          <span className={styles.cardTitle}>İlgileri üzerinize toplayın</span>
          <p className={styles.cardText}>
            Buraya işletmenizle ilgili ilgi çekici bilgiler ekleyin.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
