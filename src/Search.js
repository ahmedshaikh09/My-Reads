import React, { Component } from 'react';
import { Link } from "react-router-dom";
import * as BooksAPI from './BooksAPI';
import BooksList from'./BooksList';


class Search extends Component {
    
    state = {
       
        query: "",  
        Books: []

    };

    searchBooks = e => {
        let query = e.target.value
            this.setState({ query })
            if (query) {
                BooksAPI.search(query).then((books) => {
                    if(books.length > 0) {  
                        this.setState({ Books: books})
                    }else{
                      this.setState({ Books: []})
                    }
                }) 
            }else{
              this.setState({ Books: [] })            
            }
    }

    render() {
      
        let error;

        if (this.state.query.length > 1 && this.state.Books.length === 0) {
            error = (
                <p>
                    No maches. Please try some different terms.
                </p>
            )
        } 

        return (
              
            <div className="search">
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link to="/">
                            <button className="close-search">Close</button>
                        </Link> 
                        <div className="search-books-input-wrapper">
                                 
                            <input type="text"
                                placeholder="Search by title or author"
                                value={this.state.query}
                                onChange={this.searchBooks}
                            />
                        </div>
                    </div>
                  
                    <div className="search-books-results">
                       {error}
               
                       <BooksList 
                            Books={this.state.Books}
                            addToShelf = {this.props.addToShelf}
                        />

                    </div>
                
                </div>
          
            </div>
        )
    }
}

export default Search;