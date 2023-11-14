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

    // Return the filtered data
    return filteredData;
}

  useEffect(() => {

    


    const fetchData = async () => {
      try {
       
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
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
      <div className="grid grid-cols-1 gap-4 m-5 ">
        {filtdata.map((item, index) => (
          <div className="bg-white p-6 rounded-lg shadow-lg mx-auto md:max-w-[800px] w-full text-left" key={index}>
            <div className='flex flex-row space-x-6'>
              <div className='flex flex-col justify-between flex-grow basis-1/4'> {/* Add justify-between */}
                <img src={item.image} alt={item.bank} className="h-auto w-10 md:w-20 md:h-20 overflow-hidden rounded-lg" />
                <div className='flex flex-col border border-red-500 shadow-lg shadow-red-500/50 rounded p-1'>
                  <p className="text-xs">Rendimento tra {formData.years} anni</p>

                  <p className='font-bold text-xl '>{calcolaRendimento(formData.capital, formData.years, item.tasso).toFixed(2)} €</p>

                </div>
              </div>



              <div className='felx flex-col'>
                <div>
                  <h5 className="text-xl font-semibold"><span className="font-normal">Banca: </span>{item.bank}</h5>

                  <p className="text-gray-700"><span className="font-normal">Prodotto: </span>{item.product}</p>
                </div>
                <div className="grid grid-cols-3 gap-1">

                  <p className="font-semibold">Description</p>
                  <p className="font-semibold">Tasso annuo</p>
                  <p className="font-semibold">vincolo</p>


                  <p>{item.description}</p>
                  <p>{item.tasso*100}% </p>
                  <p>{item.vincolato}</p>

                </div>
              </div>

              <button className="w-1/3 bg-blue-500 h-10 text-white px-4 py-2 rounded ml-7  ">Prosegui</button> {/* Remove width classes, add self-end and mt-auto */}


            </div>
          </div>
        ))}
      </div>

    </div>

  )
}

export default Card