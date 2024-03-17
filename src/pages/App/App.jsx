import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import LoginPage from "../LoginPage/LoginPage"
import MoviesListPage from '../MoviesListPage/MoviesListPage';
import MovieDetailPage from '../MoviesDetailPage/MoviesDetailPage';
import ActorsListPage from '../ActorListPage/ActorListPage';
import NavBar from '../../components/NavBar/NavBar';


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
            <Route path="/" element={<MoviesListPage/>}/>              
            <Route path="movies/:movieName" element={<MovieDetailPage/>}/>              
            <Route path="/actors" element={<ActorsListPage/>}/>          
            
          </Routes>          
        </>
        :
        <LoginPage updateUser={updateUser}/> 
      }
    </main>
    
  
  );
}
    
  

export default App;
