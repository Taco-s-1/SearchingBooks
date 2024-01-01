import React, { ChangeEvent, useState } from 'react';
import { styled } from 'styled-components';
import { IcSearch } from '../assets/svgs';
import { api } from '../apis/api';
import { BookInterface } from '../interfaces/bookInterface';
import BookPost from '../components/BookPost';

const SearchPage: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [bookList, setBookList] = useState<BookInterface[]>([]);
  const [isSearch, setIsSearch] = useState(false);

  //페이지네이션
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const handleSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };

  const submitSearchValue = () => {
    setCurrentPage(1);
    getBookList();
  };

  const getBookList = async () => {
    try {
      const { data } = await api.get('/v3/search/book', {
        params: {
          query: searchValue,
          page: currentPage,
        },
      });
      setIsSearch(true);
      setBookList(data.documents);
      const totalItems = data.meta.pageable_count;
      setTotalPage(Math.ceil(totalItems / 10));
    } catch {
      (err: ErrorEvent) => {
        console.error(err);
      };
    }
  };

  const bookPostList = bookList
    ? bookList.map((book, idx) => {
        const { title, contents, thumbnail } = book;
        return <BookPost key={idx} title={title} contents={contents} thumbnail={thumbnail} />;
      })
    : 'loading...';

  return (
    <Container>
      <SearchSection>
        <Input
          type="text"
          value={searchValue}
          placeholder="search books!!"
          onChange={handleSearchValue}
        ></Input>
        <StyledIcSearch onClick={submitSearchValue} />
      </SearchSection>
      <MainSection>{bookPostList}</MainSection>
      <PageNavigationBar>
        {isSearch ? (
          <ul>
            <li>
              <button
                onClick={() => {
                  setCurrentPage(currentPage - 1);
                  getBookList();
                  window.scrollTo(0, 0);
                }}
                disabled={currentPage === 1}
              >
                {'prevpage'}
              </button>
            </li>
            <li>
              {currentPage}/{totalPage}
            </li>
            <li>
              <button
                onClick={() => {
                  setCurrentPage(currentPage + 1);
                  getBookList();
                  window.scrollTo(0, 0);
                }}
                disabled={currentPage === totalPage}
              >
                {'nextpage'}
              </button>
            </li>
          </ul>
        ) : (
          'no books found'
        )}
      </PageNavigationBar>
    </Container>
  );
};

export default SearchPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  margin-top: 10rem;
  margin-bottom: 30rem;
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
  border: 2px solid #ed9e81;

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

const MainSection = styled.div`
  width: 100%;
  padding: 0 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

const PageNavigationBar = styled.nav`
  & > ul {
    display: flex;
  }
`;
