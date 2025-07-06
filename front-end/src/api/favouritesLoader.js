import { BACK_END_URL } from "../constants/api";

export function loadFavourites() {
  return fetch(`${BACK_END_URL}/favourites`);
}
