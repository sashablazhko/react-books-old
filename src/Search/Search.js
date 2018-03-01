import React from 'react';
import { connect } from 'react-redux';

import BookCard from '../BookCard/BookCard';
import Header from '../Header/Header';

const Search = (props) => {
  return (
    <div className="search">
      <Header showSearch />
      <div>
        {props.books
          .filter(
            book =>
              `${book.book_name} ${book.book_description} ${book.author_name}`
                .toUpperCase()
                .indexOf(props.searchTerm.toUpperCase()) >= 0
          )
          .map(book => {
            return <BookCard key={book.id_book} book={book} />;
          })}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    searchTerm: state.searchTerm
  }
};


export default connect(mapStateToProps)(Search);
