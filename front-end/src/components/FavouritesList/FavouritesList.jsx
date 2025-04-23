import { CeneteredContent } from "../CenteredContent/CenteredContent";
import { FavouriteProduct } from "../FavouriteProduct/FavouriteProduct";

export function FavouritesList({ products }) {
  return (
    <CeneteredContent>
      <h2>Favourite</h2>
      <div>
        {products.map((product) => {
          return <FavouriteProduct key={product.id} product={product} />;
        })}
      </div>
    </CeneteredContent>
  );
}
