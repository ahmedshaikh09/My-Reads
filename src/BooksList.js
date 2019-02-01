import React, { Component } from 'react';


class BooksList extends Component {
    

    render () {    
           
        return (
           
            <div className="list-books">
                <ol className="books-grid">
                    {this.props.Books.map((books, index) => (

                        <div key={index} className="book" > 
                                <div className="book-top">
                                    <img className="cover"
                                        src={books.imageLinks.smallThumbnail} 
                                        alt={books} 
                                    /> 
                
                                    <div className="book-shelf-changer">
                                            <select  
                                                onChange={(event) => this.props.addToShelf(books, event.target.value)}
                                                value={books.shelf}
                                            >
                                                <option value="move" disabled>Move to...</option>
                                                <option value="currentlyReading">Currently Reading</option>
                                                <option value="wantToRead">Want to Read</option>
                                                <option value="read">Read</option>
                                                <option value="none">None</option>
                                            </select>
                                    </div>
                                </div>
                                <div className="book-title">{books.title}</div>
                                <div className="book-authors">{books.authors}</div>
                        </div>
                    ))}   
                </ol>   
        
            </div>
            

        )
    }
                            
}

export default BooksList;