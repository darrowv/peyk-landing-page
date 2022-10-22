import React, { useState } from "react";
import styles from "./EmailForm.module.css";

const EmailForm = () => {
  const [showFormField, setShowFormField] = useState(false);

  const formField = (
    <>
      <div className={styles.formContainer}>
        <div className={styles.formHeader}>
          <p>PEYK</p>
        </div>
        <div className={styles.formText}>
          <p>
            Merhaba! Size nasıl yardımcı olabileceğimizi belirtirseniz, size
            kısa sürede dönüş yapabiliriz.
          </p>
        </div>

        {/* Форма для отправки на почту */}

        <form id="form-ask-us" className={styles.emailForm}>
          <input
            className={styles.nameInput}
            id="form-ask-us-name"
            name="ask-us-name"
            required
            type="text"
            placeholder="İsim*"
          />
          <input
            className={styles.emailInput}
            id="form-ask-us-email"
            name="ask-us-email"
            required
            type="email"
            placeholder="E-posta*"
          />
          <textarea
            className={styles.textInput}
            id="form-ask-us-text"
            name="ask-us-text"
            required
            placeholder="Size nasıl yardımcı olabiliriz?*"
          ></textarea>
          <input className={styles.submitButton} value="Gönder" type="submit" />
        </form>
      </div>

      <div
        onClick={() => setShowFormField(false)}
        className={styles.closeButton}
      >
        <span className={`material-symbols-outlined ${styles.closeButtonIcon}`}>
          close
        </span>
      </div>
    </>
  );

  return (
    <div>
      {showFormField ? (
        formField
      ) : (
        <div
          onClick={() => setShowFormField(true)}
          className={styles.emailButton}
        >
          <span
            className={`material-symbols-outlined ${styles.emailButtonIcon}`}
          >
            chat_bubble
          </span>
        </div>
      )}
    </div>
  );
};

export default EmailForm;
