import styles from "./Product.module.css";
import { Link, useFetcher } from "react-router-dom";

const ENDPOINT_TO_PATH_MAPPING = {
  women: "women",
  men: "men",
  children: "kids",
};

export function Product({ product }) {
  const { Form } = useFetcher();
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
      <Form
        onClick={(e) => {
          e.stopPropagation();
        }}
        method="POST"
        action={`/add-to-favorites/${product.id}`}
      >
        <button>
          <div className={styles.heart}></div>
        </button>
      </Form>
    </Link>
  );
}
