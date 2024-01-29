import React from 'react';
import './Styles.css';
import greenplanet from '../assets/images/greenearth.png'

const GreenEarth = () => {
  return (
    <div style={{backgroundColor: 'whitesmoke'}}>
    <div className='container green'>
            <div className='left-side'>
            <div className='photo-container' >
               <img className='photo-class' src={greenplanet} alt="" />
               </div>
            </div>

            <div className='right-side'>
              <div className='text-container'>
                   <div className='text-title'>
                      <h1 className='my-planet'>100,000 kgs</h1>
                   </div>
                   <div className='text-title '>
                   <h3>CO2 Saved till now</h3>
              </div>
              </div>

             <div className='earth-para'>
             <p>Reducing CO2 emissions using electric vehicles (EVs) is an effective strategy to combat climate change and improve air quality. Our electric vehicles produce zero tailpipe emissions, meaning we don't emit pollutants or greenhouse gases directly into the atmosphere while driving. This is in contrast to internal combustion engine vehicles that burn fossil fuels and release CO2 and other pollutants.</p>
             </div>

            </div>
    </div>
    </div>
  )
}

export default GreenEarth