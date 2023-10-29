import React from 'react';

import { Button } from './Button';
import './Hook.css';


function Hook() {
  return (
    <div className='hook-container'>
      <video src="../../public/website-header.mp4" autoPlay loop muted />
  
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hook-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          View DashBoard 
        </Button>
        
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Log-in/Sign-up <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default Hook;