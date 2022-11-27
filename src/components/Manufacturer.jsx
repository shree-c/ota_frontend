import { Typography } from '@mui/material'
import { Button, Box } from '@mui/material'
import { useEffect } from 'react'
import { useState } from 'react'
import ManufTable from './ManufTable'
import axios from 'axios'
import AddManuf from './AddManuf'

function Manufacturer() {
  const [addManuf, setaddManuf] = useState(false)
  const [manufs, setManufs] = useState([])

  const createNewManuf = (name, notes) => {
    const addNewManuf = async () => {
      try {
        const res = await axios.post(`http://localhost:5000/api/v1/manufacturer`, {
          name,
          notes
        })
        setManufs((m) => [...m, res.data.body])
      } catch (error) {
        console.log(error.message)
      }
    }
    addNewManuf()
  }

  const deleteManuf = (id) => {
    (async function () {
      try {
        await axios.delete(`http://localhost:5000/api/v1/manufacturer/${id}`)
        setManufs((m) => m.filter((v) => v._id !== id))
      } catch (error) {
        console.log(error.message)
      }
    })()
  }

  useEffect(() => {
    const fetchManufs = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/v1/manufacturers`)
        setManufs(res.data.body)
      } catch (error) {
        console.log(error.response, error.request)
      }
    }
    fetchManufs()
  }, [])

  return (
    <>
      <Typography variant='h5' component='h1' margin={10}>Manufacturer</Typography>
      <Box justifyContent={'center'} maxWidth={650} marginX='auto' marginY={10}>
        <Box marginY={5}>
          {
            (addManuf ? <AddManuf createNewManuf={createNewManuf} /> : '')
          }
          <Button onClick={() => setaddManuf((e) => !e)}>{(addManuf) ? 'Close' : 'Add'}</Button>
        </Box>
        <ManufTable manufs={manufs} deleteSingleManuf={deleteManuf} />
      </Box>
    </>
  )
}

export default Manufacturer
