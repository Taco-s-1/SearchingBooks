import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
`;
export const Title = styled.p`
  display: flex;
  font-size: 24px;
  color: #333;
`;
export const NextButton = styled.button`
  display: flex;
  background-color: #ff7f00;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const BookList = styled.div`
  display: flex;
  gap: 2rem;
`;
export const ListTitle = styled.p`
  display: flex;
  font-size: 20px;
`;

export const Carousel = styled.div`
  display: flex;
  gap: 2rem;
`;

export const BookTitle = styled.p`
  display: flex;
  font-size: 15px;
`;
export const BookAuthor = styled.p`
  display: flex;
  font-size: 15px;
`;
