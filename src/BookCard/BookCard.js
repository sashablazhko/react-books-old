import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled(Link)`
  width: 32%;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
  color: black;
  text-decoration: none;
`;

const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`;

class BookCard extends Component {

  // shouldComponentUpdate() {
  //   return false;
  // }

  render() {
    return (
      <Wrapper to={`/details/${this.props.book.id_book}/1`}>
        <div className="book-card">
          <Image
            src={`http://laravel-books/uploads/${this.props.book.book_img}`}
            alt={`${this.props.book.book_name} Book Poster`}
          />
          <div>
            <h3>{this.props.book.book_name}</h3>
            <h4>{this.props.book.author_name}</h4>
            <p>{this.props.book.book_description}</p>
          </div>
        </div>
      </Wrapper>
    );
  }

}

export default BookCard;
