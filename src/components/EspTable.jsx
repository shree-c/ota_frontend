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
import { esp } from '../data.json'


/*
  batch details
  | batchname | batch added date | bin file name + version | no_of_pics | delete |

  esp details
  | esp name | mac | date | activate | delete |

*/


export default function EspTable() {
  return (
    <TableContainer sx={{ maxWidth: 650, maxHeight: 400 }}
      component={Paper}>
      <Table aria-label="Batch table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell align="center">ESP name</TableCell>
            <TableCell align="center">MAC</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {esp.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Link underline='always'>{row.name}</Link>
              </TableCell>
              <TableCell align="right">{row.mac}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right"><Button>Activate</Button><Button>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

