import React from 'react'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { Typography } from '@material-ui/core';
import './index.css';

const CustomTimeline = ({ title, icon, children }) => {
  return (
    <Timeline className='timeline'>
      {/* Header */}
      <TimelineItem className='timeline_header'>
        <TimelineSeparator>
          <TimelineDot className='timeline_dot_header'>{icon}</TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent><Typography variant='h6' className='timeline_title'>{title}</Typography></TimelineContent>
      </TimelineItem>
      {children}
    </Timeline>
  )
}

export const CustomTimelineSeparator = () => {
  return (
    <TimelineSeparator TimelineSeparator className='timeline_separator' >
      <TimelineDot className='timeline_dot' />
      <TimelineConnector />
    </TimelineSeparator >
  )
};

export default CustomTimeline;
