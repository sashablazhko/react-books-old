import React, { Component } from 'react';

import BookCard from '../BookCard/BookCard';

class Search extends Component {
  state = {
    requestFailed: false,
    books: [],
    searchTerm: ''
  };

  componentWillMount() {
    fetch('http://laravel-books/api/books')
      .then(res => {
        if (!res.ok) {
          throw Error('Problem in App fetch');
        }
        return res;
      })
      .then(res => res.json())
      .then(
        res => {
          this.setState({ books: res.books });
        },
        () => {
          this.setState({
            requestFailed: true
          });
        }
      );
  }

  handleSearchTermChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    if (this.state.requestFailed) return <p>Failed Search loading!</p>;
    return (
      <div className="search">
        <header>
          <h1>DAD*DAD</h1>
          <input
            onChange={this.handleSearchTermChange}
            value={this.state.searchTerm}
            type="text"
            placeholder="Search"
          />
        </header>
        <div>
          {this.state.books
            .filter(
              book =>
                `${book.book_name} ${book.book_description} ${book.author_name}`
                  .toUpperCase()
                  .indexOf(this.state.searchTerm.toUpperCase()) >= 0
            )
            .map(book => {
              return <BookCard key={book.id} book={book} />;
            })}
        </div>
      </div>
    );
  }
}

export default Search;
