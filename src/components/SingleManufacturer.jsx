import { Typography, Box, Button } from '@mui/material'
import BatchTable from './BatchTable'
import EspTable from './EspTable'
function SingleManufactur() {
  return (
    <>
      <Box maxWidth={700} marginX={'auto'} marginY={10}>
        <Box >
          <Typography fontSize={20}>Manufacturer Name : some name</Typography>
          <Typography fontSize={20}>Manufacturer ID : some ID</Typography>
          <Button>Edit</Button>
        </Box>
        <Box>
          <Typography variant='h5' marginY={5}>Batches</Typography>
          <BatchTable />
        </Box>
        <Box>
          <Typography variant='h5' marginY={5}>ESPs</Typography>
          <EspTable />
        </Box>
      </Box>
    </>
  )
}

export default SingleManufactur
