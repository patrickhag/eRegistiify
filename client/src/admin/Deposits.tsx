import * as React from "react"
import Typography from "@mui/material/Typography"
import Title from "./Title"
import { StateContext, UserStateContext } from "./contexts/ContextProvider"

export default function Deposits() {
  const { phone } = React.useContext(StateContext)
  const { userInfo } = React.useContext(UserStateContext)
  return (
    <>
      <Title>All devices</Title>
      <Typography component='p' variant='h4'>
        {/* {phone.length} */}
      </Typography>
      <div className='w3-margin-top'>
        <Title>All users</Title>
        <Typography component='p' variant='h4'>
          {/* {userInfo.length} */}
        </Typography>
      </div>
    </>
  )
}
