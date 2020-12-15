import React from 'react'
import './index.css'
import { Grid, Typography, Icon, Paper } from '@material-ui/core'
import resumeData from '../../../utils/resumeData'
import CustomTimeline, { CustomTimelineSeparator } from '../../../components/Timeline'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineDot from '@material-ui/lab/TimelineDot'
import WorkIcon from '@material-ui/icons/Work'
import SchoolIcon from '@material-ui/icons/School'
import Service from '../../Service'

const Resume = () => {
  return (
    <>
      {/* About me */}
      <Grid container className='section pb_45 pt_45'>
        <Grid item className='section_title mb_30'>
          <span></span>
          <Typography variant='h6' className='section_title_text'>About Me</Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant='body2' className='aboutme_text'>{resumeData.about}</Typography>
        </Grid>
      </Grid>

      {/* Education and experiences */}
      <Grid container className='section pb_45 '>
        <Grid item className='section_title mb_30'>
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
      <Grid container className='section pb_45'>
        <Grid item className='section_title mb_30'>
          <span></span>
          <Typography variant='h6' className='section_title_text'>My Services</Typography>
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={3} justify='space-around'>
            {resumeData.services.map(service => (
              <Grid item xs={12} sm={6} md={3}>
                <div className='service'>
                  <Icon className='service_icon'>{service.icon}</Icon>
                  <Typography variant='h6' className='service_title'>{service.title}</Typography>
                  <Typography variant='body2' className='service_description'>{service.description}</Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* Skills  */}
      <Grid container className='section greybg pb_45 p_50'>
        <Grid item xs={12}>
          <Grid container justify='space-between' spacing={3}>
            {resumeData.skills.map(skill => (
              <Grid item xs={12} sm={6} md={3}>
                <Paper elevation={0} className='skill'>
                  <Typography variant='h6' className='skill_title'>
                    {skill.title}
                  </Typography>
                  {skill.description.map(element => (
                    <Typography variant='body2' className='skill_description'>
                      <TimelineDot variant='outlined' className='timeline_dot' />
                      {element}
                    </Typography>
                  ))}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* Contact  */}
      <Grid container className=''>

      </Grid>
    </>
  )
}

export default Resume
