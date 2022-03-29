import styled from 'styled-components';
import Title from './Title';
import MovieCard from './MovieCard';
const MovieList = ({ category }) => {
  return (
    <Container>
      <Title />
      {/* {category.map} */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
        }}>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </Container>
  );
};
export default MovieList;
const Container = styled.div`
  overflow-x: hidden;
  display: flex;
  border: 1px solid red;
  flex-direction: column;
`;
