import React,{useState} from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';



function Filter({formData,onFilterChange, handleVincolatoChange}) {
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        onFilterChange({ ...formData, [name]: value });
        
    }
    const handleSliderChange = (event, newValue) => {
      onFilterChange({ ...formData, months: newValue });
  };

  const marks = [
    { value: 6 },
    { value: 12 },
    { value: 18 },
    { value: 24 },
    { value: 32 },]



  return (
    <div className='flex flex-col mx-auto mb-5 rounded-lg p-3 bg-white space-x-4 min-w-fit max-w-[900px] space-y-3'>
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
      <div className='flex flex-col space-y-0 pl-3'>
        <p className='text-left text-xs'>Mesi:</p>

        <Box sx={{ width: 200, paddingLeft:1, paddingRight:1}}>
      <Slider
        aria-label="Restricted values"
        defaultValue={formData.months}
        marks={marks}
        min={6}
        max={32}
        step={null}
      
        valueLabelDisplay="auto"
        onChange={handleSliderChange}
      />
    </Box>
      {/*<input
        className='flex-shrink w-full bg-transparent border border-green-400 rounded pl-2'
        type="number"
        name="months"
        placeholder="mesi"
        value={formData.months}
        onChange={handleInputChange}
  />*/}
    </div>
    </div>
    <div className="flex flex-row space-x-2" onChange={(e) => handleVincolatoChange(e.target.value)}>
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