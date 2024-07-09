import { useEffect, useReducer } from 'react'
import { SlackContext,slackReducer, initialState } from './context.js'
import useAuth from './hooks/useAuth'
import logUserToFB from './utils/logUserToFB'
import './index.css'

import SignIn from './components/SignIn'
import SlackApp from './components/SlackApp'

const App = ()=>{

  const [state,dispatch] = useReducer(slackReducer,initialState)
  const user = useAuth()

  const getUser =()=>{
    if(user){
      const { displayName,email,photoURL } = user
      dispatch({type:'USER',payload:{displayName,email,photoURL}})
      // logUserToFB(user)
    }
  }

useEffect(getUser,[user])

  return (
    <SlackContext.Provider value={{state,dispatch}}>

      <>
        {user&&<SlackApp/>}
        {!user&&<SignIn/>}
      </>
    </SlackContext.Provider>
  )
}

export default App