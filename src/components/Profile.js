import React, {useContext} from 'react';
import { Context } from '../Context';

const Profile = (props) => {
  const {removeProfile, addFavouriteProfile} = useContext(Context)
  return (
    <div className='profile' id={props.id}>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <button className="profile-btn" onClick={() => removeProfile(props.id)}>Delete Profile</button>
      <button className="profile-btn" onClick={() => addFavouriteProfile(props.id)}>Add to favourites</button>
    </div>
  )
}

export default Profile