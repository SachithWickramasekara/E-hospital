import { Box, Button, Card, CardHeader, Grid, MenuItem, SelectChangeEvent, Menu } from '@mui/material'
import axios from 'axios'
import { GetStaticProps, InferGetStaticPropsType } from 'next/types'
import React, { useCallback, useState, forwardRef, MouseEvent } from 'react'
import CustomTextField from 'src/@core/components/mui/text-field'
import { CardStatsType } from 'src/@fake-db/types'

// import CardStatisticsHorizontal from 'src/views/ui/cards/statistics/CardStatisticsHorizontal'
import { useTheme } from '@mui/material/styles'
import format from 'date-fns/format'
import addDays from 'date-fns/addDays'
import DatePicker, { ReactDatePickerProps } from 'react-datepicker'

import { DateType } from 'src/types/forms/reactDatepickerTypes'

// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import RequestCard from 'src/@core/components/cards/RequestCard'

interface PickerProps {
  label?: string
  end: Date | number
  start: Date | number
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get('/cards/statistics')
  const apiData: CardStatsType = res.data

  return {
    props: {
      apiData
    }
  }
}

interface PickerProps {
  label?: string
  end: Date | number
  start: Date | number
}

const Requests = ({ apiData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [plan, setPlan] = useState<string>('')
  const handlePlanChange = useCallback((e: SelectChangeEvent<unknown>) => {
    setPlan(e.target.value as string)
  }, [])
  const theme = useTheme()
  const { direction } = theme
  const popperPlacement: ReactDatePickerProps['popperPlacement'] = direction === 'ltr' ? 'auto-end' : 'auto-end'
  const [startDateRange, setStartDateRange] = useState<DateType>(new Date())
  const [endDateRange, setEndDateRange] = useState<DateType>(addDays(new Date(), 45))
  const handleOnChangeRange = (dates: any) => {
    const [start, end] = dates
    setStartDateRange(start)
    setEndDateRange(end)
  }
  console.log(apiData)
  const CustomInput = forwardRef((props: PickerProps, ref) => {
    const startDate = format(props.start, 'MM/dd/yyyy')
    const endDate = props.end !== null ? ` - ${format(props.end, 'MM/dd/yyyy')}` : null

    const value = `${startDate}${endDate !== null ? endDate : ''}`

    return <CustomTextField inputRef={ref} label={props.label || ''} {...props} value={value} />
  })

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Card sx={{ mb: 6 }}>
        <CardHeader title='Requests' sx={{ backgroundColor: '#F9F3E8', fontWeight: 'bold' }} />
      </Card>
      <Card sx={{ backgroundColor: '#F9F3E8' }}>
        <Grid
          item
          xs={12}
          sx={{
            backgroundColor: '#F9F3E8',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            p: 8
          }}
        >
          <RequestCard title='New Requests' count='10' />
          <RequestCard title='Delayed Requests' count='5' />
          <RequestCard title='Escalated Requests' count='2' />
          <RequestCard title='On Hold Requests' count='12' />
        </Grid>
      </Card>
      <Card sx={{ my: 6, backgroundColor: '#F9F3E8' }}>
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
                  popperPlacement={popperPlacement}
                  customInput={
                    <CustomInput end={endDateRange as Date | number} start={startDateRange as Date | number} />
                  }
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
      </Card>
    </>
  )
}

export default Requests
