import styled from "styled-components";
function Section({ title, description, bgImg, leftBtnTxt, rightBtnTxt }) {
  return (
    <Wrap bgImg={bgImg}>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>{leftBtnTxt}</LeftButton>
          {rightBtnTxt && <RightButton>{rightBtnTxt}</RightButton>}
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg"></DownArrow>
      </Buttons>
    </Wrap>
  );
}
export default Section;
const WrapBgImg = styled.div``;
const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("/images/model-s.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url("/images/${props.bgImg}")`};
`;
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: column;
`;
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;
const RightButton = styled(LeftButton)`
  background: white;
  color: black;
  opacity: 0.65;
`;
const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
`;
