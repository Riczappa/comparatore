import React,{useState} from 'react'

function Filter({formData,onFilterChange, handleVincolatoChange}) {
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        onFilterChange({ ...formData, [name]: value });


    }
  return (
    <div className='flex flex-col ml-1 mr-1 mb-5 rounded-lg p-3 bg-white space-x-4 min-w-fit space-y-3'>
    <div className='flex flex-row space-x-2 '>
      <div className='flex flex-col space-y-1'>
        <p className='text-left text-xs'>Capitale</p>
      <input className='flex-shrink w-full bg-transparent border border-green-400 rounded pl-2'
        type="number"
        name="capital"
        placeholder="Capitale"
        value={formData.capital}
        onChange={handleInputChange}
        
      />
      </div>
      <div className='flex flex-col space-y-1'>
        <p className='text-left text-xs'>Anni:</p>
      <input
        className='flex-shrink w-full bg-transparent border border-green-400 rounded pl-2'
        type="number"
        name="years"
        placeholder="Anni"
        value={formData.years}
        onChange={handleInputChange}
      />
    </div>
    </div>
    <div className="flex flex-row space-x-4" onChange={(e) => handleVincolatoChange(e.target.value)}>
      <input 
        type="radio" 
        value="si" 
        name="vincolato" 
        checked={formData.vincolato === 'si'} 
      /> Vincolati
      <input 
        type="radio" 
        value="no" 
        name="vincolato" 
        checked={formData.vincolato === 'no'} 
      /> Non vincolati
      <input 
        type="radio" 
        value="indif" 
        name="vincolato" 
        checked={formData.vincolato === 'indif'} 
      /> Entrambi
    </div>
    </div>
  )
}

export default Filter