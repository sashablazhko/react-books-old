import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import axios from 'axios';

import Landing from './Landing/Landing';
import Search from './Search/Search';
import ChapterPage from './ChapterPage/ChapterPage';

const FourOhFour = () => <h1>404</h1>;

class App extends Component {
  state = {
    requestFailed: false,
    books: []
  };

  componentWillMount() {
    // fetch('http://laravel-books/api/books')
    //   .then(res => {
    //     if (!res.ok) {
    //       throw Error('Problem in App fetch');
    //     }
    //     return res;
    //   })
    //   .then(res => res.json())
    //   .then(
    //     res => {
    //       this.setState({ books: res.books });
    //     },
    //     () => {
    //       this.setState({
    //         requestFailed: true
    //       });
    //     }
    //   );

    axios
      .get(`http://laravel-books/api/books`)
      .then(response => {
        this.setState({ books: response.data.books });
      })
      .catch(error => {
        this.setState({ requestFailed: true });
        console.log('App error', error);
      })
  }

  render() {
    if (this.state.requestFailed) return <p>Failed App loading!</p>;
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className="app">
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/search" component={props => <Search books={this.state.books} {...props} />} />
              <Route path="/details/:idBook/:idChapter" component={ChapterPage} />
              <Route component={FourOhFour} />
            </Switch>
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
