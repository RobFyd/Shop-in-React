import { NavLink } from "react-router-dom";
import ARROW_ICON from "../../assets/arrow.svg";

export function Breadcrumbs() {
  const breadcrumbs = [
    {
      categoryName: "Women",
      path: "women",
    },
    {
      categoryName: "Clothes",
      path: "clothes",
    },
    {
      categoryName: "Sweaters",
      parh: "sweaters",
    },
  ];

  return (
    <ul>
      {breadcrumbs.map((breadcrumb) => {
        return (
          <li key={breadcrumb.path}>
            <NavLink to={breadcrumb.path}>
              {breadcrumb.categoryName} <img src={ARROW_ICON} />
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
