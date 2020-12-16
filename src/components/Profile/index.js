import React from 'react'
import { Typography } from '@material-ui/core'
import './index.css'
import me from '../../assets/images/me.jpg'
import CustomTimeline, { CustomTimelineSeparator } from '../../components/Timeline'
import resumeData from '../../utils/resumeData'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineContent from '@material-ui/lab/TimelineContent'
import CustomButton from '../Button'
import GetAppIcon from '@material-ui/icons/GetApp';
import myResume from '../../assets/resume/myResume.pdf'

const CustomTimelineItem = ({ title, text, link }) => {
  return (
    <TimelineItem >
      <CustomTimelineSeparator />
      <TimelineContent className='timeline_content'>
        {link ? (<Typography className='timeline_text'><span>{title}:</span> <a href={link} target="_blank">{text}</a></Typography>) : (
          <Typography className='timeline_text'><span>{title}:</span> {text}</Typography>
        )}
      </TimelineContent>
    </TimelineItem>
  )
}

const Profile = () => {
  return (
    <div className='profile container_shadow'>
      <div className='profile_name'>
        <Typography className='name'>{resumeData.name}</Typography>
        <Typography className='title'>{resumeData.title}</Typography>
      </div>
      <figure className='profile_image'>
        <img src={me} alt="" />
      </figure>
      <div className='profile_information'>
        <CustomTimeline icon={<PersonOutlineIcon />}>
          <CustomTimelineItem title='Name' text={resumeData.name} />
          <CustomTimelineItem title='Title' text={resumeData.title} />
          <CustomTimelineItem title='Email' text={resumeData.email} />

          {Object.keys(resumeData.socials).map(social => {
            return (
              <CustomTimelineItem title={social} text={resumeData.socials[social].text} link={resumeData.socials[social].link} />
            )
          })}
        </CustomTimeline>

        <br />
        <div className='button_container'>
          <a href={myResume} download='myResume.pdf'><CustomButton text={'Download CV'} icon={<GetAppIcon />} className='button_link' /></a>
        </div>
      </div>
    </div>
  )
}

export default Profile