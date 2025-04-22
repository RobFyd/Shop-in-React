import { CeneteredContent } from "../CenteredContent/CenteredContent";
import { Product } from "../Product/Product";

export function Bestsellers({ products }) {
  return (
    <CeneteredContent>
      <h2>Check out our bestsellers</h2>
      <div>
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </CeneteredContent>
  );
}
