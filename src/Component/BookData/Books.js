import React,{useState} from "react";
import BookDetail from "./BookDetail";

const Books = ({books}) => {

    const [book, setBook] = useState([]);
    const [selectedBook, setSelectedBook] = useState(false);

    const handleBookClick = (item) => {
        setSelectedBook(true);
        setBook(item);
    };
    
    const handleClose = () =>{
        setSelectedBook(false);
        setBook([]);
    }
 
    return(
        <>
        <div className="container">{
            books.map((item, index) =>{
                let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail
                let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                if(thumbnail !== undefined && amount !== undefined) {
                    return (
                            <div className="card" key={index} onClick={() => handleBookClick(item)}>
                                <img src={thumbnail} alt="books" />
                                <div className="bottom">
                                    <h3 className="title">{item.volumeInfo.title}</h3>
                                </div>
                            </div> 
                    )
                }
            })
            
        }
        </div>
        <BookDetail book={book} show={selectedBook} onClose={handleClose}/>
        </>
    )
}

export default Books;