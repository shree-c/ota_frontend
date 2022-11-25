import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { manufacturer } from '../data.json'
import { Button } from '@mui/material'
import { Link as Rlink } from 'react-router-dom'
export default function ManufTable() {
  return (
    <TableContainer sx={{ maxWidth: '650px' }}
      component={Paper}>
      <Table aria-label="manufacturer table">
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {manufacturer.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Rlink to={`/manufacturer/${row._id}`}>{row._id}</Rlink>
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right"><Button>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
