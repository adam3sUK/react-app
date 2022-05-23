import React from "react";
import '../App.css';
import Profile from "../components/Profile";
import { useContext} from 'react';
import { Context } from "../Context";

const FavProfiles = () => {
  const {favouriteProfileData} = useContext(Context)

  const profiles = favouriteProfileData.map((profile, index) => {
    return <Profile 
      key={index} 
      id={index} 
      name={`${profile.name.first} ${profile.name.last}`} 
      description={`${profile.location.street.name} ${profile.location.country}`} 
    />
  })

  return (
    <>
      <h1 className="text-center">Favourite profiles</h1>
      <div className='profile-wrap'>
        {profiles} 
        { !favouriteProfileData.length && <h2>No favourite profiles</h2>}
      </div>
    </>
  );
}

export default FavProfiles