import styles from "./CartProduct.module.css";
import REMOVE_ICON from "../../assets/remove.svg";

export function CartProduct({ product }) {
  return (
    <div className={styles.favoriteProduct}>
      <img src={product.photos[0]} />
      <div className={styles.favoriteProductInfo}>
        <div className={styles.topRow}>
          <h3>
            {product.brand} {product.productName}
          </h3>
          <p>£{product.priceGBP}</p>
        </div>
        <p className={styles.priceRow}>
          <span>Price: </span>£{product.priceGBP}
        </p>
        <div className={styles.buttonRow}>
          <button>
            <img src={REMOVE_ICON} alt="Remove" />
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
