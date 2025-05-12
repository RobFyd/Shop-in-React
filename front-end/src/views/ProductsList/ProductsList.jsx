import { Layout } from "../../components/Layout/Layout.jsx";
import { FlexContainer } from "../../components/FlexContainer/FlexContainer.jsx";
import { ExpandableMenu } from "../../components/ExpandableMenu/ExpandableMenu.jsx";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs.jsx";

export function ProductsList() {
  return (
    <Layout>
      <FlexContainer>
        <ExpandableMenu />
        <Breadcrumbs />
      </FlexContainer>
    </Layout>
  );
}
