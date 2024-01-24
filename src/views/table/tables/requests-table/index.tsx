// ** React Imports
import { useEffect, useCallback, useState } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { SelectChangeEvent } from '@mui/material/Select'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Store Imports
import { useDispatch, useSelector } from 'react-redux'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Utils Import
import { getInitials } from 'src/@core/utils/get-initials'

// ** Actions Imports
import { fetchData } from 'src/store/apps/user'

// ** Types Imports
import { RootState, AppDispatch } from 'src/store'
import { UsersType } from 'src/types/apps/userTypes'
import { ThemeColor } from 'src/@core/layouts/types'
import TableHeader from './TableHeader'

// ** Custom Components Imports


interface UserStatusType {
  [key: string]: ThemeColor
}

interface CellType {
  row: UsersType
}



const userStatusObj: UserStatusType = {
  active: 'success',
  pending: 'warning',
  inactive: 'secondary'
}

// ** renders client column
const renderClient = (row: UsersType) => {
  if (row.avatar.length) {
    return <CustomAvatar src={row.avatar} sx={{ mr: 3, width: 38, height: 38 }} />
  } else {
    return (
      <CustomAvatar
        skin='light'
        color={row.avatarColor}
        sx={{ mr: 2.5, width: 38, height: 38, fontWeight: 500, fontSize: theme => theme.typography.body1.fontSize }}
      >
        {getInitials(row.fullName ? row.fullName : 'John Doe')}
      </CustomAvatar>
    )
  }
}

const columns: GridColDef[] = [
  {
    flex: 0.25,
    minWidth: 280,
    field: 'fullName',
    headerName: 'User',
    renderCell: ({ row }: CellType) => {
      const { fullName, email } = row

      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {renderClient(row)}
          <Box sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
            <Typography
              noWrap
              component={Link}
              href='/apps/user/view/account'
              sx={{
                fontWeight: 500,
                textDecoration: 'none',
                color: '#830823',
                '&:hover': { color: 'primary.main' }
              }}
            >
              {fullName}
            </Typography>
            <Typography noWrap variant='body2' sx={{ color: 'black' }}>
              {email}
            </Typography>
          </Box>
        </Box>
      )
    }
  },
  {
    flex: 0.15,
    field: 'role',
    minWidth: 170,
    headerName: 'Request ID',
    renderCell: ({ row }: CellType) => {
      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography noWrap sx={{ color: 'text.primary', textTransform: 'capitalize' }}>
            {row.role}
          </Typography>
        </Box>
      )
    }
  },
  {
    flex: 0.1,
    minWidth: 120,
    headerName: 'SLA',
    field: 'currentPlan',
    renderCell: ({ row }: CellType) => {
      return (
        <Typography noWrap sx={{ fontWeight: 500, color: 'text.primary', textTransform: 'capitalize' }}>
          {row.currentPlan}
        </Typography>
      )
    }
  },
  {
    flex: 0.15,
    minWidth: 190,
    field: 'billing',
    headerName: 'Billing',
    renderCell: ({ row }: CellType) => {
      return (
        <Typography noWrap sx={{ color: 'text.primary' }}>
          {row.billing}
        </Typography>
      )
    }
  },
  {
    flex: 0.1,
    minWidth: 110,
    field: 'status',
    headerName: 'Status',
    renderCell: ({ row }: CellType) => {
      return (
        <CustomChip
          rounded
          skin='light'
          size='small'
          label={row.status}
          color={userStatusObj[row.status]}
          sx={{ textTransform: 'capitalize' }}
        />
      )
    }
  },
  {
    flex: 0.1,
    minWidth: 100,
    sortable: false,
    field: 'actions',
    headerName: 'Actions',
    renderCell: () => (
      <IconButton component={Link} href='/apps/user/view/account'>
        <Icon icon='tabler:eye' />
      </IconButton>
    )
  }
]

const RequestTable = () => {
  // ** State
  const [plan, setPlan] = useState<string>('')
  const [value, setValue] = useState<string>('')
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 10 })

  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()
  const store = useSelector((state: RootState) => state.user)

  useEffect(() => {
    dispatch(
      fetchData({
        role: '',
        q: value,
        status: '',
        currentPlan: plan
      })
    )
  }, [dispatch, plan, value])

  const handleFilter = useCallback((val: string) => {
    setValue(val)
  }, [])

  const handlePlanChange = useCallback((e: SelectChangeEvent<unknown>) => {
    setPlan(e.target.value as string)
  }, [])

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card sx={{ backgroundColor: '#F9F3E8' }}>
          <TableHeader plan={plan} value={value} handleFilter={handleFilter} handlePlanChange={handlePlanChange} />
          <DataGrid
            autoHeight
            rowHeight={62}
            rows={store.data}
            columns={columns}
            checkboxSelection
            disableRowSelectionOnClick
            pageSizeOptions={[10, 25, 50]}
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
          />
        </Card>
      </Grid>
    </Grid>
  )
}

export default RequestTable
