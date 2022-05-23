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

  console.log(profileData)

  const addProfile = () => {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => setProfileData(prevData => [...prevData, data.results[0]]))
  }

  return (
    <Context.Provider value={{
      profileData,
      removeProfile,
      addProfile
    }}>
      {children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}