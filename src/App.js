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
  //const yourAPIKey = "AIzaSyB42XUEM6ddCEyqFNFg_AxxCc2T6XXKCD0"
  const [book, setBook] = useState("") // handles book input values
  const [result, setResult] = useState([]) // catches the data received from get request
  
  let API_URL = `https://www.googleapis.com/books/v1/volumes`

  const fetchBooks = async () => {
    const response = await axios.get(`${API_URL}?q=${book}`)
    setResult(response.data.items)
    console.log(response)
  }


  const onSubmitHandler = (e) => {
    e.preventDefault()
    fetchBooks()
  }

  const onChangeHandler = (e) => {
    setBook(e.target.value)
  }

 
  useEffect(()=> {
    const data = localStorage.getItem("my-books")
    if (data){
      setResult(JSON.parse(data))
    }
    
  }, [])
  useEffect(()=> {
    localStorage.setItem("my-books", JSON.stringify(result))
  })
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
