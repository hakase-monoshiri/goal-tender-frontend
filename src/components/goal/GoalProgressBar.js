import React from 'react'


// use CSS to style the progress bar //

export default function GoalProgressBar({percentComplete}) {
  return (
    <div className='progress-bar'>
        <div className='progress-bar-outer' >
            <div className='progress-bar-inner' style={{width: `${percentComplete}%`}}> 
            </div> 
            <span> {percentComplete} </span> 
        </div>
    </div>
  )
}
