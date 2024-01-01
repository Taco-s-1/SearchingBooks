import React, { useEffect } from 'react';
import * as S from './BookDetail.style';
// import { api } from '../../apis/api';

const BookDetail = () => {
  // const title = ;
  //const [data,setData] = useState<string>("");
  useEffect(() => {
    try {
      //const response = await api.get(`/v3/search/book?query=${title}`);
      //setData(response);
    } catch {
      (err: ErrorEvent) => {
        console.error(err);
      };
    }
  }, []);

  return (
    <S.Container>
      {/* {data && (
        <S.SubContainer>
          <img src={data[0].thumbnail} alt="book-cover" width={270} height={400} />
          <article>
            <h1 css={mainTitle}>{data[0].title}</h1>
            <div css={bookInfo}>
              <span>{data[0].authors}</span>
              <span>{data[0].publisher}</span>
              <span>{data[0].price}</span>
            </div>
            <p css={bookContent}>{data[0].contents}</p>
          </article>
        </S.SubContainer>
      )} */}
    </S.Container>
  );
};

export default BookDetail;
