import React, {useState, useEffect} from "react"

const Context = React.createContext()

const ContextProvider = ({children}) => {
  const [profileData, setProfileData] = useState([])
  const [favouriteProfileData, setFavouriteProfileData] = useState([])

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=9')
    .then(res => res.json())
    .then(data => setProfileData(data.results))
  }, [])

  const removeProfile = id => {
    const selectedProfile = profileData[id]
    setProfileData(prevData => prevData.filter(
      (profile) => profile !== selectedProfile)
    )
  }

  const addFavouriteProfile = id => {
    const selectedProfile = profileData[id]
    setFavouriteProfileData(prevData => [selectedProfile, ...prevData])
  }

  console.log(profileData)

  const addProfile = () => {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => setProfileData(prevData => [data.results[0], ...prevData]))
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