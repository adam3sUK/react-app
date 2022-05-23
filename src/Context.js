import React, {useState, useEffect} from "react"
import uniqid from 'uniqid'
const Context = React.createContext()

const ContextProvider = ({children}) => {
  const [profileData, setProfileData] = useState([])

  const addFavAndUid = (obj) => {
    return {
      ...obj,
      isFavourite: false,
      uid: uniqid()
    }
  }

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=9')
    .then(res => res.json())
    .then(data => data.results.map(profile => {
      return setProfileData(prevData => [...prevData, addFavAndUid(profile)])
    }))
  }, [])

  const removeProfile = id => {
    setProfileData(prevData => prevData.filter(profile => {
      return profile.uid !== id
    }))
  }

  const addProfile = () => {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => setProfileData(prevData => [addFavAndUid(data.results[0]), ...prevData]))
  }

  const addProfileRow = () => {
    const itemsToAdd = 3 - profileData.length % 3
    fetch(`https://randomuser.me/api/?results=${itemsToAdd}`)
    .then(res => res.json())
    .then(data => data.results.map(profile => {
      return setProfileData(prevData => [addFavAndUid(profile), ...prevData])
    }))
  }

  const toggleFavouriteProfile = id => {
    const newProfileData = profileData.map(profile => {
      if(profile.uid === id) {
        return {
          ...profile,
          isFavourite: !profile.isFavourite
        }
      } else {
        return profile
      }
    })
    setProfileData(newProfileData)
  }

  return (
    <Context.Provider value={{
      profileData,
      toggleFavouriteProfile,
      removeProfile,
      addProfile,
      addProfileRow
    }}>
      {children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}