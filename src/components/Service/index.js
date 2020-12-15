import React from 'react'
import './index.css'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const Service = ({ icon, title, description }) => {
  return (
    <Card className='card'>
      <CardContent>
        {icon}
        <Typography variant='h6'>{title}</Typography>
        <Typography variant='body2'>{description}</Typography>
      </CardContent>
    </Card>
  )
}

export default Service
