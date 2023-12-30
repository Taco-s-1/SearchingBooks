import React from 'react';
import { styled } from 'styled-components';
import { IcSearch } from '../assets/svgs';

const SearchPage = () => {
  return (
    <Container>
      <IcSearch />
    </Container>
  );
};

export default SearchPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10rem;
`;
