import styles from "./CartSummary.module.css";
import { FullWidthButton } from "../FullWidthButton/FullWidthButton";
import CAR_ICON from "../../assets/car.svg";
import { useContext } from "react";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import { CURRENCIES, CURRENCY_SIGN } from "../../constants/currencies";

export function CartSummary({ products }) {
  const [currency] = useContext(CurrencyContext);

  const deliveryCosts = {
    [CURRENCIES.GBP]: 10,
    [CURRENCIES.PLN]: 50,
  };

  const minSumsForFreeDelivery = {
    [CURRENCIES.GBP]: 100,
    [CURRENCIES.PLN]: 250,
  };

  const currencySign = CURRENCY_SIGN[currency];

  const deliveryCost = deliveryCosts[currency];
  const minSumForFreeDelivery = minSumsForFreeDelivery[currency];

  let sum = 0;
  products.forEach((product) => {
    sum += currency === CURRENCIES.PLN ? product.pricePLN : product.priceGBP;
  });

  const totalCost = sum > minSumForFreeDelivery ? sum : sum + deliveryCost;

  return (
    <div className={styles.cartSummary}>
      <h2>Summary</h2>
      <div className={styles.cartRow}>
        <p>Value of products:</p>
        <p>
          {sum}
          {currencySign}
        </p>
      </div>
      <div className={styles.cartRow}>
        <p>Shipping cost:</p>
        <p>
          {sum > minSumForFreeDelivery ? 0 : deliveryCost}
          {currencySign}
        </p>
      </div>
      <div className={`${styles.cartRow} ${styles.cartSummaryRow}`}>
        <p>To be paid:</p>
        <p>
          {totalCost}
          {currencySign}
        </p>
      </div>
      <FullWidthButton isBlack={true}>Checkout</FullWidthButton>
      <div className={styles.deliveryInfo}>
        <img src={CAR_ICON} />
        <p>
          Free delivery over {minSumForFreeDelivery}
          {currencySign}
        </p>
      </div>
    </div>
  );
}
