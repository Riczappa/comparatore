import React from 'react'
import Card from './Card';
import Filter from './Filter';

function Results({formData, setFormData}) {

  
  const handleFilterChange = (newFormData) => {
    // Aggiorna lo stato di formData con i nuovi valori ricevuti
    setFormData(newFormData);
    
  };


  const handleVincolatoChange = (newVincolato) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      vincolato: newVincolato
    }));
  };
  
   
  
    return (
        <div className='flex flex-col md:flex-row md:gap-4'>
        <aside className='md:h-screen md:sticky md:top-[68px]'>
       <Filter formData={formData} onFilterChange={handleFilterChange} handleVincolatoChange={handleVincolatoChange}/>

       </aside>
       
       <main>
       <Card formData={formData} setFormData={setFormData}/>
       </main>
      </div>
    )
  }
  
  export default Results;
  