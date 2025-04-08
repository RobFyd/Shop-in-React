import { CURRENCIES } from "../../constants/currencies";
import styles from "./CurrencySelector.module.css";

export function CurrencySelector() {
  return (
    <select>
      <option value={CURRENCIES.GBP} className={styles.option}>
        {CURRENCIES.GBP}
      </option>
      <option value={CURRENCIES.PLN} className={styles.option}>
        {CURRENCIES.PLN}
      </option>
      <option value={CURRENCIES.USD} className={styles.option}>
        {CURRENCIES.USD}
      </option>
    </select>
  );
}
