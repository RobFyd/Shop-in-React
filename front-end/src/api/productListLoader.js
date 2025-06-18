import { BACK_END_URL } from "../constants/api";

export function productListLoader({ params: { gender, category } }) {
  return fetch(`${BACK_END_URL}/products`);
}
