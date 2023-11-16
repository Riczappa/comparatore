import React, { useState, useEffect } from 'react'
import santander_logo from "../images/santander_logo.png"



function Card({ formData }) {
  const [dataset, setDataset] = useState([])
  const [filtdata, setFiltdata] = useState([])


  const apiUrl = process.env.REACT_APP_API_URL;

  const calcolaRendimento = (capitale, anni, tasso) => {
    
    // Calcolo del rendimento (questo dipende dalla formula che vuoi usare)
    // Esempio: calcolo con interesse composto
    return capitale * Math.pow((1 + tasso), anni);
  };


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

  useEffect(() => {

    


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
        console.log(json)
        setDataset(json);
        const updatedFilteredData = filterData(json, formData.vincolato);
        setFiltdata(updatedFilteredData);
        
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
    
  

    console.log(filtdata)

    



  }, [apiUrl,formData.vincolato]); // The empty array means this effect runs once on mount

  





  return (
    <div>
      <div className="grid grid-cols-1 gap-3 m-5 ">
        {filtdata.map((item, index) => (
          <a href={item.link} target="_blank" key={`link-${index}`}>
          <div className="hidden md:block bg-white p-6 rounded-lg shadow-lg mx-auto md:max-w-[900px] w-full text-left centered-shadow" key={`desktop-${index}`}>
            <div className='flex flex-row space-x-6'>
              <div className='flex flex-col justify-between basis-1/5'> {/* Add justify-between */}
                <img src={item.image} alt={item.bank} className="h-auto w-10 md:w-auto md:h-auto overflow-hidden rounded-lg" />
                <div className='flex flex-col border border-red-500 shadow-lg shadow-red-500/50 rounded p-1'>
                  <p className="text-xs">Guadagno lordo tra {formData.years} anni</p>

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
          <div className="md:hidden bg-white p-4 rounded-lg shadow-lg mx-auto md:max-w-[900px] w-full text-left centered-shadow" key={`mobile-${index}`}>
            <div className='grid grid-cols-2 auto-rows-auto gap-0'>
              
                <img src={item.image} alt={item.bank} className="  overflow-hidden rounded-lg pr-3" />
                <div className='flex flex-col border border-red-500 shadow-lg shadow-red-500/50 rounded p-1'>
                  <p className="text-xs">Guadagno lordo tra {formData.years} anni</p>

                  <p className='font-bold text-xl '>{item.resa} €</p>
                  </div>
                  <h5 className="text-xl font-semibold border-b border-gray-800 pt-1"><span className="font-normal">Banca: </span>{item.bank}</h5>
                  <p className="text-gray-700 border-b border-gray-800 pt-1"><span className="font-normal">Prodotto: </span>{item.product}</p>
                  <p className="border-b border-gray-800">Description</p>
                  <p className='font-semibold text-xl border-b border-gray-800'>{item.description}</p>
                  <p className="border-b border-gray-800">Tasso annuo</p>
                  <p className='font-semibold text-xl border-b border-gray-800'>{(item.tasso_eff*100).toFixed(2)}% </p>
                  <p className="">vincolo</p>
                  <p className='font-semibold text-xl'>{item.vincolato}</p>
                


              </div>
               

                             <button className="w-full bg-blue-500 h-10 text-white px-4 py-2 rounded mt-2 basis-1/5  hover:bg-blue-800">Prosegui</button> {/* Remove width classes, add self-end and mt-auto */}
                             <button className="w-full bg-transparent h-10 text-black border border-blue-500 px-4 py-2 rounded mt-2 basis-1/5  hover:bg-blue-800" onClick={()=>window.location.href="https://www.google.com"}>Mostra altro</button> {/* Remove width classes, add self-end and mt-auto */}

            </div>
          
          
          </a>
        ))}
      </div>

    </div>

  )
}

export default Card