import React from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router';

interface BookPostType {
  title: string;
  contents: string;
  thumbnail: string;
}

const BookPost: React.FC<BookPostType> = ({ title, contents, thumbnail }) => {
  const navigate = useNavigate();

  const moveDetail = () => {
    navigate(`/${title}`);
  };
  return (
    <Container onClick={moveDetail}>
      <img src={thumbnail} alt={title} />
      <ExplainSection>
        <Title>{title}</Title>
        <Contents>{contents}</Contents>
      </ExplainSection>
    </Container>
  );
};

export default BookPost;

const Container = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-grow: 1;
  border: 2px solid #ed9e81;
  border-radius: 15px;

  &:hover {
    border-color: #c45757;
    background-color: #c4575737;
    cursor: pointer;
  }
`;

const ExplainSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
`;

const Title = styled.span`
  font-size: 2rem;
  font-weight: 600;
`;

const Contents = styled.span`
  font-size: 1.4rem;
`;
