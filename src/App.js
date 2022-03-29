import styled from 'styled-components';
import Header from './components/Header';
import Slider from './components/Slider';
import axios from 'axios';
import Search from './components/Search';
import MovieList from './components/MovieList';
import { useEffect, useState } from 'react';

const apiKey = 'f09fbd93';
const baseUrl = `https://omdbapi.com/?apikey=${apiKey}`;
function App() {
  const [movie, setMovies] = useState([]);
  const [message, setMessage] = useState('');
  const [searchText, setSearchText] =
    useState('');
  const [results, setResults] = useState('');

  useEffect(() => {
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
  }, []);

  // search useeffect
  useEffect(() => {
    const searchApi = async (value) => {
      const response = await axios.get(
        `${baseUrl}&s=${value}&type=movie&page=1`
      );

      const searchResult = await response.data
        .Search;
      if (!searchResult) {
        setMessage('no results found');
        return;
      }
      setResults(searchResult);
    };
    searchApi(searchText);
  }, [searchText]);
  return (
    <Container>
      <Header />
      <Slider />
      {movie.length > 1 ? (
        <div style={{
          marginBottom:"200px"
        }}>
          {searchText ? (
            <>
              <div
                style={{
                  margin: '15px 77px',
                }}>
                <Search
                  searchText={searchText}
                  setSearchText={setSearchText}
                />
              </div>
              <div
                style={{
                  margin: '15px 0px 0px 77px',
                }}>
                {/* <Search /> */}
                {results.length > 1 ? (
                  <MovieList
                    movieData={results}
                  />
                ) : (
                  <h1>{message}</h1>
                )}
              </div>
            </>
          ) : (
            <>
              <div
                style={{
                  margin: '15px 77px',
                }}>
                <Search
                  searchText={searchText}
                  setSearchText={setSearchText}
                />
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
          )}
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
