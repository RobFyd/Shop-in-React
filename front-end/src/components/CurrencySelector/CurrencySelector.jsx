import { CURRENCIES } from "../../constants/currencies";
import { useContext } from "react";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import styles from "./CurrencySelector.module.css";

export function CurrencySelector() {
  const [currency, setCurrency] = useContext(CurrencyContext);
  console.log(currency);
  return (
    <select
      onChange={(e) => {
        setCurrency(e.currentTarget.value);
      }}
      className={styles.currencySelector}
    >
      <option value={CURRENCIES.GBP}>{CURRENCIES.GBP}</option>
      <option value={CURRENCIES.PLN}>{CURRENCIES.PLN}</option>
      <option value={CURRENCIES.USD}>{CURRENCIES.USD}</option>
    </select>
  );
}
