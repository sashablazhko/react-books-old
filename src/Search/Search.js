import React, { Component } from 'react';

import BookCard from '../BookCard/BookCard';
import Header from '../Header/Header';

class Search extends Component {
  state = {
    searchTerm: ''
  };

  handleSearchTermChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <div className="search">
        <Header
          handleSearchTermChange={this.handleSearchTermChange}
          showSearch
          searchTerm={this.state.searchTerm}
        />
        <div>
          {this.props.books
            .filter(
              book =>
                `${book.book_name} ${book.book_description} ${book.author_name}`
                  .toUpperCase()
                  .indexOf(this.state.searchTerm.toUpperCase()) >= 0
            )
            .map(book => {
              return <BookCard key={book.id_book} book={book} />;
            })}
        </div>
      </div>
    );
  }
}

export default Search;
