import './App.css';
import { useState, useEffect } from 'react';
import api from './api/axiosConfig';
import Layout from './components/Layout';
import { Route, Routes } from "react-router-dom";
import Home from './components/home/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Reviews';
import NotFound from './components/notFound/NotFound';

function App() {

  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState([]);
  const [reviews, setReviews] = useState([]);

  const getMovies = async () => {

    try {

      const response = await api.get("/api/movies");
      setMovies(response.data);
      
    } 
    catch (err) {

      console.log("Error fetching movies: ", err);
      
    }
  }

  const getMovieData = async (movieId) => {
    
    try {
      const response = await api.get(`/api/movies/${movieId}`);

      const singleMovie = response.data;
      console.log(singleMovie)
      setMovie(singleMovie);
      setReviews(singleMovie.reviewIds);
    } 
    catch (err) {
      console.error(err)
    }

  }

  useEffect(() => {
    getMovies();
  }, [])

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={ <Layout /> }>
          <Route path='/' element={ <Home movies={movies} /> } />
          <Route path='/trailer/:ytTrailerId' element={ <Trailer /> } />
          <Route path='/reviews/:movieId' element={ <Reviews getMovieData={getMovieData} movie={movie} reviews={reviews} setReviews={setReviews}/> }/>
          <Route path='*' element={ <NotFound /> }/>
        </Route>
      </Routes>
    </div>
  )
}

export default App;
