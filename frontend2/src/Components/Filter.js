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


  const [selectedMonth, setSelectedMonth] = useState(formData.months);

  const handleButtonClick = (month) => {
    setSelectedMonth(month);
    handleSliderChange(null, month);
  };

  return (
    
    <div>
      <div className='mx-auto bg-white rounded-lg max-w-[900px]'>
        <div className='bg-customGreen rounded-t-lg'>
          <h2 className='text-white font-semibold'>Filtri</h2>
        </div>
        <div className='flex flex-col  mb-5  p-3   min-w-fit  space-y-3'>
          <div className='flex flex-row md:flex-col gap-4'>
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
            <div className='flex flex-col md:space-y-1 pl-0'>
              <p className='text-left text-s'>Mesi:</p>

              <Box className="block md:hidden" sx={{ width: 200, paddingLeft: 1, paddingRight: 1 }}>
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
              <div className='hidden md:inline-flex md:rounded-md md:shadow-sm flex justify-between gap-1' role='group'>
                {[6, 12, 18, 24, 36].map((month) => (
                  <button
                    key={month}
                    className={`inline-flex items-center px-4 py-2 text-sm font-medium  bg-white border border-gray-200 rounded-lg  hover:bg-mediumBlue hover:text-white   ${selectedMonth === month ? 'selected ring-blue-500 focus:z-10 ring-2 text-blue-700 dark:bg-gray-700 dark:border-gray-600' : ''}`}
                    onClick={() => handleButtonClick(month)}
                  >
                    {month}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-row md:flex-col gap-2" onChange={(e) => handleVincolatoChange(e.target.value)}>
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
    </div>
    
  )
}

export default Filter