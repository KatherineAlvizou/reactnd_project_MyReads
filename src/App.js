import React from "react";
import HomePage from "./Components/HomePage";
import SearchPage from "./Components/SearchPage";
import * as BooksAPI from "./BooksAPI";
import { Route } from "react-router-dom";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    books: []
  };
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books: books });
    });
  }
  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf);
    BooksAPI.getAll().then(books => {
      this.setState({ books: books });
    });
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <HomePage books={this.state.books} moveBook={this.moveBook} />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchPage moveBook={this.moveBook} books={this.state.books} />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;