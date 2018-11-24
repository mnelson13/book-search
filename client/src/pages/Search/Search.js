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
        saveSearch: "Sword of Truth",
        count: 10
    };

    componentDidMount(){
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems);
        this.searchBooks("Sword of truth")
    }

    searchBooks = query => {
        API.search(query)
        .then(res => this.setState({ result: res.data.items }))
        .catch(err => console.log(err));
    }

    handleInputChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBooks(this.state.search)
        this.setState({saveSearch: this.state.search, search: "", count: 10 });
    }

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
                        author={book.volumeInfo.authors}
                        link={book.volumeInfo.infoLink}
                        image={book.volumeInfo.imageLinks.smallThumbnail}
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