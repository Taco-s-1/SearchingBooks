import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
`;

export const Title = styled.p`
  font-size: 24px;
  color: #333;
`;

export const NextButton = styled.button`
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
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
  width: 50%;
  height: 50%;
`;

export const ListTitle = styled.p`
  font-size: 20px;
`;

export const BookTitle = styled.p`
  font-size: 15px;
`;

export const BookAuthor = styled.p`
  font-size: 15px;
`;
