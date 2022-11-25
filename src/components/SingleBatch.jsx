import { Typography, Box, Button } from '@mui/material'
import PicTable from './PicTable'
function SingleBatch() {
  return (
    <>
      <Box maxWidth={700} marginX={'auto'} marginY={10}>
        <Box >
          <Typography fontSize={20}>Batch Name : some name</Typography>
          <Typography fontSize={20}>Batch ID : some ID</Typography>
          <Button>Edit</Button>
        </Box>
        <Box>
          <Typography variant='h5' marginY={5}>PICs</Typography>
          <PicTable />
        </Box>
      </Box>
    </>
  )
}

export default SingleBatch

