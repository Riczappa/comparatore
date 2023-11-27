import React from 'react'
import Card from './Card';

function Results({formData, setFormData}) {
   
  
    return (
        <div>
        
        
       <Card formData={formData} setFormData={setFormData}/>
      </div>
    )
  }
  
  export default Results;
  