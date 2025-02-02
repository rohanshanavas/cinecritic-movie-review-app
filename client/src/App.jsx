import './App.css';
import { useState, useEffect } from 'react';
import api from './api/axiosConfig';

function App() {

  const [movies, setMovies] = useState();

  const getMovies = async () => {

    try {

      const response = await api.get("/api/movies");
      setMovies(response.data);
      
    } 
    catch (err) {

      console.log("Error fetching movies: ", err);
      
    }
  }

  useEffect(() => {
    getMovies();
  }, [])
  

  return (
    <>
      <h2>Hello, World!!</h2>
    </>
  )
}

export default App;
