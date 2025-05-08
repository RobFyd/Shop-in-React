import { CATEGORIES } from "../../constants/categories";
import { NavLink } from "react-router-dom";
// import ARROW_ICON from "../../assets/icons/arrow.svg";

export function ExpandableMenu() {
  return (
    <div>
      <p>Women</p>
      <ul>
        {CATEGORIES.map((category) => {
          return (
            <li>
              <NavLink>{category.categoryName}</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
