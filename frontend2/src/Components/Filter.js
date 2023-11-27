import React,{useState} from 'react'

function Filter({formData,onFilterChange}) {
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        onFilterChange({ ...formData, [name]: value });


    }
  return (
    <div className='flex flex-row ml-5 mr-5 rounded-lg p-3 bg-white space-x-4'>
      <div className='flex flex-col space-y-1'>
        <p className='text-left text-xs'>Capitale</p>
      <input className='flex-shrink w-full bg-transparent border border-green rounded pl-2'
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
        className='flex-shrink w-full bg-transparent border border-green rounded pl-2'
        type="number"
        name="years"
        placeholder="Anni"
        value={formData.years}
        onChange={handleInputChange}
      />
    </div>
    </div>
  )
}

export default Filter