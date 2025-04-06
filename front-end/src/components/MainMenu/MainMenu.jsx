import { NavLink } from "react-router-dom";
import styles from "./MainMenu.module.css";

export function MainMenu() {
  const genders = [
    {
      categoryName: "Women",
      path: "women",
    },
    {
      categoryName: "Men",
      path: "men",
    },
    {
      categoryName: "Kids",
      path: "kids",
    },
  ];
  return (
    <ul className={styles.mainMenu}>
      {genders.map((cat) => {
        return (
          <li key={cat.path}>
            <NavLink to={cat.path}>{cat.categoryName}</NavLink>
          </li>
        );
      })}
    </ul>
  );
}
