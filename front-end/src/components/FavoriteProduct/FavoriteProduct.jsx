import REMOVE_ICON from "../../assets/remove.svg";
import BAG_ICON from "../../assets/bag.svg";

export function FavoriteProduct({ product }) {
  return (
    <div>
      <img src={product.photos[0]} />
      <div>
        <div>
          <h3>
            {product.brand} {product.productName}
          </h3>
          <p>{product.priceGBP}£</p>
        </div>
        <p>
          <span>Price: </span>
          {product.priceGBP}£
        </p>
        <div>
          <button>
            <img src={REMOVE_ICON} alt="Remove" />
            Remove
          </button>
          <button>
            <img src={BAG_ICON} alt="Add to cart" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
