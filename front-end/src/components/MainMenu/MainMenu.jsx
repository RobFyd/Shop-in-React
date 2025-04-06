import styles from "./MainMenu.module.css";
import { GENDERS } from "../../constants/categories";
import { NavLink } from "react-router-dom";

export function MainMenu() {
  return (
    <ul className={styles.mainMenu}>
      {GENDERS.map((cat) => {
        return (
          <li key={cat.path}>
            <NavLink to={cat.path}>{cat.categoryName}</NavLink>
          </li>
        );
      })}
    </ul>
  );
}
