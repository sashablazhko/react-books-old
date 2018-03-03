import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getAPIDetails } from '../actionCreators';

import Header from '../Header/Header';
import Spinner from '../Spinner/Spinner';

class ChapterPage extends Component {

  componentDidMount() {
    if (this.props.chapter){
      this.props.getAPIData();
    }
  }

  render() {
    if ( !this.props.chapter ) return <Spinner />;
    const { chapter_number, chapter_name, chapter_content, book_id, book_name } = this.props.chapter;
    // console.log(this.props);
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

const mapStateToProps = (state, ownProps) => {
  const apiData = state.apiData[ownProps.match.params.idChapter] ? state.apiData[ownProps.match.params.idChapter] : {};
  console.log(ownProps.book);
  return {
    chapter: apiData
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getAPIData() {
    dispatch(getAPIDetails(ownProps.match.params.idBook, ownProps.match.params.idChapter));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ChapterPage);