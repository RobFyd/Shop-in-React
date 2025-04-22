import styles from "./Product.module.css";
import { Link } from "react-router-dom";

export function Product({ product }) {
  return (
    <Link className={styles.product}>
      <img src={product.photos[0]} />
      <h3>{product.productName}</h3>
      <p>{product.priceGBP}</p>
      <div className={styles.heart}></div>
    </Link>
  );
}
