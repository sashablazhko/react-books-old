import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAPIBooks } from '../actionCreators';
import axios from 'axios';

import Landing from '../Landing/Landing';
import Search from '../Search/Search';
import ChapterPage from '../ChapterPage/ChapterPage';
import Spinner from '../Spinner/Spinner';

const FourOhFour = () => <h1>404</h1>;

class RootContainer extends Component {
  state = {
    requestFailed: false
  };

  componentWillMount() {
    if (!(typeof this.props.books !== 'undefined' && this.props.books.length > 0)) {
      this.props.getAPIData();
    }
  }

  render() {
    if (this.state.requestFailed) return <p>Failed App loading!</p>;
    if (this.props.books.length === 0)
      return (
        <div className="app">
          <Spinner />
        </div>
      );
    return (
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/search" component={props => <Search books={this.props.books} {...props} />} />
            <Route path="/details/:idBook/:idChapter" component={ChapterPage} />
            <Route component={FourOhFour} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  // const apiData = state.apiData[ownProps.match.params.idChapter] ? state.apiData[ownProps.match.params.idChapter] : {};
  // console.log(ownProps.book);
  return {
    books: state.apiBooks.books
  };
};

const mapDispatchToProps = dispatch => ({
  getAPIData() {
    dispatch(getAPIBooks());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(RootContainer);
