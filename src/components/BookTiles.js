import React from 'react'
import './CSS/BookTiles/BookTiles.css'

const BookTiles = ({ result }) => {

  // Originally I was going to display the authors name -- that's why this is here
  // but now the images are wrapped in those diamonds and it doesn't look book to have
  // the authors names there. 
  // but if you see down below, you can see a p tag that says bookAuthors{book.volumeInfo.authors}
  // Sometimes books have multiple authors and so this is suppose to handle the formatting of that
  // it checks the length of the list of authors and either joins it with an "and" or an ","
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

  // volumeInfo holds a lot of good information about the books, including ratings, the link to the book (provided by Google), category, etc.
  // and I plan to use them eventually but for now I stuck with the link and the thumbnail image provided by the JSON. I mapped (or looped) each book within
  // result, gave it key, and displayed it as a thumbnail. 
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