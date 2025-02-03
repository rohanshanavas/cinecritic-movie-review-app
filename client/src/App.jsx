import './App.css';
import { useState, useEffect } from 'react';
import api from './api/axiosConfig';
import Layout from './components/Layout';
import { Route, Routes } from "react-router-dom";
import Home from './components/home/Home';
import Header from './components/header/Header';

function App() {

  const [movies, setMovies] = useState([]);

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
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home movies={movies} />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;
