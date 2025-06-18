import { redirect } from "react-router-dom";
import { BACK_END_URL, PATH_TO_ENDPOINT_MAPPING } from "../constants/api";
import { CATEGORIES } from "../constants/categories";

export function productListLoader({ params: { gender, category } }) {
  const foundCategory = CATEGORIES.find((c) => c.path === category);

  if (foundCategory) {
    return fetch(
      `${BACK_END_URL}/products/?gender=${PATH_TO_ENDPOINT_MAPPING[gender]}&category=${category}`
    );
  } else {
    redirect("/main");
  }
}
