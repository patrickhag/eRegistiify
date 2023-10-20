import * as React from "react"
import Link from "@mui/material/Link"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Title from "./Title"

function preventDefault(event: React.MouseEvent) {
  event.preventDefault()
}

export default function Orders() {
  const data = localStorage.getItem("usersInfo")
  const parsedUsersInfoData = data ? JSON.parse(data) : null
  // const { id } = parsedData ?? {}
  console.log(parsedUsersInfoData.length)

  return (
    <React.Fragment>
      <Title>Recent devices</Title>
      <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell>Date of purchase</TableCell>
            <TableCell>Brand</TableCell>
            <TableCell>Model</TableCell>
            <TableCell>Price</TableCell>
            <TableCell align='right'>Owner</TableCell>
          </TableRow>
        </TableHead>
        {parsedUsersInfoData.length}
      </Table>
      <Link color='primary' href='#' onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  )
}
