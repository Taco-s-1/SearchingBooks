import React from 'react';
import * as S from './OnBoarding.style';
import { useNavigate } from 'react-router-dom';

const OnBoarding = () => {
  const navigate = useNavigate();
  const handleButton = () => {
    navigate('/search');
  };
  return (
    <S.Container>
      <S.Title>책 검색</S.Title>
      <S.NextButton onClick={handleButton}>검색페이지로 이동</S.NextButton>
    </S.Container>
  );
};

export default OnBoarding;
