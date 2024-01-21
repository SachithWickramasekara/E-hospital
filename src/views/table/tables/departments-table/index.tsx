// ** MUI Imports
import Box from '@mui/material/Box'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

// ** Data Import
import { rows } from 'src/@fake-db/table/departments-table'

const columns: GridColDef[] = [
  {
    flex: 0.25,
    field: 'id',
    headerName: 'ID'
  },
  {
    flex: 4,
    minWidth: 200,
    field: 'full_name',
    headerName: 'Name'
  },
  {
    flex: 1,
    minWidth: 230,
    field: 'actions',
    headerName: 'Actions'
  }
]

const DepartmentTable = () => {
  return (
    <Box sx={{ height: 500 ,px:8 }}>
      <DataGrid columns={columns} rows={rows.slice(0, 10)} />
    </Box>
  )
}

export default DepartmentTable
