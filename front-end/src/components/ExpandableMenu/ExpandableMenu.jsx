import styles from "./ExpandableMenu.module.css";
import { CATEGORIES } from "../../constants/categories";
import { NavLink } from "react-router-dom";
import ARROW_ICON from "../../assets/arrow.svg";

export function ExpandableMenu() {
  return (
    <div className={styles.expandableMenu}>
      <p>Women</p>
      <ul>
        {CATEGORIES.map((category) => {
          return (
            <li key={category.path}>
              <NavLink to={category.path}>
                {category.categoryName} <img src={ARROW_ICON} alt="arrow" />
              </NavLink>
              <ul>
                {category.subcategories.map((subcategory) => {
                  return (
                    <li key={subcategory.path}>
                      <NavLink to={subcategory.path}>
                        {subcategory.categoryName}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
