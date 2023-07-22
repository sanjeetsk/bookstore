// Inside BookDetail.js
import React from 'react';

const BookDetail = ({ book, show }) => {

    if(!show){
        return null;
    }

    let thumbnail = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail

    return(
        <div className='overlay'>
            <div className='overlay-inner'>
                <button className='close'><i className="fa-regular fa-circle-xmark"></i></button>
                <div className='inner-box'>
                    <img src={thumbnail} alt='book'></img>
                    <div className='info'></div>
                    <h1>{book.volumeInfo.title}</h1>
                    <h3>{book.volumeInfo.authors}</h3>
                    <h4>{book.volumeInfo.publisher}</h4>
                    <a href='#'><button>More</button></a>
                </div>
            </div>
            <h4 className='description'></h4>
        </div>
    ) 

    



    // return (
    //     <div className="book-detail">
    //         <span className="close-button" >Close</span>
    //         <img src={thumbnail} alt={book.volumeInfo.title} />
    //         <h2>{book.volumeInfo.title}</h2>
    //         <p>{book.volumeInfo.authors?.join(', ')}</p>
    //         <p>{book.volumeInfo.description}</p>
    //         <div className="buttons">
    //             <a href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">Read Now</a>
    //             <a href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">More Info</a>
    //         </div>
    //     </div>
    // );
};

export default BookDetail;
