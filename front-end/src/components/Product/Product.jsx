import styles from "./Product.module.css";
import { Link, useFetcher } from "react-router-dom";
import { useContext } from "react";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import { CURRENCIES } from "../../constants/currencies";
import { CURRENCY_SIGN } from "../../constants/currencies.js";

const ENDPOINT_TO_PATH_MAPPING = {
  women: "women",
  men: "men",
  children: "kids",
};

export function Product({ product }) {
  const { Form } = useFetcher();
  const [currency] = useContext(CurrencyContext);
  return (
    <Link
      to={`/${ENDPOINT_TO_PATH_MAPPING[product.gender]}/${product.category}/${
        product.subcategory
      }/${product.id}`}
      className={styles.product}
    >
      <img src={product.photos[0]} />
      <h3>{product.productName}</h3>
      <p>
        {currency === CURRENCIES.PLN ? product.pricePLN : product.priceGBP}
        {CURRENCY_SIGN[currency]}
      </p>
      <Form
        onClick={(e) => {
          e.stopPropagation();
        }}
        method="POST"
        action={`/add-to-favourites/${product.id}`}
      >
        <button>
          <div className={styles.heart}></div>
        </button>
      </Form>
    </Link>
  );
}
