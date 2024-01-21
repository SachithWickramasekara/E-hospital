// ** MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import { Box, Button, SelectChangeEvent } from '@mui/material'
import CustomTextField from 'src/@core/components/mui/text-field'
import Icon from 'src/@core/components/icon'
import DepartmentTable from 'src/views/table/tables/departments-table'

interface TableHeaderProps {
  plan: string
  value: string
  handleFilter: (val: string) => void
  handlePlanChange: (e: SelectChangeEvent<unknown>) => void
}
const Departments = (props: TableHeaderProps) => {
  const { value } = props

  return (
    <>
      <Card sx={{ mb: 6 }}>
        <CardHeader title='Departments' />
      </Card>
      <Card>
        <Box
          sx={{
            p: 8,
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
            <CustomTextField
              value={value}
              sx={{ mr: 4, border: '10px', borderColor: '#830823', color: '#830823',"::placeholder": { color: '#830823' } }}
              placeholder='Search User'
              onChange={() => {
                console.log('changed')
              }}
            />
            <Button
              variant='contained'
              sx={{ whiteSpace: 'nowrap', backgroundColor: '#830823', ':hover': { backgroundColor: '#A53B52' } }}
              onClick={() => {
                console.log('clicked')
              }}
            >
              + New Department
            </Button>
          </Box>
          <Box>
            <Button
              variant='outlined'
              startIcon={<Icon icon='tabler:download' />}
              sx={{ mr: 4, color: '#830823' , outlineColor: '#830823', borderColor: '#830823' }}
            >
              Download
            </Button>
          </Box>
        </Box>
        <DepartmentTable />
      </Card>
    </>
  )
}

export default Departments
