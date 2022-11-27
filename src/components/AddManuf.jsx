import { TextField, Button } from '@mui/material'
import { useState, useEffect } from 'react'

export default function AddManuf({ createNewManuf }) {
  const [addDisabled, setAddDisabled] = useState(true)
  const [name, setName] = useState('')
  const [note, setNote] = useState('')
  useEffect(() => {
    if (name.trim().length < 3 || note.trim().length < 3) {
      setAddDisabled(true)
    } else {
      setAddDisabled(false)
    }
  }, [name, note])

  return (
    <>
      <TextField sx={{
        display: 'block',
        marginBottom: 2
      }} error={false} type="text" name="manufName" id="" placeholder='name' variant='outlined' value={name} onChange={(e) => setName(e.target.value)} />
      <TextField type="text" multiline rows={3} name="note" id="" placeholder='notes' variant='outlined' value={note} onChange={(e) => setNote(e.target.value)} />
      <Button disabled={addDisabled} onClick={() => createNewManuf(name, note)}>Add</Button>
    </>

  )
}
