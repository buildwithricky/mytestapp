import styled from 'styled-components';

const Search = () => {
  return (
    <Container>
      <h1
        style={{
          fontWeight: 400,
          fontStyle: 'normal',

          fontSize: '24px',
          lineHeight: '31.25px',
        }}>
        Search
      </h1>
      <SearchInput />
    </Container>
  );
};

export default Search;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const SearchInput = styled.input`
  flex: 1;
  height: 54px;
  padding: 10px;
`;
