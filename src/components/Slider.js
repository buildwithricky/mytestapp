import styled from 'styled-components';
import sliderImage from '../assets/Rectangle 5.png';
const Slider = () => {
  return (
    <Container>
      <H1>Watch something incredible.</H1>
    </Container>
  );
};

export default Slider;

const Container = styled.div`
  width: 100%;
  height: 550px;
  display: flex;
  overflow: hidden;
  color: #fff;
  background-image: url('${sliderImage}');
  @media (max-width: 564px) {
    height: 257px;
    align-items: center;
    justify-content: center;
  }
`;

const H1 = styled.h1`
  color: #fff;
  font-weight: 700;
  font-size: 72px;
line height: 94px;
letter-spacing: -5%;
  padding: 107px 0px 0px 70px;
  width: 490px;
    @media (max-width: 834px) {
    text-align:center
  } ;
  
  @media (max-width: 564px) {
    width: 273px;
height: 72px;
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 36px;
letter-spacing: -0.05em;
   padding: 0px 0px 0px 0px;
`;
