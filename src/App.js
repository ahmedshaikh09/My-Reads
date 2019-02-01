import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route , Link } from "react-router-dom";
import Search from './Search';
import BookShelf from './BookShelfs';

class BooksApp extends React.Component {
 
    state = {
      
      Books: []
    
    }

    componentDidMount = () => {
        BooksAPI.getAll().then((books) => {
          this.setState({Books: books})
          console.log(books)
        })
    }

    addToShelf = (book, shelf) => {
        BooksAPI.update(book, shelf).then(() => {
          book.shelf = shelf
          const addBooks = this.state.Books.filter(books => books.id !== book.id)
          addBooks.push(book)
          this.setState({Books: addBooks})
        })
    }

    render() {
        return (
            <div className="app">
                <Route exact path="/" render={() =>
                    <div>   
                        <BookShelf
                            Books={this.state.Books}
                            addToShelf = {this.addToShelf} 
                        />                          
                        
                        <div className="open-search"> 
                          
                            <Link to = "/Search" > 
                              <button>Add a book</button>
                            </Link>
                                
                        </div> 
                        
                    </div>   
                                      
                } /> 
                
                <Route exact path="/Search" render={() => 
                    <Search  Books={this.state.Books}
                      addToShelf = {this.addToShelf}  />
                } />
                  
            </div>
        
        )
    }
}

export default BooksApp;
