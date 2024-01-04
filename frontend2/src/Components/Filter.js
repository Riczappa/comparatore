import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';



function Filter({ formData, onFilterChange, handleVincolatoChange }) {
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
    { value: 36 },]



  return (
    <div className='bg-white rounded-lg'>
      <div className='bg-customGreen rounded-t-lg'>
        <h2 className='text-white font-semibold'>Filtri</h2>
      </div>
      <div className='flex flex-col mx-auto mb-5  p-3  space-x-4 min-w-fit max-w-[900px] space-y-3'>
      <div className='flex flex-row space-x-2 '>
        <div className='flex flex-col space-y-1'>
          <p className='text-left text-s'>Capitale</p>
          <input className='flex-shrink w-full bg-transparent border border-darkBlue rounded pl-2'
            type="number"
            name="capital"
            placeholder="Capitale"
            value={formData.capital}
            onChange={handleInputChange}

          />
        </div>
        <div className='flex flex-col space-y-0 pl-3'>
          <p className='text-left text-s'>Mesi:</p>

          <Box sx={{ width: 200, paddingLeft: 1, paddingRight: 1 }}>
            <Slider
              aria-label="Restricted values"
              defaultValue={formData.months}
              marks={marks}
              min={6}
              max={36}
              step={null}

              valueLabelDisplay="auto"
              onChange={handleSliderChange}
              sx={{
                '& .MuiSlider-thumb': {
                  color: '#00161D', // Dark blue thumb
                },
                '& .MuiSlider-track': {
                  color: '#00161D', // Dark blue track
                },
                '& .MuiSlider-rail': {
                  color: '#183B50', // Another color for the rail, or use dark blue as well
                },
              }}
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
        {/* Wrap each radio button and its label in a div */}
        <div className="flex items-center space-x-1"> {/* Adjust space between radio and label */}
          <input
            type="radio"
            value="si"
            name="vincolato"
            checked={formData.vincolato === 'si'}
            className="radio-custom" // Tailwind class for custom color
          />
          <label className=" cursor-pointer">Vincolati</label>
        </div>

        <div className="flex items-center space-x-1">
          <input
            type="radio"
            value="no"
            name="vincolato"
            checked={formData.vincolato === 'no'}
            className="radio-custom"
          />
          <label className=" cursor-pointer">Non vincolati</label>
        </div>

        <div className="flex items-center space-x-1">
          <input
            type="radio"
            value="indif"
            name="vincolato"
            checked={formData.vincolato === 'indif'}
            className="radio-custom"
          />
          <label className=" cursor-pointer">Entrambi</label>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Filter