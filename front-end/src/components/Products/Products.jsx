import styles from "./Products.module.css";
import { CeneteredContent } from "../CenteredContent/CenteredContent";
import { Product } from "../Product/Product";

export function Products({ products, headerText }) {
  return (
    <CeneteredContent>
      <h2 className={styles.bestsellerHeader}>{headerText}</h2>
      <div className={styles.productsWrapper}>
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </CeneteredContent>
  );
}
