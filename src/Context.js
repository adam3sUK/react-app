import React, {useState, useEffect} from "react"
import uniqid from 'uniqid'
const Context = React.createContext()

const ContextProvider = ({children}) => {
  const [profileData, setProfileData] = useState([])
  const [favouriteProfileData, setFavouriteProfileData] = useState([])

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=9')
    .then(res => res.json())
    .then(data => data.results.map(profile => {
      return setProfileData(prevData => 
        [...prevData, 
          {
            ...profile,
            isFavourite: false,
            uid: uniqid()
          }])
    }))
  }, [])

  console.log(profileData)

  const removeProfile = id => {
    setProfileData(prevData => prevData.filter(profile => {
      return profile.uid !== id
    }))
  }

  const addProfile = () => {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => setProfileData(prevData => [{
      ...data.results[0],
      isFavourite: false,
      uid: uniqid()
    }, ...prevData]))
  }

  const addFavouriteProfile = id => {
    const selectedProfile = profileData.id
    if (!favouriteProfileData.filter(profile => profile === selectedProfile).length) {
      setFavouriteProfileData(prevData => [selectedProfile, ...prevData])
    }
  }



  const addProfileRow = () => {
    const itemsToAdd = 3 - profileData.length % 3
    fetch(`https://randomuser.me/api/?results=${itemsToAdd}`)
    .then(res => res.json())
    .then(data => data.results.map(profile => {
      return setProfileData(prevData => [profile, ...prevData])
    }))
  }

  return (
    <Context.Provider value={{
      profileData,
      favouriteProfileData,
      addFavouriteProfile,
      removeProfile,
      addProfile,
      addProfileRow
    }}>
      {children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}