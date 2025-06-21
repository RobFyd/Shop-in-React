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

  let foundSubcategory;

  if (params.subcategory) {
    foundSubcategory = foundCategory.subcategories.find(
      (sc) => sc.path === params.subcategory
    );
  }

  return (
    <FlexContainer>
      <ExpandableMenu />
      <div>
        <Breadcrumbs />
        <Products
          headerText={
            foundSubcategory
              ? foundSubcategory.categoryName
              : foundCategory.categoryName
          }
          products={products}
        />
        <Pagination numberOfPages={5} />
      </div>
    </FlexContainer>
  );
}
