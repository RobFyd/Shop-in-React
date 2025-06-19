import { FlexContainer } from "../../components/FlexContainer/FlexContainer.jsx";
import { ExpandableMenu } from "../../components/ExpandableMenu/ExpandableMenu.jsx";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs.jsx";
import { Products } from "../../components/Products/Products.jsx";
import { Pagination } from "../Pagination/Pagination.jsx";
import { useLoaderData, useParams } from "react-router-dom";
import { CATEGORIES } from "../../constants/categories.js";

export function ProductsList() {
  const products = useLoaderData();
  const params = useParams();

  const foundCategory = CATEGORIES.find((c) => c.path === params.category);

  return (
    <FlexContainer>
      <ExpandableMenu />
      <div>
        <Breadcrumbs />
        <Products headerText={foundCategory.categoryName} products={products} />
        <Pagination numberOfPages={5} />
      </div>
    </FlexContainer>
  );
}
