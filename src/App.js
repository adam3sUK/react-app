import logo from './images/logo.svg';
import './App.css';
import Profile from './components/Profile';
import { useContext} from 'react';
import {Context} from './Context';

export default function App() {
  const {profileData} = useContext(Context)

  const profiles = profileData.map((profile, index) => {
    return <Profile 
      key={index} 
      id={index} 
      name={`${profile.name.first} ${profile.name.last}`} 
      description={`${profile.location.street.name} ${profile.location.country}`} 
    />
  })

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Fun facts about React</h1>
      <div className='profile-wrap'>
        {profiles}
      </div>
    </div>
  );
}
