import styled from 'styled-components';
import sliderImage from '../assets/Rectangle 5.png';
const Slider = () => {
  return (
    <Container>
      <Image src={sliderImage}></Image>
    </Container>
  );
};

export default Slider;

const Container = styled.div`
  width: 100%;
  height: 250px;
  overflow: hidden;
  color: #fff;
`;

const Image = styled.img`
  width: 100%;
  object-fit: contain;
`;
