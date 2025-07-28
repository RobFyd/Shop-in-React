import styles from "./CartProduct.module.css";
import REMOVE_ICON from "../../assets/remove.svg";
import { Price } from "../Price/Price";

export function CartProduct({ product }) {
  const price = <Price product={product} />;

  return (
    <div className={styles.favoriteProduct}>
      <img src={product.photos[0]} />
      <div className={styles.favoriteProductInfo}>
        <div className={styles.topRow}>
          <h3>
            {product.brand} {product.productName}
          </h3>
          <p>{price}</p>
        </div>
        <p className={styles.priceRow}>
          <span>Price: </span>
          {price}
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
