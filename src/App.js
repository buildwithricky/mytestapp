import styled from 'styled-components';
import Header from './components/Header';
import Slider from './components/Slider';
import Search from './components/Search';
import MovieList from './components/MovieList';
import { useEffect } from 'react';
function App() {
  const apiKey = 'f09fbd93';
  const baseUrl = `https://omdbapi.com/?apikey=${apikey}`;
  return (
    <Container>
      <Header />
      <Slider />
      <div
        style={{
          paddingLeft: '2rem',
        }}>
        <Search />
        <MovieList />
      </div>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100;
`;
