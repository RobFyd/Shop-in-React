import style from "./Photos.module.css";
import { FlexContainer } from "../FlexContainer/FlexContainer";

export function Photos({ product }) {
  return (
    <FlexContainer>
      <div className={style.thumbnails}>
        {product.photos.map((photo) => {
          return <img key={photo} src={photo} />;
        })}
      </div>
      <img className={style.mainPhoto} src={product.photos[0]} />
    </FlexContainer>
  );
}
