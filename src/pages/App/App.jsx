import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import LoginPage from "../LoginPage/LoginPage"
import MoviesListPage from '../MoviesListPage/MoviesListPage';
import MovieDetailPage from '../MoviesDetailPage/MoviesDetailPage';
import ActorListPage from '../ActorListPage/ActorListPage';
import NavBar from '../../components/NavBar/NavBar';
import {movies} from "../../data.js"


function App() {

  const [user, setUser] = useState(null);

  function updateUser(user) {
    setUser(user)
  }

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user}/>
          <Routes>                          
            <Route path="/" element={<MoviesListPage movies={movies}/>}/>              
            <Route path="movies/:movieName" element={<MovieDetailPage/>}/>              
            <Route path="/actors" element={<ActorListPage movies={movies}/>}/>          
            
          </Routes>          
        </>
        :
        <LoginPage updateUser={updateUser}/> 
      }
    </main>
    
  
  );
}
    
  

export default App;
