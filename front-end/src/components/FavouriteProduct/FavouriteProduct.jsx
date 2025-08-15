import styles from "./FavouriteProduct.module.css";
import REMOVE_ICON from "../../assets/remove.svg";
import BAG_ICON from "../../assets/bag.svg";
import { useFetcher } from "react-router-dom";
import { Price } from "../Price/Price";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function FavouriteProduct({ favourite }) {
  const product = favourite.product;
  const { Form } = useFetcher();

  const price = <Price product={product} />;

  const [, setCartItems] = useContext(CartContext);

  return (
    <div className={styles.favouriteProduct}>
      <img src={product.photos[0]} />
      <div className={styles.favouriteProductInfo}>
        <div className={styles.topRow}>
          <h3>
            {product.brand} {product.productName}
          </h3>
          <p>{price}</p>
        </div>
        <p className={styles.priceRow}>
          <span>Price: </span>
          {price}
        </p>
        <div className={styles.buttonRow}>
          <Form
            action={`/delete-from-favourites/${favourite.id}`}
            method="DELETE"
          >
            <button>
              <img src={REMOVE_ICON} alt="Remove" />
              Remove
            </button>
          </Form>
          <button
            onClick={() => {
              setCartItems((previousCartItems) => {
                return [...previousCartItems, product];
              });
            }}
          >
            <img src={BAG_ICON} alt="Add to cart" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
