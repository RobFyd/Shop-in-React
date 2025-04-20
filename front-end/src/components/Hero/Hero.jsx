import style from "./Hero.module.css";
import { CeneteredContent } from "../CenteredContent/CenteredContent";
import { FullWidthButton } from "../FullWidthButton/FullWidthButton";

export function Hero({ heroImage }) {
  return (
    <div
      className={style.hero}
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <CeneteredContent>
        <div className={style.contentWrapper}>
          <h2>Summer promotions up to -70%</h2>
          <p>Only the best deals!</p>
          <FullWidthButton>Check out the products</FullWidthButton>
        </div>
      </CeneteredContent>
    </div>
  );
}
