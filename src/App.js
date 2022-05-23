import logo from './images/logo.svg';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import Profiles from './pages/Profiles';
import FavProfiles from './pages/FavProfiles';

export default function App() {

  return (
    <div className="App">
      <nav className='navbar'>
        <img src={logo} className="App-logo" alt="logo" />
        <li><Link to="/">Home</Link></li>
        <li><Link to="/fav">Favourites</Link></li>
      </nav>
      <Routes>
        <Route exact path="/" element={<Profiles />} />
        <Route path="/fav" element={<FavProfiles />} />
      </Routes>
    </div>
  );
}
