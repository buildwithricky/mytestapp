import styled from 'styled-components';
import Title from './Title';
import MovieCard from './MovieCard';
const MovieList = ({ movieData }) => {
  return (
    <>
      <Title
        movieCategory={movieData[0].Title.split(
          ' '
        )}
      />
      <Container>
        <div
          style={{
            display: 'flex',
          }}>
          {movieData.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      </Container>
    </>
  );
};
export default MovieList;
const Container = styled.div`
  display: flex;
  cursor: pointer;
  overflow-x: scroll;
  flex-direction: column;
  ::-webkit-scrollbar {
    display: none;
  }
`;
