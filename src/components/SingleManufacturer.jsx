import { Typography, Box, Button } from '@mui/material'
import BatchTable from './BatchTable'
import EspTable from './EspTable'
import { useState } from 'react'
import { TextField } from '@mui/material'

function shrinkString(str, n = 250) {
  if (str.length < n) {
    return str
  } else {
    return (str.slice(0, n) + '...')
  }
}
function SingleManufactur() {
  const [manufName, setManufName] = useState('manuf name')
  const [manufNote, setManufNote] = useState('Nostrud id laboris aliquip nulla consequat deserunt. Ullamco id minim magna qui. Fugiat reprehenderit non sint ipsum cillum culpa. Ea enim ea ut voluptate. Amet est Lorem nostrud Lorem. Esse Lorem commodo fugiat in. Amet elit laborum pariatur nulla esse deserunt.')
  const [dupManufName, setDupManufName] = useState(manufName)
  const [dupManufNote, setDupManufNote] = useState(manufNote)
  const [more, setMore] = useState(false)
  const [editing, setEditing] = useState(false)


  const handleEditing = () => {
    console.log('handle editing')
    if (editing) {
      if (dupManufName.trim().length < 4 || dupManufNote.trim().length < 4) {
        alert('manufacturer name or notes cannot be less than three characters long')
        return
      }
      setManufName(dupManufName)
      setManufNote(dupManufNote)
      setEditing(false)
    } else {
      setEditing(true)
    }
  }

  return (
    <>
      <Box maxWidth={700} marginX={'auto'} marginY={10}>
        {
          (!editing) ? (<Box margin={4}>
            <Typography variant={'h4'}>Manufacturer Name:</Typography>
            <Typography fontSize={20}>{manufName}</Typography>
            <Typography variant={'h4'}>Note:</Typography>
            <Typography fontSize={20}>{(more) ? manufNote : shrinkString(manufNote, 100)}</Typography>
            {(manufNote.length > 100) ? <Button onClick={() => setMore((e) => !e)}>{(more) ? 'Show less' : 'Show More'}</Button> : ''}
          </Box>) : (
            <Box>
              <TextField placeholder='name' defaultValue={manufName} variant='outlined' onChange={(e) => setDupManufName(e.target.value)} />
              <TextField placeholder='notes' defaultValue={manufNote} multiline rows={3} variant='outlined' onChange={(e) => setDupManufNote(e.target.value)} />
            </Box>
          )
        }

        <Box>
          <Button onClick={handleEditing}>{(editing) ? 'save' : 'Edit Details'}</Button>
          {(editing) ? (<Button onClick={() => setEditing(false)}>Back</Button>) : ''}
        </Box>
        <BatchTable />
        <EspTable />
      </Box>
    </>
  )
}

export default SingleManufactur
