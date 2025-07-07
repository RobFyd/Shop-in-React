import { useLoaderData } from "react-router-dom";
import { FavoritesList } from "../../components/FavoritesList/FavoritesList";

export function Favorites() {
  const favoritesProducts = useLoaderData();
  return <FavoritesList favourites={favoritesProducts} />;
}
