import React, {useState, useEffect} from 'react'
import santander_logo from "../images/santander_logo.png"



function Card({formData}) {
  const [dataset,setDataset] = useState([])


  const apiUrl = process.env.REACT_APP_API_URL;
  
  const calcolaRendimento = (capitale, anni, tasso) => {
    console.log(capitale, anni, tasso)
    // Calcolo del rendimento (questo dipende dalla formula che vuoi usare)
    // Esempio: calcolo con interesse composto
    return capitale * Math.pow((1 + tasso), anni);
  };

  useEffect(() => {
    
    console.log(formData);
    

    const fetchData = async () => {
      try {
        console.log(process.env)
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        setDataset(json);
        console.log(json)
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, [apiUrl]); // The empty array means this effect runs once on mount

  console.log(dataset)



    

    return (
        <div>
    <div className="grid grid-cols-1 gap-4 m-5 ">
      {dataset.map((item, index) => (
        <div className="bg-white p-6 rounded-lg shadow-lg mx-auto md:w-[600px] w-full text-left" key={index}>
          <div className='flex flex-row items-stretch  h-auto'> {/* Change items-center to items-stretch */}
            <img src={item.image} alt={item.bank} className="h-20 w-20 md:w-40 md:h-40 overflow-hidden rounded-lg" /> {/* Adjust width as needed */}

            <div className='flex flex-col justify-between flex-grow ml-3'> {/* Add justify-between */}
              <div>
                <h5 className="text-xl font-semibold"><span className="font-normal">Bank: </span>{item.bank}</h5>
                <p className="text-gray-700"><span className="font-normal">Product: </span>{item.product}</p>
                <p className="text-gray-700"><span className="font-normal">Description: </span>{item.description}</p>
                <p className="text-gray-700"><span className="font-normal">rendimento tra {formData.years} anni: </span>{calcolaRendimento(formData.capital, formData.years, item.tasso).toFixed(2)} €</p>
            
              </div>
              <button className="w-full bg-blue-500 text-white px-4 py-2 rounded self-end mt-auto">Prosegui</button> {/* Remove width classes, add self-end and mt-auto */}
            </div>
          </div>
        </div>
      ))}
    </div>
 
  </div>

    )
}

export default Card