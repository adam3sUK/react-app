import logo from './images/logo.svg';
import './App.css';
import Profile from './components/Profile';
import { useContext} from 'react';
import {Context} from './Context';

export default function App() {
  const {profileData, addProfile} = useContext(Context)

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
      <h1>Add and delete profiles</h1>
      <button onClick={addProfile} className="profile-btn mb-20">Add Profile</button>
      <div className='profile-wrap'>
        {profiles}
      </div>

    </div>
  );
}
