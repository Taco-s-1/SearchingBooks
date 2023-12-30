import React, { ChangeEvent, useState } from 'react';
import { styled } from 'styled-components';
import { IcSearch } from '../assets/svgs';

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };

  return (
    <Container>
      <SearchSection>
        <Input
          type="text"
          value={searchValue}
          placeholder="search books!!"
          onChange={handleSearchValue}
        ></Input>
        <StyledIcSearch />
      </SearchSection>
      <MainSection></MainSection>
    </Container>
  );
};

export default SearchPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10rem;
`;

const SearchSection = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 50rem;
  height: 5rem;
  padding: 1rem 5rem 1rem 2rem;
  border-radius: 15px;

  &:focus {
    border: 2px solid #c45757;
    outline: none;
  }
`;

const StyledIcSearch = styled(IcSearch)`
  position: absolute;
  right: 2rem;
  &:hover {
    circle,
    path {
      stroke: #c45757;
    }
  }
`;

const MainSection = styled.div``;
