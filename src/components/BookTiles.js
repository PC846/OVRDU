import React from 'react'
import './CSS/BookTiles/BookTiles.css'

const BookTiles = ({ result }) => {

    const bookAuthors = (authors) => {
        if (authors.length <= 2) {
          authors = authors.join(' and ')
        }
        else if (authors.length > 2) {
          let lastAuthor = ' and ' + authors.slice(-1);
          authors.pop();
          authors = authors.join(', ');
          authors += lastAuthor;
        }
        return authors;
      }

      
    return (
      <div className="booktiles-wrapper">
        <div className="booktiles-inner-wrapper">
          <div className="booktiles-content">
              <ul>
              {result.map((book) => {
                return(
                  <li key={book.id}>
                    <div>
                    {/* <h2><a href={book.volumeInfo.infoLink}>{book.volumeInfo.title}</a></h2> */}
                    <a href={book.volumeInfo.previewLink}><img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}></img></a>
                      {/* <p>{bookAuthors(book.volumeInfo.authors)}</p>
                      <p>{book.volumeInfo.averageRating}</p> */}
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    )
}

export default BookTiles


{/* <div>
            {result.filter((book)=> book.volumeInfo.maturityRating == "NOT_MATURE").map((book=> (
            <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} key={book.volumeInfo.id}/>
    ))) }
        </div> */}