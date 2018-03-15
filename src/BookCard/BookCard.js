import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import ChapersList from '../ChaptersList/ChaptersList';

// const Wrapper = styled(Link)`
//   width: 32%;
//   border: 2px solid #333;
//   border-radius: 4px;
//   margin-bottom: 25px;
//   padding-right: 10px;
//   overflow: hidden;
//   color: black;
//   text-decoration: none;
// `;
const Wrapper = styled.div`
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
  state = {
    selectedChapter: this.props.book.chapters[0].id_chapter
  };

  handleSelectedChapter = event => {
    this.setState({ selectedChapter: event.target.value });
  };

  render() {
    return (
      <Wrapper>
        <Link to={`/details/${this.props.book.id_book}/${this.state.selectedChapter}`}>
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
        </Link>
        <hr />
        <ChapersList handleSelectedChapter={this.handleSelectedChapter} chapters={this.props.book.chapters} />
      </Wrapper>
    );
  }
}

export default BookCard;
