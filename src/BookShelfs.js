import React, { Component } from 'react';
import BooksList from './BooksList';            
 

class BookShelf extends Component {
            
    render () {
        
        return (
            <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                <div className="list-books-content">
                    
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                                <ol className ="books-grid">
                                    <BooksList 
                                        Books = {this.props.Books.filter(books=>books.shelf === "currentlyReading")} 
                                        addToShelf = {this.props.addToShelf}
                                    />
                                </ol>
                        </div>
                        
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>   
                                <ol className="books-grid">
                                    <BooksList 
                                        Books = {this.props.Books.filter(books=>books.shelf === "wantToRead")} 
                                        addToShelf = {this.props.addToShelf}
                                    />
                                </ol>
                        </div>
                                
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                                <ol className="books-grid">
                                    <BooksList 
                                        Books = {this.props.Books.filter(books=>books.shelf === "read")} 
                                        addToShelf = {this.props.addToShelf}
                                    />
                                </ol>
                        </div>
                                
                        
                </div>
                        
            </div>
                                    
        )
    }
}
            
export default BookShelf;
