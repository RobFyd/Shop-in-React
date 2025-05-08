import { CATEGORIES } from "../../constants/categories";
import { NavLink } from "react-router-dom";
import ARROW_ICON from "../../assets/arrow.svg";

export function ExpandableMenu() {
  return (
    <div>
      <p>Women</p>
      <ul>
        {CATEGORIES.map((category) => {
          return (
            <li key={category.path}>
              <NavLink>
                {category.categoryName} <img src={ARROW_ICON} alt="arrow" />
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
