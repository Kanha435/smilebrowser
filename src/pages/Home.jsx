import React from 'react';
import '../App.css';
import Avatar from '@mui/material/Avatar';
import {Link} from 'react-router-dom';
// import AcUnitIcon from '@mui/icons-material/AcUnit';
import AppsIcon from '@mui/icons-material/Apps';
import Pic from "../images/smileLogo.png"
import Search from './Search';
function Home() {
  return (
    <div className="home">
        <div className="home-header">
            <Link to='/gmail'>Gmail</Link>
            <Link to='/images'>Images</Link>
            <AppsIcon style={{marginRight:"20px", fontSize:"30px"}}/>
            <Avatar>K</Avatar>
            
        </div>
        <div className="home-body">
            <img src={Pic} alt="../images/Smile.jpg" />
            <div className="home-input-container">
                <Search hidden/>
            </div>
            
        </div>
        <div className="home-footer">
            <h3>India</h3>
            <div className="footer">
                <div className="left-footer">
                    <Link to='/about'>About</Link>
                    <Link to='/advertising'>Advertising</Link>
                    <Link to='/business'>Business</Link>
                    <Link to='/howsearchwork'>How Search works</Link>
                </div>
                <div className="right-footer">
                    <Link to='/privacy'>Privacy</Link>
                    <Link to='/terms'>Terms</Link>
                    <Link to='/settings'>Settings</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home