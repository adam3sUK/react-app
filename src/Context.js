import React, {useState, useEffect} from "react"

const Context = React.createContext()

const ContextProvider = ({children}) => {
  const [profileData, setProfileData] = useState([])

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=11')
    .then(res => res.json())
    .then(data => setProfileData(data.results))
  }, [])

  const removeProfile = id => {
    const selectedProfile = profileData[id]
    setProfileData(prevData => prevData.filter(
      (profile) => profile !== selectedProfile)
    )
  }

  return (
    <Context.Provider value={{
      profileData,
      removeProfile
    }}>
      {children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}