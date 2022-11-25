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
import { batch } from '../data.json'


/*
  batch details
  | batchname | batch added date | bin file name + version | no_of_pics | delete |

  esp details
  | esp name | mac | date | activate | delete |

*/


export default function BatchTable() {
  return (
    <TableContainer sx={{ maxWidth: 650, maxHeight: 400 }}
      component={Paper}>
      <Table aria-label="Batch table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell align="center">BatchName</TableCell>
            <TableCell align="center">Added Date</TableCell>
            <TableCell align="center">Bin File</TableCell>
            <TableCell align="center">Number of PICs</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {batch.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Link underline='always'>{row.name}</Link>
              </TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.binFile}</TableCell>
              <TableCell align="right">{row.no_of_pics}</TableCell>
              <TableCell align="right"><Button>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
