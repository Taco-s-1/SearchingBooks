/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import * as S from './OnBoarding.style';
import { useNavigate } from 'react-router-dom';
import { api } from '../../apis/api';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface Book {
  title: string;
  author: string;
}

const OnBoarding = () => {
  const navigate = useNavigate();
  const handleButton = () => {
    navigate('/search');
  };
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await api.get('/v3/search/book?query=all');
        const bookData = response.data.documents.map((book: any) => ({
          title: book.title,
          author: book.authors.join(', '),
        }));
        setBooks(bookData.slice(0, 5));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <S.Container>
      <S.Title>책 검색</S.Title>
      <S.BookList>
        <S.ListTitle>책 목록</S.ListTitle>
        <Carousel showArrows={true} emulateTouch={true}>
          {books.map((book, index) => (
            <div key={index}>
              <S.BookTitle>{book.title}</S.BookTitle>
              <S.BookAuthor>저자: {book.author}</S.BookAuthor>
            </div>
          ))}
        </Carousel>
      </S.BookList>
      <S.NextButton onClick={handleButton}>검색페이지로 이동</S.NextButton>
    </S.Container>
  );
};

export default OnBoarding;
