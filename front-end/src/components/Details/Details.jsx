import styles from "./Details.module.css";
import CAR_ICON from "../../assets/car.svg";
import RETURN_ICON from "../../assets/return.svg";
import { FullWidthButton } from "../FullWidthButton/FullWidthButton";
import { Accordion } from "../Accordion/Accordion";

export function Details({ product }) {
  const accordionContent = [
    {
      title: "Description",
      content: product.description,
    },
    {
      title: "Maintenance Info",
      content: product.maintenanceInfo,
    },
  ];

  return (
    <div className={styles.details}>
      <h2>{product.brand}</h2>
      <p className={styles.productName}>{product.productName}</p>
      <p className={styles.price}>{product.priceGBP} GBP</p>

      <FullWidthButton isBlack={true} icon={CAR_ICON} text="Add to Cart">
        Add to Cart
      </FullWidthButton>

      <ul className={styles.extraInfo}>
        <li>
          <img src={CAR_ICON} />
          Delivery in 3-5 days
        </li>
        <li>
          <img src={RETURN_ICON} />
          Free returns within 30 days
        </li>
      </ul>

      <Accordion items={accordionContent} />
    </div>
  );
}
