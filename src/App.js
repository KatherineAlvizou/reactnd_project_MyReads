import React from "react";
import HomePage from "./components/HomePage";
import SearchPage from "./components/SearchPage";
import * as BooksAPI from "./BooksAPI";
import { Route } from "react-router-dom";
import "./App.css";

class App extends React.Component {
  constructor() {
      super();
      this.state = {
          books: []
      };
  }

  componentDidMount() {
      this.setBooksState();
  }

  setBooksState() {
      BooksAPI.getAll()
          .then(books => this.setState({
              books
          }))
          .catch(error => console.error("Failed to fetch books", error));
  }

  changeShelf = (book, shelf) => {
      BooksAPI.update(book, shelf).then(() => {
          this.setBooksState();
      });
  };

  render() {
      return ( <
          div className = "app" >
          <
          Route exact path = "/"
          render = {
              () => ( <
                  HomePage books = {
                      this.state.books
                  }
                  onChange = {
                      this.changeShelf
                  }
                  />
              )
          }
          />

          <
          Route path = "/search"
          render = {
              () => ( <
                  SearchPage books = {
                      this.state.books
                  }
                  onChange = {
                      this.changeShelf
                  }
                  />
              )
          }
          /> <
          /div>
      );
  }
}

export default App;