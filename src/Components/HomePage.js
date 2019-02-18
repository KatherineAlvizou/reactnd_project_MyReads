import React, { Component } from "react";
import Shelf from "./bookshelf";
import { Link } from "react-router-dom";

class HomePage extends Component {
  render() {
    const books = this.props.books;

    const shelves = [
      {
        type: "currentlyReading",
        name: "Currently Reading"
      },
      {
        type: "wantToRead",
        name: "Want to Read"
      },
      {
        type: "read",
        name: "Read"
      }
    ];

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {shelves.map(shelf => (
              <Shelf
                key={shelf.type}
                books={books.filter(book => book.shelf === shelf.type)}
                name={shelf.name}
                changeShelf={this.props.onChange}
              />
            ))}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Search</Link>
        </div>
      </div>
    );
  }
}

export default HomePage;
