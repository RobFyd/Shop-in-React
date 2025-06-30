import styles from "./Product.module.css";
import { Link } from "react-router-dom";

const ENDPOINT_TO_PATH_MAPPING = {
  women: "women",
  men: "men",
  children: "children",
};

export function Product({ product }) {
  return (
    <Link
      to={`/${ENDPOINT_TO_PATH_MAPPING[product.gender]}/${product.category}/${
        product.subcategory
      }/${product.id}`}
      className={styles.product}
    >
      <img src={product.photos[0]} />
      <h3>{product.productName}</h3>
      <p>{product.priceGBP}£</p>
      <div className={styles.heart}></div>
    </Link>
  );
}
