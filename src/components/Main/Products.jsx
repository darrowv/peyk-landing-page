import React from "react";
import styles from "./Products.module.css";
import products from "../../assets/products.json";

const Products = () => {
  return (
    <div className={styles.products}>
      <p className={styles.productsTitle}>ÜRÜN LİSTESİ</p>
      <div className={styles.productCards}>
        {products.map((prod) => {
          return (
            <div className={styles.card} key={prod.id}>
              <img className={styles.prodImg} src={prod.img} alt="product" />
              <span className={styles.prodTitle}>{prod.title}</span>
              <p className={styles.prodText}>{prod.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
