import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <hr />
      <p className={styles.footTitle}>Bize Ulaşın</p>
      <p className={styles.regularText}>
        Daha da iyisi, gelin, yüz yüze görüşelim!
      </p>
      <p className={styles.lightText}>
        Müşterilerimize değer veriyoruz. Mesai saatleri içinde bizi dilediğiniz
        zaman ziyaret edebilirsiniz.
      </p>
      <p className={styles.regularText}>PEYK</p>
      <a className={styles.email} href="mailto:akhmadov.omar@std.izu.edu.tr">
        akhmadov.omar@std.izu.edu.tr
      </a>
      <p className={styles.regularText}>Çalışma Saatleri</p>
      <p className={styles.lightText}>
        Telif Hakkı © 2022 PEYK - Tüm Hakları Saklıdır.
      </p>
    </footer>
  );
};

export default Footer;
