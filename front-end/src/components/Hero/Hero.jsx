import style from "./Hero.module.css";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import { FullWidthButton } from "../FullWidthButton/FullWidthButton";

export function Hero({ heroImage }) {
  return (
    <div
      className={style.hero}
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <CenteredContent>
        <div className={style.contentWrapper}>
          <h2>Promotions up to -70%</h2>
          <p>Only the best deals!</p>
          <FullWidthButton>Check out the products</FullWidthButton>
        </div>
      </CenteredContent>
    </div>
  );
}
