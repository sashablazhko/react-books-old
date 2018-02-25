import React, { Component } from 'react';

import Header from '../Header/Header';
import Spinner from '../Spinner/Spinner';

class ChapterPage extends Component {
  state = {
    requestFailed: false,
    chapter: [],
  };

  componentDidMount() {
    fetch(`http://laravel-books/api/books/${this.props.match.params.idBook}/${this.props.match.params.idChapter}`)
      .then(res => {
        if (!res.ok) {
          throw Error('Problem in ChapterPage fetch');
        }
        return res;
      })
      .then(res => res.json())
      .then(
        res => {
          this.setState({ chapter: res.chapter });
        },
        () => {
          this.setState({
            requestFailed: true
          });
        }
      );
  }

  render() {
    if (this.state.requestFailed || !(this.state.chapter.length > 0) ) return <Spinner />;
    const { chapter_number, chapter_name, chapter_content, book_id, book_name } = this.state.chapter[0];
    return (
      <div className="details">
        <Header />
        <section>
          <h1>{book_name}</h1>
          <h2>{chapter_name}</h2>
          <hr/>
          <p>{chapter_content}</p>
        </section>
      </div>
    )
  }
}

export default ChapterPage;