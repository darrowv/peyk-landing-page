import React from "react";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={styles.aboutUs}>
      <p className={styles.aboutTitle}>Hakkımızda</p>
      <div className={styles.aboutCards}>
        <div className={styles.card}>
          <div>
            <img
              className={styles.cardImg}
              src="https://images2.imgbox.com/1b/17/C7C3PYZt_o.jpg"
              alt="card"
            />
          </div>
          <span className={styles.cardTitle}>Heyecan uyandırın</span>
          <p className={styles.cardText}>
            İşletmenizin sunduklarıyla ilgili heyecan verici neler var? Bunları
            burada dile getirebilirsiniz.
          </p>
        </div>
        <div className={styles.card}>
          <img
            className={styles.cardImg}
            src="https://images2.imgbox.com/79/1b/V8LkD4nV_o.jpg"
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
