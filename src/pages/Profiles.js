import React from "react";
import '../App.css';
import Profile from "../components/Profile";
import { useContext} from 'react';
import { Context } from "../Context";

const Profiles = () => {
  const {profileData, addProfile, addProfileRow} = useContext(Context)

  const profiles = profileData.map(profile => {
    return <Profile 
      key={profile.uid} 
      id={profile.uid} 
      name={`${profile.name.first} ${profile.name.last}`} 
      description={`${profile.location.street.name} ${profile.location.country}`} 
    />
  })

  return (
    <>
      <h1>Add and delete profiles</h1>
      <button onClick={addProfileRow} className="profile-btn mb-20">Complete Profile Row</button>
      <button onClick={addProfile} className="profile-btn mb-20">Add Profile</button>
      <div className='profile-wrap'>
        {profiles}
      </div>
    </>
  );
}

export default Profiles