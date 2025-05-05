import styles from "./CartSummary.module.css";
import { FullWidthButton } from "../FullWidthButton/FullWidthButton";
import CAR_ICON from "../../assets/car.svg";

export function CartSummary({ products }) {
  const deliveryCost = 10;
  const minSummaryForFreeDelivery = 250;

  let sum = 0;
  products.forEach((product) => {
    sum += product.priceGBP;
  });

  return (
    <div className={styles.cartSummary}>
      <h2>Summary</h2>
      <div className={styles.cartRow}>
        <p>Value of products:</p>
        <p>£199</p>
      </div>
      <div className={styles.cartRow}>
        <p>Shipping cost:</p>
        <p>£10</p>
      </div>
      <div className={`${styles.cartRow} ${styles.cartSummaryRow}`}>
        <p>To be paid:</p>
        <p>£209</p>
      </div>
      <FullWidthButton isBlack={true}>Checkout</FullWidthButton>
      <div className={styles.deliveryInfo}>
        <img src={CAR_ICON} />
        <p>Free delivery over £250</p>
      </div>
    </div>
  );
}
