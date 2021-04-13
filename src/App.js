import React, {useState, useEffect} from 'react'
import './components/CSS/App/App.css'
import BookTiles from './components/BookTiles'
import LionSvg from './components/LionSvg'
import Header from './components/Header'
import NavBar from './components/NavBar'
import About from './components/About'

import Subscription from './components/Subscription'
import Contact from './components/Contact'
import axios from 'axios'
import { FiSearch } from 'react-icons/fi';


function App() {
  const [book, setBook] = useState("") // Handles the input values
  const [result, setResult] = useState([]) // Catches the data received from get request
  
  let API_URL = `https://www.googleapis.com/books/v1/volumes` // I put it in a variable so it isn't so cluttered

  // This function calls the API with user input and captures that data with setResult. The format of the JSON object is long but the
  // most important bit is the info
  const fetchBooks = async () => {
    const response = await axios.get(`${API_URL}?q=${book}`)
    setResult(response.data.items)
    console.log(response)
  }

  // handles form submit
  const onSubmitHandler = (e) => {
    e.preventDefault()
    fetchBooks()
  }
  // handles user input
  const onChangeHandler = (e) => {
    setBook(e.target.value)
  }

  // this stores the data received from the API into the local storage so when a user clicks on one of the books and
  // returns back to the page, their input still stays.
  useEffect(()=> {
    const data = localStorage.getItem("my-books")
    if (data){
      setResult(JSON.parse(data))
    }
    
  }, [])
  useEffect(()=> {
    localStorage.setItem("my-books", JSON.stringify(result))
  })

  // the form accepts a single input, that input is stored in the value of book for the API to use to gather data
  // FiSearch is from react-icons
  // I use the result formed by fetchBooks to send it down to BookTiles.
  return(
    <div className="app-wrapper">
        <NavBar />
        {/* <LionSvg /> */}
        <Header />
        <About />
        <Subscription />
      <div className="form-wrapper">
        <form onSubmit={onSubmitHandler}>  
          <input
            type="search"
            placeholder="Book, author, etc..."
            value={book}
            onChange={onChangeHandler}>
          </input>
          <button type="submit"><FiSearch /></button>
        </form> 
        </div>
       
        <BookTiles result={result} setResult={setResult}/>

        <Contact />
    </div>
  )
}

export default App;
