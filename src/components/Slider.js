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
  overflow: hidden;
  color: #fff;
  background-image: url('${sliderImage}');
`;

const H1 = styled.h1`
  color: #fff;
  font-weight: 700;
  font-size: 72px;
line height: 94px;
letter-spacing: -5%;
  padding: 107px 0px 0px 70px;
  width: 490px;
`;
