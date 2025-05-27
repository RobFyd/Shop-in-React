import CAR_ICON from "../../assets/car.svg";
import RETURN_ICON from "../../assets/return.svg";
import { FullWidthButton } from "../FullWidthButton/FullWidthButton";

export function Details({ product }) {
  return (
    <div>
      <h2>{product.brand}</h2>
      <p>{product.productName}</p>
      <p>{product.priceGBP} GBP</p>
      <FullWidthButton isBlack={true} icon={CAR_ICON} text="Add to Cart">
        Add to Cart
      </FullWidthButton>
      {/* <FullWidthButton icon={RETURN_ICON} text="Return Item" /> */}
      <ul>
        <li>
          <img src={CAR_ICON} />
          Delivery in 3-5 days
        </li>
        <li>
          <img src={RETURN_ICON} />
          Free returns within 30 days
        </li>
      </ul>
    </div>
  );
}
