import { Typography } from '@mui/material'
import { TextField, Button, Box } from '@mui/material'
import { useState } from 'react'
import BasicTable from './ManufTable'
function Manufacturer() {
  const [addManuf, setaddManuf] = useState(false)
  return (
    <>
      <Typography variant='h3' component='h1' margin={10}>Manufacturer</Typography>
      <Box justifyContent={'center'} maxWidth={650} marginX='auto' marginY={10}>
        {
          (addManuf ? (
            <>
              <TextField type="text" name="manufName" id="" placeholder='name' variant='outlined' />
              <br />
              <TextField type="text" multiline rows={3} name="note" id="" placeholder='notes' variant='outlined' />
              <br />
              <Button onClick={() => setaddManuf(false)}>close</Button>
              <Button onClick={() => setaddManuf(false)}>Add</Button>
            </>
          ) : <Button onClick={() => setaddManuf(true)}>Add New Manufacturer</Button>
          )
        }
        {
          (addManuf)
        }
        <BasicTable />
      </Box>
    </>
  )
}

export default Manufacturer
