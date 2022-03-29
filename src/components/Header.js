import styled from 'styled-components';
import { colors } from './component.utils.js';
import logo from '../assets/Logo.png';
const Header = () => {
  return (
    <Container>
      <H1>
        <img src={logo} alt="logo" />
      </H1>
    </Container>
  );
};

export default Header;
const Container = styled.div`
  height: 140px;
  display: flex;
  align-items: center;
  padding: 20px 80px;
  background-color: ${colors.header};
  @media (max-width: 834px) {
    justify-content: center;
  }
  @media (max-width: 564px) {
    height: 67px;
  }
`;

const H1 = styled.h1`
  color: #fff;

  padding: 10px;
  width: max-content;
`;
