import Books from "../BookData/Books"
import axios from "axios";

const Body = ({books}) => {

    return(
        <div className="container">
            <Books books={books}/>
        </div>
    )
}

export default Body;