import { Layout } from "../../components/Layout/Layout";
import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { ExpandableMenu } from "../../components/ExpandableMenu/ExpandableMenu";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";

export function ProductDetails() {
  return (
    <Layout>
      <FlexContainer>
        <ExpandableMenu />
        <Breadcrumbs />
      </FlexContainer>
    </Layout>
  );
}
