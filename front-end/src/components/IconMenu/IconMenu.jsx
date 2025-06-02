import styles from "./IconMenu.module.css";
import BAG from "../../assets/bag.svg";
import HEART from "../../assets/heart.svg";
import { Link } from "react-router-dom";

export function IconMenu() {
  const cartItems = 2;

  return (
    <ul className={styles.iconMenu}>
      <li>
        <Link to="/favorites">
          <img src={HEART} />
        </Link>
      </li>
      <li>
        <Link to="/cart">
          <img src={BAG} />
          <div className={styles.numberOfProducts}>{cartItems}</div>
        </Link>
      </li>
    </ul>
  );
}
