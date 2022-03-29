import styled from 'styled-components';

const Title = ({ movieCategory }) => {
  return (
    <Container>
      <H1>{movieCategory[0]}</H1>
    </Container>
  );
};

export default Title;
const Container = styled.div``;
const H1 = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 31px;
  @media (320px) {
    font-size: 18px;
    line-height: 23.44px;
  }
`;
