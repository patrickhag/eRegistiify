import React, { ReactNode, createContext, useState } from "react"
import { allPhoneTypes } from "../../pages/Items"

interface UserInfoTypes {
  address: string
  contactInfo: string
  email: string
  id: string
  names: string
  nationalId: string
  password: string
}

interface UserContextTypes {
  userInfo: UserInfoTypes
  setUserInfo: (data: UserInfoTypes[]) => void
}

export const StateContext = createContext({
  phone: {},
  setPhone: () => {},
})

export const UserStateContext: UserContextTypes = React.createContext({
  userInfo: null,
  setUserInfo: () => {
    console.log(123)
  },
})

export const ContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [phone, setPhone] = useState({})
  const [userInfo, setUserInfo] = React.useState({})
  return (
    <>
      <StateContext.Provider
        value={{
          phone,
          setPhone,
        }}
      >
        {children}
      </StateContext.Provider>

      <UserStateContext.Provider
        value={{
          userInfo,
          setUserInfo,
        }}
      >
        {children}
      </UserStateContext.Provider>
    </>
  )
}
