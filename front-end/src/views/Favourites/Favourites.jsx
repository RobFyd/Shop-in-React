import { useLoaderData } from "react-router-dom";
import { FavouritesList } from "../../components/FavouritesList/FavouritesList";

export function Favourites() {
  const favouritesProducts = useLoaderData();
  return <FavouritesList favourites={favouritesProducts} />;
}
