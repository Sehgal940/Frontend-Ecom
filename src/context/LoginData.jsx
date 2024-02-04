import React, { Children } from 'react'
import { createContext, useState } from 'react';
const appState = createContext(null)
function LoginData({children}) {
  const [acc,setAcc]=useState('')
  return (
    <appState.Provider value={{acc,setAcc}}>
     {children}
    </appState.Provider>
  )
}

export default LoginData
export {appState}