import React, { Component } from 'react';

class ChapterPage extends Component {
  state = {
    requestFailed: false,
    chapter: [],
  };

  componentWillMount() {
    fetch(`http://laravel-books/api/books/1/1`)
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
    if (this.state.requestFailed) return <p>Failed Search loading!</p>;
    return (
      <div className="details">
        <pre><code>{JSON.stringify(this.state, null, 4)}</code></pre>
      </div>
    )
  }
}

export default ChapterPage;