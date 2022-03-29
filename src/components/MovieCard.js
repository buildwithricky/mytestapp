import styled from 'styled-components';

const MovieCard = ({ movie }) => {
  return (
    <Container movieImage={movie.Poster}>
      <H1>{movie.Title}</H1>
    </Container>
  );
};

export default MovieCard;

const Container = styled.div`
  min-height: 250px;
  min-width: 250px;
  background-color: #000;
  display: grid;
  margin-right: 10px;
  justify-content: center;
  border-radius: 10px;
  align-items: center;
  padding: 10px;
  background-image: url(${(props) =>
    props.movieImage}});
`;
const H1 = styled.h1`
  color: #fff;
`;
