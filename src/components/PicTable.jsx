import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Button } from '@mui/material'
import { Link } from '@mui/material'
import { pics } from '../data.json'

/*
  | picID | last Updated date | binary file + version |  delete | mac of esp |
*/

export default function BatchTable() {
  return (
    <TableContainer sx={{ maxWidth: 650, maxHeight: 400 }}
      component={Paper}>
      <Table aria-label="Batch table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell align="center">PIC ID</TableCell>
            <TableCell align="center">Last Update</TableCell>
            <TableCell align="center">Bin File</TableCell>
            <TableCell align="center">MAC</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pics.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Link underline='always'>{row.id}</Link>
              </TableCell>
              <TableCell align="right">{row.last_update}</TableCell>
              <TableCell align="right">{row.bin_file}</TableCell>
              <TableCell align="right">{row.mac}</TableCell>
              <TableCell align="right"><Button>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

