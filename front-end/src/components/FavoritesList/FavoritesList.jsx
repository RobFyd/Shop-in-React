import styles from "./FavoritesList.module.css";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import { FavoriteProduct } from "../FavoriteProduct/FavoriteProduct";

export function FavoritesList({ favourites }) {
  return (
    <CenteredContent>
      <div className={styles.favoritesList}>
        <h2>Favorite</h2>
        <div>
          {favourites.map((favourite) => {
            return <FavoriteProduct key={favourite.id} favourite={favourite} />;
          })}
        </div>
      </div>
    </CenteredContent>
  );
}
