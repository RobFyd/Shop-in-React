import { useContext } from "react";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import { CURRENCIES, CURRENCY_SIGN } from "../../constants/currencies";

export function Price({ product }) {
  const [currency] = useContext(CurrencyContext);
  return (
    <>
      {currency === CURRENCIES.PLN ? product.pricePLN : product.priceGBP}
      {CURRENCY_SIGN[currency]}
    </>
  );
}
