import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAPIDetails } from '../actionCreators';

import Header from '../Header/Header';
import Spinner from '../Spinner/Spinner';

class ChapterPage extends Component {

  componentDidMount() {
    if(!this.props.id_chapter) {
      this.props.getAPIDetails(this.props)
    }
  }

  render() {
    if ( !this.props.id_chapter ) return <Spinner />;
    const { chapter_number, chapter_name, chapter_content, book_id, book_name } = this.props;
    return (
      <div className="details">
        <Header />
        <section>
          <h1>{book_name}</h1>
          <h2>{chapter_name}</h2>
          <hr />
          <p>{chapter_content}</p>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const apiData = state.apiData[ownProps.chapter.id_chapter] ? state.apiData[ownProps.chapter.id_chapter] : { apiData: '' };
  return {
    chapter: apiData.chapter
  }
};

export default ChapterPage;
