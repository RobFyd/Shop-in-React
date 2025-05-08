import { Layout } from "../../components/Layout/Layout.jsx";
import { FlexContainer } from "../../components/FlexContainer/FlexContainer.jsx";
import { ExpandableMenu } from "../../components/ExpandableMenu/ExpandableMenu.jsx";

export function ProductsList() {
  return (
    <Layout>
      <FlexContainer>
        <ExpandableMenu />
      </FlexContainer>
    </Layout>
  );
}
