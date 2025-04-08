import styles from "./IconMenu.module.css";
import BAG from "../../assets/bag.svg";
import HEART from "../../assets/heart.svg";
import { Link } from "react-router-dom";

export function IconMenu() {
  return (
    <ul className={styles}>
      <li>
        <Link to="/favorite">
          <img src={BAG} />
        </Link>
      </li>
      <li>
        <Link to="/basket">
          <img src={HEART} />
        </Link>
      </li>
    </ul>
  );
}
