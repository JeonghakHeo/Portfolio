import React from 'react'
import './index.css'
import { Typography } from '@material-ui/core'
import resumeData from '../../utils/resumeData'
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <Typography classNam='footer_name'>{resumeData.name}</Typography>
      </div>

      <div className="footer_right">
        <Typography className='footer_copyright'>
          Designed and developed by <a href='https://github.com/JeonghakHeo?tab=repositories' target='_blank'>{resumeData.name}</a><br />
          Clone idea from <a href='https://themeforest.net/user/tavonline' target='_blank'>Tavonline</a>.
        </Typography>
      </div>
    </div>

  )
}

export default Footer
