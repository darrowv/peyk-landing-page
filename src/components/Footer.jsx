import React, { useState } from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const [date, setDate] = useState(false);

  const partialDate = (
    <div>
      Bugün açık 09:00 – 17:00{" "}
      <span onClick={() => setDate(true)} className="material-symbols-outlined">expand_more</span>
    </div>
  );

  const fullDate = (
    <div>
      <span onClick={() => setDate(false)} className="material-symbols-outlined">expand_less</span>
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
