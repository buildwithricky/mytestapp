import styled from 'styled-components';
import Header from './components/Header';
import Slider from './components/Slider';
import axios from 'axios';
import Search from './components/Search';
import MovieList from './components/MovieList';
import { useEffect, useState } from 'react';
function App() {
  const [movie, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const apiKey = 'f09fbd93';
    const baseUrl = `https://omdbapi.com/?apikey=${apiKey}`;
    const getMovies = async () => {
      const response = await axios.get(
        `${baseUrl}&s=marvel&type=movie&page=1`
      );
      const responseList2 = await axios.get(
        `${baseUrl}&s=batman&type=movie&page=1`
      );

      const data2 = await responseList2.data;
      const data = await response.data;
      Promise.all([data2, data]).then((values) =>
        setMovies([
          values[0].Search,
          values[1].Search,
        ])
      );
    };
    getMovies();
  }, [movie]);
  return (
    <Container>
      <Header />
      <Slider />
      {movie.length > 1 ? (
        <>
          <div
            style={{
              margin: '15px 77px',
            }}>
            <Search />
          </div>
          <div
            style={{
              margin: '15px 0px 0px 77px',
            }}>
            {/* <Search /> */}
            <MovieList movieData={movie[0]} />
            <MovieList movieData={movie[1]} />
          </div>
        </>
      ) : (
        <p>loading...</p>
      )}
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100;
`;
