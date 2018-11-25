import React, { Component } from "react";
import API from "../../utils/API";
import SearchForm from "../../components/SearchForm";
import Result from "../../components/Result";
import LoadMore from "../../components/LoadMore";
import "./Search.css"
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";

class BooksContainer extends Component {
    state = {
        search: "",
        result: [],
        saveSearch: "",
        count: 11
    };

    //on mount, initializes sidenav and searches books
    componentDidMount(){
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems);
        this.searchBooks("Game of Thrones")
    }

    //queries the Google Books API, sets the results, saveSearch, and count, resets the search
    searchBooks = query => {
        API.search(query)
        .then(res => this.setState({ result: res.data.items, saveSearch: query, search: "", count: 11  }))
        .catch(err => console.log(err));
    }

    //updates the search state as the search form is updated
    handleInputChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    //when search form is submitted, empties the results and then searches the Google Books API
    handleFormSubmit = event => {
        event.preventDefault();
        this.setState({
            result: []
        }, () =>{
            this.searchBooks(this.state.search)
        })
    }

    //saves a book to the Mongo Database
    saveBook = (result) => {
        API.saveBook({
            title: result.title,
            author: result.authors,
            link: result.infoLink,
            image: result.imageLinks.thumbnail,
            description: result.description
        })
            .then(res => console.log("Book Saved"))
            .catch(err => console.log(err));
    }

    //loads 10 more books and increases the count by 10
    loadMore = () => {
        API.search(this.state.saveSearch + "&startIndex=" + this.state.count)
        .then(res => this.setState({ result: [...this.state.result, ...res.data.items], count: this.state.count +10}))
        .catch(err => console.log(err));
    }

    render(){
        return (
            <div className="container">
                <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                />
                <h3>Results:</h3>
                {this.state.result.length ? (
                this.state.result.map(book => (
                    <Result
                        key={book.id}
                        result={book.volumeInfo}
                        title={book.volumeInfo.title}
                        author={book.volumeInfo.authors[0]}
                        link={book.volumeInfo.infoLink}
                        image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : "https://vignette.wikia.nocookie.net/janethevirgin/images/4/42/Image-not-available_1.jpg/revision/latest?cb=20150721102313"}
                        description={book.volumeInfo.description}
                        saveBook={this.saveBook}
                        />
                    ))
                ) : (
                    <h3>No Results to Display</h3>
                )}

                {this.state.result.length ? (
                    <LoadMore
                    saveSearch={this.saveSearch}
                    loadMore={this.loadMore}
                    />                
                ) : ""}
                
            </div>
        )
    }
}

export default BooksContainer;