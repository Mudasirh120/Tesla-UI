import styled from "styled-components";
import Section from "./Section";
function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        bgImg="model-s.jpg"
        leftBtnTxt="Custom Order"
        rightBtnTxt="Existing Inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        bgImg="model-y.jpg"
        leftBtnTxt="Custom Order"
        rightBtnTxt="Existing Inventory"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        bgImg="model-3.jpg"
        leftBtnTxt="Custom Order"
        rightBtnTxt="Existing Inventory"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        bgImg="model-x.jpg"
        leftBtnTxt="Custom Order"
        rightBtnTxt="Existing Inventory"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        bgImg="solar-panel.jpg"
        leftBtnTxt="Order now"
        rightBtnTxt="Learn more"
      />
      <Section
        title="Solar for New Roofs"
        description="Solar Roof Costs Less Than a New Roof"
        bgImg="solar-roof.jpg"
        leftBtnTxt="Order now"
        rightBtnTxt="Learn more"
      />
      <Section
        title="Accessories"
        description=""
        bgImg="accessories.jpg"
        leftBtnTxt="Shop now"
        // rightBtnTxt=""
      />
    </Container>
  );
}

export default Home;
const Container = styled.div``;
