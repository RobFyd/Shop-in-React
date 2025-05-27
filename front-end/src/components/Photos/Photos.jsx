import style from "./Photos.module.css";
import { FlexContainer } from "../FlexContainer/FlexContainer";
import { useState } from "react";

export function Photos({ product }) {
  const [currentPhoto, setCurrentPhoto] = useState(product.photos[0]);

  return (
    <FlexContainer>
      <div className={style.thumbnails}>
        {product.photos.map((photo) => {
          return (
            <img
              className={currentPhoto === photo ? style.active : ""}
              onClick={() => setCurrentPhoto(photo)}
              key={photo}
              src={photo}
            />
          );
        })}
      </div>
      <img className={style.mainPhoto} src={currentPhoto} />
    </FlexContainer>
  );
}
