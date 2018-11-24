import React, { Component } from "react";
import API from "../../utils/API";
import SavedResult from "../../components/SavedResult";
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";

class SavedBooksContainer extends Component {
    state = {
        books: {},
    };

    //on mount, initializes sidenav and loads saved books
    componentDidMount(){
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems);
        this.loadBooks();
    }

    //loads saved books from the Mongo Database
    loadBooks = () => {
        API.getBooks()
            .then(res =>
                this.setState({ books: res.data })
            )
            .catch(err => console.log(err));

    }

    //deletes a saved book from the Mongo Database
    deleteBook = (id) => {
        API.deleteBook(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
    }

    render(){
        return (
            <div className="container">
                <h3>Saved Books:</h3>
                {this.state.books.length ? (
                this.state.books.map(book => (
                    <SavedResult
                    key={book._id}
                    id={book._id}
                    title={book.title}
                    author={book.author}
                    link={book.link}
                    image={book.image}
                    description={book.description}
                    deleteBook={this.deleteBook}
                    />
                ))
        ) : (
            <h3>No Saved Books to Display</h3>
        )}
                
            </div>
        )
    }
}

export default SavedBooksContainer;