import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import MovieList from './components/MovieList'
import MovieDetail from './pages/MovieDetail'

function App() {
  return (
    
    <Router>
      
      <Navbar/>
      <Routes>
      
        <Route path="/" element={<Home/>}/>
       <Route path="movie/:id" element={<MovieDetail/>}/>
        <Route path="/movies/:type" element={<MovieList/>}/>
      </Routes>
    </Router>
  );
}

export default App;
