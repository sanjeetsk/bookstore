
import React,{useEffect, useState} from "react";
import axios from "axios";
import Navbar from "./Component/Navbar/Navbar";
import Books from "./Component/BookData/Books"

const API_KEY = process.env.REACT_APP_API_KEY;

const App = () =>{
  // const [books, setBooks] = useState([]);
  const [bookData, setBookData] = useState([]);


  useEffect(() => {
    fetchBooks('harry');
  }, []);

  const fetchBooks = async (query) => {
    axios.get('https://www.googleapis.com/books/v1/volumes?q='+query+'&key='+API_KEY)
    .then((res) => setBookData(res.data.items))
    .catch((err) => console.log(err))
}

  return(
      <div>
        <Navbar onSearch={fetchBooks} />
        <Books books={bookData}/>
      </div>
  )
}

export default App;
