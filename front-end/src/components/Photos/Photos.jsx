import { FlexContainer } from "../FlexContainer/FlexContainer";

export function Photos({ product }) {
  return (
    <FlexContainer>
      <div>
        {product.photos.map((photo) => {
          return <img key={photo} src={photo} />;
        })}
      </div>
      <img src={product.photos[0]} />
    </FlexContainer>
  );
}
