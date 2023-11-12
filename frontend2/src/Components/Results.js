import React from 'react'
import Card from './Card';

function Results({formData}) {
   
  
    return (
        <div>
        <h1 className='text-3xl font-bold underline mb-4'>Comparatore di tariffe</h1>
        
       <Card formData={formData}/>
      </div>
    )
  }
  
  export default Results;
  