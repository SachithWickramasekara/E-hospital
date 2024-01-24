// ** MUI Imports
import { Button, Menu } from '@mui/material'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import { SelectChangeEvent } from '@mui/material/Select'
import React, { useState, forwardRef, MouseEvent } from 'react'
import format from 'date-fns/format'
import addDays from 'date-fns/addDays'

// ** Custom Component Import
import CustomTextField from 'src/@core/components/mui/text-field'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import { DateType } from 'src/types/forms/reactDatepickerTypes'
import DatePicker from 'react-datepicker'

interface PickerProps {
  label?: string
  end: Date | number
  start: Date | number
}

interface TableHeaderProps {
  plan: string
  value: string
  handleFilter: (val: string) => void
  handlePlanChange: (e: SelectChangeEvent<unknown>) => void
}

const TableHeader = (props: TableHeaderProps) => {
  // ** Props
  const { plan, handlePlanChange } = props
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const [startDateRange, setStartDateRange] = useState<DateType>(new Date())
  const [endDateRange, setEndDateRange] = useState<DateType>(addDays(new Date(), 45))
  const handleOnChangeRange = (dates: any) => {
    const [start, end] = dates
    setStartDateRange(start)
    setEndDateRange(end)
  }

  const CustomInput = forwardRef((props: PickerProps, ref) => {
    const startDate = format(props.start, 'MM/dd/yyyy')
    const endDate = props.end !== null ? ` - ${format(props.end, 'MM/dd/yyyy')}` : null
    
    const value = `${startDate}${endDate !== null ? endDate : ''}`

    return <CustomTextField inputRef={ref} label={props.label || ''} {...props} value={value} />
  })

  return (
    <Box
      sx={{
        p: 8,
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <CustomTextField
          value={''}
          sx={{
            border: '10px',
            borderColor: '#830823',
            color: '#830823',
            '::placeholder': { color: '#830823' }
          }}
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
          + New Request
        </Button>
        <CustomTextField
          select
          value={plan}
          defaultValue='Select Plan'
          SelectProps={{ displayEmpty: true, value: plan, onChange: e => handlePlanChange(e) }}
        >
          <MenuItem value=''>Status</MenuItem>
          <MenuItem value='basic'>New</MenuItem>
          <MenuItem value='company'>In Progress</MenuItem>
          <MenuItem value='enterprise'>Completed</MenuItem>
          <MenuItem value='team'>On hold</MenuItem>
          <MenuItem value='team'>Escalated</MenuItem>
          <MenuItem value='team'>Delayed</MenuItem>
        </CustomTextField>
        <div>
          <DatePickerWrapper sx={{ my: '20px' }}>
            <DatePicker
              selectsRange
              monthsShown={2}
              endDate={endDateRange}
              selected={startDateRange}
              startDate={startDateRange}
              shouldCloseOnSelect={false}
              id='date-range-picker-months'
              onChange={handleOnChangeRange}
            
              customInput={<CustomInput end={endDateRange as Date | number} start={startDateRange as Date | number} />}
            />
          </DatePickerWrapper>
        </div>
        <CustomTextField
          select
          value={plan}
          defaultValue='Select Plan'
          SelectProps={{ displayEmpty: true, value: plan, onChange: e => handlePlanChange(e) }}
        >
          <MenuItem value=''>Department</MenuItem>
          <MenuItem value='basic'>New</MenuItem>
          <MenuItem value='company'>In Progress</MenuItem>
          <MenuItem value='enterprise'>Completed</MenuItem>
          <MenuItem value='team'>On hold</MenuItem>
          <MenuItem value='team'>Escalated</MenuItem>
          <MenuItem value='team'>Delayed</MenuItem>
        </CustomTextField>
      </Box>
      <Box>
        <Button
          variant='outlined'
          aria-controls='simple-menu'
          aria-haspopup='true'
          onClick={handleClick}
          sx={{
            whiteSpace: 'nowrap',
            color: 'white',
            backgroundColor: '#830823',
            ':hover': { backgroundColor: '#A53B52' }
          }}
        >
          Advanced Filters
        </Button>
        <Menu keepMounted id='simple-menu' anchorEl={anchorEl} onClose={handleClose} open={Boolean(anchorEl)}>
          <MenuItem onClick={handleClose}>
            <CustomTextField
              select
              value={plan}
              defaultValue='Select Plan'
              SelectProps={{ displayEmpty: true, value: plan, onChange: e => handlePlanChange(e) }}
            >
              <MenuItem value=''>Department</MenuItem>
              <MenuItem value='basic'>New</MenuItem>
              <MenuItem value='company'>In Progress</MenuItem>
              <MenuItem value='enterprise'>Completed</MenuItem>
              <MenuItem value='team'>On hold</MenuItem>
              <MenuItem value='team'>Escalated</MenuItem>
              <MenuItem value='team'>Delayed</MenuItem>
            </CustomTextField>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <CustomTextField
              select
              value={plan}
              defaultValue='Select Plan'
              SelectProps={{ displayEmpty: true, value: plan, onChange: e => handlePlanChange(e) }}
            >
              <MenuItem value=''>Block</MenuItem>
              <MenuItem value='basic'>New</MenuItem>
              <MenuItem value='company'>In Progress</MenuItem>
              <MenuItem value='enterprise'>Completed</MenuItem>
              <MenuItem value='team'>On hold</MenuItem>
              <MenuItem value='team'>Escalated</MenuItem>
              <MenuItem value='team'>Delayed</MenuItem>
            </CustomTextField>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <CustomTextField
              select
              value={plan}
              defaultValue='Select Plan'
              SelectProps={{ displayEmpty: true, value: plan, onChange: e => handlePlanChange(e) }}
            >
              <MenuItem value=''>Floor</MenuItem>
              <MenuItem value='basic'>New</MenuItem>
              <MenuItem value='company'>In Progress</MenuItem>
              <MenuItem value='enterprise'>Completed</MenuItem>
              <MenuItem value='team'>On hold</MenuItem>
              <MenuItem value='team'>Escalated</MenuItem>
              <MenuItem value='team'>Delayed</MenuItem>
            </CustomTextField>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <CustomTextField
              select
              value={plan}
              defaultValue='Select Plan'
              SelectProps={{ displayEmpty: true, value: plan, onChange: e => handlePlanChange(e) }}
            >
              <MenuItem value=''>Area / Room</MenuItem>
              <MenuItem value='basic'>New</MenuItem>
              <MenuItem value='company'>In Progress</MenuItem>
              <MenuItem value='enterprise'>Completed</MenuItem>
              <MenuItem value='team'>On hold</MenuItem>
              <MenuItem value='team'>Escalated</MenuItem>
              <MenuItem value='team'>Delayed</MenuItem>
            </CustomTextField>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <CustomTextField
              select
              value={plan}
              defaultValue='Select Plan'
              SelectProps={{ displayEmpty: true, value: plan, onChange: e => handlePlanChange(e) }}
            >
              <MenuItem value=''>Assigned to</MenuItem>
              <MenuItem value='basic'>New</MenuItem>
              <MenuItem value='company'>In Progress</MenuItem>
              <MenuItem value='enterprise'>Completed</MenuItem>
              <MenuItem value='team'>On hold</MenuItem>
              <MenuItem value='team'>Escalated</MenuItem>
              <MenuItem value='team'>Delayed</MenuItem>
            </CustomTextField>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <CustomTextField
              select
              value={plan}
              defaultValue='Select Plan'
              SelectProps={{ displayEmpty: true, value: plan, onChange: e => handlePlanChange(e) }}
            >
              <MenuItem value=''>Created by</MenuItem>
              <MenuItem value='basic'>New</MenuItem>
              <MenuItem value='company'>In Progress</MenuItem>
              <MenuItem value='enterprise'>Completed</MenuItem>
              <MenuItem value='team'>On hold</MenuItem>
              <MenuItem value='team'>Escalated</MenuItem>
              <MenuItem value='team'>Delayed</MenuItem>
            </CustomTextField>
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  )
}

export default TableHeader
