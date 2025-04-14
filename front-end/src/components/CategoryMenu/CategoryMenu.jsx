import { CATEGORIES } from "../../constants/categories";
import { NavLink } from "react-router-dom";
import styles from "./CategoryMenu.module.css";

export function CategoryMenu() {
  return (
    <div className={styles.categoryMenu}>
      <ul>
        {CATEGORIES.map((category) => {
          return (
            <li key={category.path}>
              <NavLink to={category.path}>{category.categoryName}</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
