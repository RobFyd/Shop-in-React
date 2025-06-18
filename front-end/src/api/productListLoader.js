import { BACK_END_URL, PATH_TO_ENDPOINT_MAPPING } from "../constants/api";

export function productListLoader({ params: { gender, category } }) {
  return fetch(
    `${BACK_END_URL}/products/?gender=${PATH_TO_ENDPOINT_MAPPING[gender]}&category=${category}`
  );
}
