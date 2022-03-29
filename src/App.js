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
      const data = await response.data;

      setMovies(data.Search);
      console.log(data);
    };
    getMovies();
  }, []);
  return (
    <Container>
      <Header />
      <Slider />
      {movie.length > 1 ? (
        <div
          style={{
            padding: '15px 32px',
          }}>
          <Search />
          <MovieList movieData={movie} />
          <MovieList movieData={movie} />
        </div>
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
