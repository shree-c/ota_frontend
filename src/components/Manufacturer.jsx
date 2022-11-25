import { Typography } from '@mui/material'
import { TextField, Button, Box } from '@mui/material'
import { useEffect } from 'react'
import { useState } from 'react'
import ManufTable from './ManufTable'
function Manufacturer() {
  const [addManuf, setaddManuf] = useState(false)
  const [addDisabled, setAddDisabled] = useState(true)
  const [name, setName] = useState('')
  const [note, setNote] = useState('')
  useEffect(() => {
    if (name.trim().length < 3 || note.trim().length < 3) {
      setAddDisabled(true)
    } else {
      setAddDisabled(false)
    }
  }, [name, note, addManuf])
  const createNewManuf = () => {
    console.log({ name, note })
      
  }

  return (
    <>
      <Typography variant='h5' component='h1' margin={10}>Manufacturer</Typography>
      <Box justifyContent={'center'} maxWidth={650} marginX='auto' marginY={10}>
        <Box marginY={5}>
          {
            (addManuf ? (
              <>
                <TextField sx={{
                  display: 'block',
                  marginBottom: 2
                }} error={false} type="text" name="manufName" id="" placeholder='name' variant='outlined' value={name} onChange={(e) => setName(e.target.value)} />
                <TextField type="text" multiline rows={3} name="note" id="" placeholder='notes' variant='outlined' value={note} onChange={(e) => setNote(e.target.value)} />
                <Button onClick={() => setaddManuf(false)}>close</Button>
                <Button disabled={addDisabled} onClick={createNewManuf}>Add</Button>
              </>
            ) : <Button onClick={() => setaddManuf(true)}>Add New Manufacturer</Button>
            )
          }
        </Box>
        <ManufTable />
      </Box>
    </>
  )
}

export default Manufacturer
