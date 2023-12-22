import React, { useState, useEffect } from 'react'
import { hourglass } from 'ldrs'
import Filter from "./Filter"




hourglass.register()

// Default values shown





function Card({ formData, setFormData }) {
  const [dataset, setDataset] = useState([])
  const [filtdata, setFiltdata] = useState([])
  const [expanded, setExpanded] = useState(filtdata.map(() => false));
  const [isLoading, setIsLoading]=useState(true)

  const toggleExpansion = (index) => {
    console.log('Mostra altro clicked for index:', index)
    setExpanded(expanded.map((item, idx) => (idx === index ? !item : item)));

  };


  const apiUrl = process.env.REACT_APP_API_URL;

  


  const filterData = (dataset, vincolato) => {
    // Filter the dataset based on the vincolato value
    const filteredData = dataset.filter(item => {
        // If vincolato is set to 'all', return all items
        if (vincolato === 'indif') {
            return true;
        }
        // Otherwise, return items that match the vincolato value
        return item.vincolato === vincolato;
    });

    // Sort the filtered data by resa, from highest to lowest
    filteredData.sort((a, b) => b.resa - a.resa);

    // Return the filtered data
    return filteredData;
}


const fetchData = async () => {
  try {
   
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const json = await response.json();
    setIsLoading(false)
    console.log(json)
    setDataset(json);
    const updatedFilteredData = filterData(json, formData.vincolato);
    setFiltdata(updatedFilteredData);
    
  } catch (error) {
    console.error('Error fetching data: ', error);
  }
};


  useEffect(() => {
    fetchData();
  }, [apiUrl,formData.vincolato]); 

  

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
  

  useEffect(()=>{
    fetchData()
  },[formData])



//setta espansione
  useEffect(() => {
    setExpanded(filtdata.map(() => false));
  }, [filtdata]);
  

  

  return (
    <div>
     
      <Filter formData={formData} onFilterChange={handleFilterChange} handleVincolatoChange={handleVincolatoChange}/>
 


      {isLoading && (<div className='mt-10'>
        <l-hourglass
  size="40"
  bg-opacity="0.1"
  speed="1.75" 
  color="black" 
></l-hourglass></div>
      )}
      <div className="grid grid-cols-1 gap-3 m-1 ">
        {filtdata.map((item, index) => (
          <a href={item.link} onClick={()=>{window.dataLayer.push({
            'event': 'clickout',
            'link': item.link,
            'capitale': formData.capital,
            
          });}} target="_blank" key={`link-${index}`} className='m-auto'>
          <div className="hidden md:block bg-white p-6 rounded-lg shadow-lg mx-auto md:max-w-[900px] w-full text-left centered-shadow" key={`desktop-${index}`}>
            <div className='flex flex-row space-x-6'>
              <div className='flex flex-col justify-between basis-1/5'> {/* Add justify-between */}
                <img src={item.image} alt={item.bank} className="h-auto w-10 md:w-auto md:h-auto overflow-hidden rounded-lg" />
                <div className='flex flex-col border border-red-500 shadow-lg shadow-red-500/50 rounded p-1'>
                  <p className="text-xs overflow-auto">Guadagno lordo tra {formData.years} anni</p>

                  <p className='font-bold text-xl '>{item.resa} €</p>

                </div>
              </div>



              <div className='felx flex-col basis-3/5'>
                <div>
                  <h5 className="text-xl font-semibold"><span className="font-normal">Banca: </span>{item.bank}</h5>

                  <p className="text-gray-700"><span className="font-normal">Prodotto: </span>{item.product}</p>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3">

                  <p className="">Description</p>
                  <p className="">Tasso annuo</p>
                  <p className="">vincolo</p>


                  <p className='font-semibold text-xl'>{item.description}</p>
                  <p className='font-semibold text-xl'>{(item.tasso_eff*100).toFixed(2)}% </p>
                  <p className='font-semibold text-xl'>{item.vincolato}</p>

                </div>
              </div>

              <button className="w-1/3 bg-blue-500 h-10 text-white px-4 py-2 rounded ml-7 basis-1/5  hover:bg-blue-800">Prosegui</button> {/* Remove width classes, add self-end and mt-auto */}


            </div>
          </div>

          {/*Mobile*/}
          <div className="md:hidden bg-white p-3 rounded-lg shadow-lg mx-auto  w-full text-left centered-shadow" key={`mobile-${index}`}>
            <div className='grid grid-cols-2 auto-rows-auto gap-0'>
              
                <img src={item.image} alt={item.bank} className="  overflow-hidden rounded-lg pr-3"  />
                <div className='flex flex-col border border-red-500 shadow-lg shadow-red-500/50 rounded p-1'>
                  <p className="text-xs">Guadagno lordo tra {formData.years} anni</p>

                  <p className='font-bold text-xl '>{item.resa.toLocaleString()} €</p>
                  </div>
                  <h5 className="text-xl border-b border-gray-400 pt-1">Banca:</h5>
                  <h5 className='text-xl font-semibold border-b border-gray-400 pt-1'>{item.bank}</h5>
                  <p className="text-gray-700 border-b border-gray-400 pt-1">Prodotto:</p>
                  <p className='font-semibold text-l border-b border-gray-400'>{item.product}</p>
                 
                  <p className="border-b border-gray-400">Tasso annuo</p>
                  <p className='font-semibold text-xl border-b border-gray-400'>{(item.tasso_eff*100).toFixed(2)}% </p>
                  <p className="">vincolo</p>
                  <p className='font-semibold text-xl'>{item.vincolato}</p>
                


              </div>
               

                             <button className="w-full bg-blue-500 h-10 text-white px-4 py-2 rounded mt-2 basis-1/5  hover:bg-blue-800">Prosegui</button> 
                             <button className="w-full bg-white text-blue-500  px-4 py-2 rounded mt-2 hover:text-blue-600 underline-offset-2 underline"  onClick={(event) =>{event.preventDefault(); toggleExpansion(index)}}> {expanded[index] ? 'Mostra meno' : 'Mostra altro'}</button> 

           {/* Conditional content that is shown when the item is expanded */}
           {expanded[index] && (
              <div className="extra-content">
                {/* Your additional content here */}
                <div className='grid grid-cols-2'>
                  <p className='border-b border-gray-800'>name</p>
                  <p className='font-semibold border-b border-gray-800'>Des</p>
                  <p className='border-b border-gray-800'>name</p>
                  <p className='font-semibold border-b border-gray-800'>Des</p>
                  <p className='border-b border-gray-800'>name</p>
                  <p className='font-semibold border-b border-gray-800'>Des</p>
                  <p className='border-b border-gray-800'>name</p>
                  <p className='font-semibold border-b border-gray-800'>Des</p>
                </div>
              </div>
            )}
            </div>
          
          
          </a>
        ))}
      </div>

    </div>

  )
}

export default Card