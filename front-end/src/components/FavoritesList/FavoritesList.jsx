import { CeneteredContent } from "../CenteredContent/CenteredContent";
import { FavoriteProduct } from "../FavoriteProduct/FavoriteProduct";

export function FavoritesList({ products }) {
  return (
    <CeneteredContent>
      <h2>Favorite</h2>
      <div>
        {products.map((product) => {
          return <FavoriteProduct key={product.id} product={product} />;
        })}
      </div>
    </CeneteredContent>
  );
}
