import styles from "./CartProductsList.module.css";
import { CeneteredContent } from "../CenteredContent/CenteredContent";
import { CartProduct } from "../CartProduct/CartProduct";

export function CartProductsList({ products }) {
  return (
    <CeneteredContent>
      <div className={styles.favoritesList}>
        <h2>Basket</h2>
        <div>
          {products.map((product) => {
            return <CartProduct key={product.id} product={product} />;
          })}
        </div>
      </div>
    </CeneteredContent>
  );
}
