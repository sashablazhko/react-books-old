import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 32%;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`;

const BookCard = props => {
  return (
    <Wrapper>
      <div className="book-card">
        <Image
          src={`http://laravel-books/uploads/${props.book.book_img}`}
          alt={`${props.book.book_name} Book Poster`}
        />
        <div>
          <h3>{props.book.book_name}</h3>
          <h4>{props.book.author_name}</h4>
          <p>{props.book.book_description}</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default BookCard;
