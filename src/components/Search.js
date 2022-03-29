import styled from 'styled-components';

const Search = () => {
  return (
    <Container>
      <H1>Search</H1>
      <SearchInput />
    </Container>
  );
};

export default Search;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const H1 = styled.h1`
  font-weight: 400;
  font-style: normal;
  font-size: 24px;
  line-height: 31.25px;

  @media (max-width: 324px) {
    font-size: 20.83px;
    line-height: 16px;
  }
`;
const SearchInput = styled.input`
  flex: 1;
  height: 54px;
  padding: 10px;
`;
