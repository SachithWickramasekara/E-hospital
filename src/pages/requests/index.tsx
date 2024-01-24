import { Card, CardHeader, Grid } from '@mui/material'
import axios from 'axios'
import { GetStaticProps } from 'next/types'
import React from 'react'
import { CardStatsType } from 'src/@fake-db/types'

import RequestCard from 'src/@core/components/cards/RequestCard'
import RequestTable from 'src/views/table/tables/requests-table'

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get('/cards/statistics')
  const apiData: CardStatsType = res.data

  return {
    props: {
      apiData
    }
  }
}

const Requests = () => {
  return (
    <>
      <Card sx={{ mb: 6 }}>
        <CardHeader title='Requests' sx={{ backgroundColor: '#F9F3E8', fontWeight: 'bold' }} />
      </Card>
      <Card sx={{ backgroundColor: '#F9F3E8', mb: 6 }}>
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
      <RequestTable />
    </>
  )
}

export default Requests
