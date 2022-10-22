import React, { useState } from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const [date, setDate] = useState(false);

  const partialDate = (
    <div className={styles.partialDate}>
      Bugün açık{" "}
      <span style={{ opacity: 0.6, marginLeft: "5px" }}>09:00 – 17:00</span>
      <span
        onClick={() => setDate(true)}
        className={`material-symbols-outlined ${styles.more}`}
      >
        expand_more
      </span>
    </div>
  );

  const fullDate = (
    <div className={styles.fullDate}>
      <table className={styles.dateTable}>
        <tbody>
          <tr>
            <td>Pzt</td>
            <td>09:00 – 17:00</td>
            <td className={styles.lessCell}>
              <span
                onClick={() => setDate(false)}
                className={`material-symbols-outlined ${styles.less}`}
              >
                expand_less
              </span>
            </td>
          </tr>
          <tr>
            <td>Sal</td>
            <td>09:00 – 17:00</td>
          </tr>
          <tr>
            <td>Çar</td>
            <td>09:00 – 17:00</td>
          </tr>
          <tr>
            <td>Per</td>
            <td>09:00 – 17:00</td>
          </tr>
          <tr>
            <td>Cum</td>
            <td>09:00 – 17:00</td>
          </tr>
          <tr>
            <td>Cmt</td>
            <td>Kapalı</td>
          </tr>
          <tr>
            <td>Paz</td>
            <td>Kapalı</td>
          </tr>
        </tbody>
      </table>
    </div>
  );

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

      {date ? fullDate : partialDate}

      <p className={styles.lightText}>
        Telif Hakkı © 2022 PEYK - Tüm Hakları Saklıdır.
      </p>
    </footer>
  );
};

export default Footer;
