// ** React Imports

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'

// ** Third Party Imports

// ** Icon Imports

// ** Types
import FileUploaderMultiple from 'src/views/forms/form-elements/file-uploader/FileUploaderMultiple'



const NewRequests = () => {
  // ** States


  return (
    <>
      <Card sx={{ mb: 6, backgroundColor: '#F9F3E8' }}>
        <CardHeader title='Create New Request' />
      </Card>
      <Card sx={{ backgroundColor: '#F9F3E8' }}>
        {/* <Divider sx={{ m: '0 !important' }} /> */}
        <form onSubmit={e => e.preventDefault()}>
          <CardContent>
            <Grid container spacing={5}>
              {/* <Grid item xs={12}>
                <Typography variant='body2' sx={{ fontWeight: 600 }}>
                  1. Account Details
                </Typography>
              </Grid> */}
              <Grid item xs={12} sm={6}>
                <CustomTextField select fullWidth label='Service' id='form-layouts-separator-select' defaultValue=''>
                  <MenuItem value='UK'>Select Service</MenuItem>
                  <MenuItem value='USA'>USA</MenuItem>
                  <MenuItem value='Australia'>Australia</MenuItem>
                  <MenuItem value='Germany'>Germany</MenuItem>
                </CustomTextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomTextField select fullWidth label='Department' id='form-layouts-separator-select' defaultValue=''>
                  <MenuItem value='UK'>Select Department</MenuItem>
                  <MenuItem value='USA'>USA</MenuItem>
                  <MenuItem value='Australia'>Australia</MenuItem>
                  <MenuItem value='Germany'>Germany</MenuItem>
                </CustomTextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomTextField fullWidth type='text' label='Full name' placeholder='Enter your full name' />
              </Grid>
              <Grid item xs={12}>
                <CustomTextField multiline rows={3} fullWidth label='Notes' placeholder='1456, Liberty Street' />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomTextField select fullWidth label='Priority' id='form-layouts-separator-select' defaultValue=''>
                  <MenuItem value='UK'>Medium</MenuItem>
                  <MenuItem value='USA'>USA</MenuItem>
                  <MenuItem value='Australia'>Australia</MenuItem>
                  <MenuItem value='Germany'>Germany</MenuItem>
                </CustomTextField>
              </Grid>
              <Grid
                item
                xs={12}
                sx={{ marginLeft: '20px', border: '1px solid #830823', borderRadius: '10px', marginTop: '20px' }}
              >
                <FileUploaderMultiple />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomTextField fullWidth type='text' label='Room/Unit' placeholder='Enter your full name' />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomTextField fullWidth type='text' label='Phone Number' placeholder='Enter your full name' />
              </Grid>
            </Grid>
          </CardContent>
          <Divider sx={{ m: '0 !important' }} />
          <CardActions>
            <Button type='submit' sx={{ mr: 2 }} variant='contained'>
              Submit
            </Button>
            <Button type='reset' color='secondary' variant='tonal'>
              Reset
            </Button>
          </CardActions>
        </form>
      </Card>
    </>
  )
}

export default NewRequests
