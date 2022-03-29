import styled from 'styled-components';

const MovieCard = ({ movie }) => {
  return (
    <Container>
      <H1>$movie mane</H1>
    </Container>
  );
};

export default MovieCard;

const Container = styled.div`
  height: 300px;
  width: 300px;
  background-color: #000;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  align-items: center;
`;
const H1 = styled.h1`
  color: #fff;
`;
