
const Books = ({books}) => {

    console.log(books);

    return(
        <>{
            books.map((item, index) =>{
                let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail
                let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                if(thumbnail != undefined && amount != undefined) {
                    return (
                            <div className="card" key={index}>
                                <img src={thumbnail} alt="books" />
                                <div className="bottom">
                                    <h3 className="title">{item.volumeInfo.title}</h3>
                                    <p className="amount">&#8377;{amount}</p>
                                </div>
                            </div> 
                    )
                }
            })
        }
        </>
    )
}

export default Books