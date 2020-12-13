import React from 'react';
import './index.css';
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink, withRouter } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import resumeData from '../../utils/resumeData';
import CustomButton from '../Button';
import { Telegram } from '@material-ui/icons';

const Header = (props) => {
  const pathName = props?.location?.pathname;

  return (
    <Navbar expand="lg" sticky='top' className='header'>

      <Nav.Link as={NavLink} to='/' className='header_navlink'>
        <Navbar.Brand className='header_home '><HomeIcon /></Navbar.Brand>
      </Nav.Link>

      <Navbar.Toggle />

      <Navbar.Collapse>
        <Nav className='header_left'>
          <Nav.Link as={NavLink} to='/' className={pathName === '/' ? 'header_link_active' : 'header_link'}>RESUME</Nav.Link>
          <Nav.Link as={NavLink} to='/portfolio' className={pathName === '/portfolio' ? 'header_link_active' : 'header_link'}>PORTFOLIO</Nav.Link>
        </Nav>
        <div className='header_right'>
          {Object.keys(resumeData.socials).map(key => (
            <a href={resumeData.socials[key].link} target='_blank'>{resumeData.socials[key].icon}</a>
          ))}
          <CustomButton text={'Hire Me'} icon={<Telegram />} className='header_btn' />
        </div>
      </Navbar.Collapse>

    </Navbar>
  )
}

export default withRouter(Header)
