import React from 'react'
import './index.css'
import { Grid, Typography } from '@material-ui/core'
import resumeData from '../../../utils/resumeData'
import CustomTimeline, { CustomTimelineSeparator } from '../../../components/Timeline'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineContent from '@material-ui/lab/TimelineContent'
import WorkIcon from '@material-ui/icons/Work'
import SchoolIcon from '@material-ui/icons/School'

const Resume = () => {
  return (
    <>
      {/* About me */}
      <Grid container className='section pb_45'>
        <Grid item className='section_title mb_30'>
          <span></span>
          <Typography variant='h6' className='section_title_text'>About Me</Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant='body2' className='aboutme_text'>{resumeData.about}</Typography>
        </Grid>
      </Grid>

      {/* Education and experiences */}
      <Grid container className='section'>
        <Grid item className='section_title mb_ 30'>
          <span></span>
          <Typography variant='h6' className='section_title_text'>Resume</Typography>
        </Grid>

        <Grid item xs={12}>
          <Grid container className='resume_timeline'>
            {/* Working History */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title='Working History' icon={<WorkIcon />}>
                {resumeData.experiences.map(experience => (
                  <TimelineItem>
                    <CustomTimelineSeparator />
                    <TimelineContent className='timeline_content'>
                      <Typography className='timeline_title'>{experience.title}</Typography>
                      <Typography variant='caption' className='timeline_date'>{experience.date}</Typography>
                      <Typography variant='body2' className='timeline_description'>{experience.description}</Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>

            {/* Education */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title='Educaiton' icon={<SchoolIcon />}>
                {resumeData.educations.map(education => (
                  <TimelineItem>
                    <CustomTimelineSeparator />
                    <TimelineContent className='timeline_content'>
                      <Typography className='timeline_title'>{education.title}</Typography>
                      <Typography variant='caption' className='timeline_date'>{education.date}</Typography>
                      <Typography variant='body2' className='timeline_description'>{education.description}</Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>
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
