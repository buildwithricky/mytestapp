import styled from 'styled-components';
import Title from './Title';
import MovieCard from './MovieCard';
const MovieList = ({ movieData }) => {
  return (
    <Container>
      <Title />

      <div
        style={{
          display: 'flex',
        }}>
        {movieData.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>
    </Container>
  );
};
export default MovieList;
const Container = styled.div`
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  width: 200vh;
`;
