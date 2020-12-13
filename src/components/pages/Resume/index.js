import React from 'react'
import './index.css'
import { Grid, Typography } from '@material-ui/core'
import resumeData from '../../../utils/resumeData'

const Resume = () => {
  return (
    <>
      {/* About me */}
      <Grid container className='section'>
        <Grid item className='section_title'>
          <span></span>
          <h6>About Me</h6>
        </Grid>

        <Grid item className='section_title_text'>
          <Typography>{resumeData.about}</Typography>
        </Grid>
      </Grid>

      {/* Education and experiences */}
      <Grid container className=''>

      </Grid>

      {/* Services */}
      <Grid container className=''>

      </Grid>

      {/* Skills  */}
      <Grid container className=''>

      </Grid>

      {/* Contact  */}
      <Grid container className=''>

      </Grid>
    </>
  )
}

export default Resume
