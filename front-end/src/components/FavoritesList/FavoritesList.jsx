import styles from "./FavoritesList.module.css";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import { FavoriteProduct } from "../FavoriteProduct/FavoriteProduct";

export function FavoritesList({ favourites }) {
  return (
    <CenteredContent>
      <div className={styles.favoritesList}>
        <h2>Favorite</h2>
        <div>
          {favourites.map(({ product }) => {
            return <FavoriteProduct key={product.id} product={product} />;
          })}
        </div>
      </div>
    </CenteredContent>
  );
}
