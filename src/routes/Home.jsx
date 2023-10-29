import React, { Fragment } from 'react'
import '../App.css';
import Hook from '../components/Hook'
import DashBoard from '../components/Dashboard';


const Home = () => {
  return (
    <Fragment>
      
    <Hook/>
    
    <div className='home'>
    
    <DashBoard/>    
    </div>
      
     

    
  
    </Fragment>
  )
}

export default Home
