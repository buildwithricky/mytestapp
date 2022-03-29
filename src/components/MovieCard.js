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
  min-height: 300px;
  min-width: 300px;
  background-color: #000;
  display: grid;
  margin-right: 10px;
  justify-content: center;
  border-radius: 10px;
  align-items: center;
  padding: 10px;
  background: url(${(props) => props.movieImage}})
    no-repeat;
  background-size: 300px 300px;
  background-position: center;

  @media (320px) {
    min-height: 200px;
    min-width: 200px;
  }
`;
const H1 = styled.h1`
  color: #fff;

  font-style: regular;
  font-size: 24px;
  line-height: 31px;
  line-height: 100%;
  vertical-align: Center;

  @media (320px) {
    font-size: 18px;
    line-height: 23.44px;
  }
`;
