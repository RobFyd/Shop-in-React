import styles from "./Bestsellers.module.css";
import { CeneteredContent } from "../CenteredContent/CenteredContent";
import { Product } from "../Product/Product";

export function Bestsellers({ products }) {
  return (
    <CeneteredContent>
      <h2 className={styles.bestsellerHeader}>Check out our bestsellers</h2>
      <div className={styles.productsWrapper}>
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </CeneteredContent>
  );
}
