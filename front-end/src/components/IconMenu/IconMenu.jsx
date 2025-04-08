import styles from "./IconMenu.module.css";
import { Link } from "react-router-dom";

export function IconMenu() {
  return (
    <ul className={styles}>
      <li>
        <Link to="/favorite"></Link>
      </li>
      <li>
        <Link to="/basket"></Link>
      </li>
    </ul>
  );
}
