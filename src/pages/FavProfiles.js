import React from "react";
import '../App.css';
import Profile from "../components/Profile";
import { useContext} from 'react';
import { Context } from "../Context";

const FavProfiles = () => {
  const {profileData} = useContext(Context)

  const favProfilesArray = profileData.filter(profile => profile.isFavourite)
  const favProfiles = favProfilesArray.map(profile => {
    return <Profile 
      key={profile.uid} 
      id={profile.uid} 
      isFavourite={profile.isFavourite}
      name={`${profile.name.first} ${profile.name.last}`} 
      description={`${profile.location.street.name} ${profile.location.country}`} 
    />
  })

  return (
    <>
      <h1 className="text-center">Favourite profiles</h1>
      <div className='profile-wrap'>
        {favProfiles} 
        { favProfiles.length < 1 && <h2>No favourite profiles</h2>}
      </div>
    </>
  );
}

export default FavProfiles