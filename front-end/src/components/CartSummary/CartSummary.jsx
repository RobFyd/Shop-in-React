import styles from "./CartSummary.module.css";
import { FullWidthButton } from "../FullWidthButton/FullWidthButton";
import CAR_ICON from "../../assets/car.svg";
import { useContext } from "react";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import { CURRENCIES } from "../../constants/currencies";

export function CartSummary({ products }) {
  const deliverySums = {
    [CURRENCIES.GBP]: 10,
    [CURRENCIES.PLN]: 50,
  };

  const minSumsForFreeDelivery = {
    [CURRENCIES.GBP]: 100,
    [CURRENCIES.PLN]: 500,
  };

  const deliveryCost = 10;
  const minSumForFreeDelivery = 250;

  let sum = 0;
  products.forEach((product) => {
    sum += product.priceGBP;
  });

  const totalCost = sum > minSumForFreeDelivery ? sum : sum + deliveryCost;

  return (
    <div className={styles.cartSummary}>
      <h2>Summary</h2>
      <div className={styles.cartRow}>
        <p>Value of products:</p>
        <p>£{sum}</p>
      </div>
      <div className={styles.cartRow}>
        <p>Shipping cost:</p>
        <p>£{sum > minSumForFreeDelivery ? 0 : deliveryCost}</p>
      </div>
      <div className={`${styles.cartRow} ${styles.cartSummaryRow}`}>
        <p>To be paid:</p>
        <p>£{totalCost}</p>
      </div>
      <FullWidthButton isBlack={true}>Checkout</FullWidthButton>
      <div className={styles.deliveryInfo}>
        <img src={CAR_ICON} />
        <p>Free delivery over £{minSumForFreeDelivery}</p>
      </div>
    </div>
  );
}
