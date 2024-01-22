import { Card } from '@mui/material'
import React from 'react'

const RequestCard = ({ title,count }: { count: string,title: string }) => {
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: '100%',
        p: 15,
        height: '200px',
        width: '200px',
        justifyContent: 'center',
        textAlign: 'center',
        border: '10px solid',
        borderColor: '#830823',
        backgroundColor: 'transparent'
      }}
    >
      <div style={{ fontSize: '60px', fontWeight: 'normal' }}>{count}</div>
      <div style={{ fontSize: '20px', fontWeight: 'normal' }}>{title}</div>
    </Card>
  )
}

export default RequestCard
