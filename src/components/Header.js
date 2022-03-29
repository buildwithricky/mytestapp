import styled from 'styled-components';
import { colors } from './component.utils.js';

const Header = () => {
  return (
    <Container>
      <H1>MyTestApp</H1>
    </Container>
  );
};

export default Header;
const Container = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 20px 80px;
  background-color: ${colors.header};
`;

const H1 = styled.h1`
  color: #fff;
  border: 1px solid #fff;
  padding: 10px;
  width: max-content;
`;
