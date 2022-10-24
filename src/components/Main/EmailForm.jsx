import React, { useState } from "react";
import styles from "./EmailForm.module.css";

const EmailForm = () => {
  const [showFormField, setShowFormField] = useState(false);

  const formField = (
    <>
      <div className={styles.formContainer}>
        <div className={styles.formHeader}>
          <p>PEYK</p>
          <div onClick={() => setShowFormField(false)} className={styles.closeForMobile}>
            <span
              className={`material-symbols-outlined ${styles.closeForMobileIcon}`}
            >
              close
            </span>
          </div>
        </div>
        <div className={styles.formText}>
          <p>
            Merhaba! Size nasıl yardımcı olabileceğimizi belirtirseniz, size
            kısa sürede dönüş yapabiliriz.
          </p>
        </div>

        {/* Форма для отправки на почту */}

        <form
          action="https://formsubmit.co/nasirmaga45@gmail.com"
          method="POST"
          className={styles.emailForm}
        >
          <input type="hidden" name="_template" value="table" />
          <input
            className={styles.nameInput}
            name="name"
            required
            maxLength={45}
            type="text"
            placeholder="İsim*"
          />
          <input
            className={styles.emailInput}
            name="email"
            required
            type="email"
            placeholder="E-posta*"
          />
          <textarea
            className={styles.textInput}
            name="message"
            required
            maxLength={400}
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
