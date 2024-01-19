import React, { useState, useEffect } from 'react'
import { hourglass } from 'ldrs'
import FeedIcon from '@mui/icons-material/Feed';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import SavingsIcon from '@mui/icons-material/Savings';
import { colors } from '@mui/material';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import BalanceIcon from '@mui/icons-material/Balance';



hourglass.register()

// Default values shown





function Card({ formData, setFormData }) {
  const [dataset, setDataset] = useState([])
  const [filtdata, setFiltdata] = useState([])
  const [expanded, setExpanded] = useState(filtdata.map(() => false));
  const [isLoading, setIsLoading] = useState(true)

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
  }, [apiUrl, formData.vincolato]);




  useEffect(() => {
    fetchData()
  }, [formData])



  //setta espansione
  useEffect(() => {
    setExpanded(filtdata.map(() => false));
  }, [filtdata]);




  return (
    <div>




      {isLoading && (<div className='mt-10'>
        <l-hourglass
          size="40"
          bg-opacity="0.1"
          speed="1.75"
          color="white"
        ></l-hourglass></div>
      )}
      <div className="grid grid-cols-1 gap-3 m-0">
        {filtdata.map((item, index) => (
          <a href={item.link} onClick={() => {
            window.dataLayer.push({
              'event': 'clickout',
              'link': item.link,
              'capitale': formData.capital,

            });
          }} target="_blank" key={`link-${index}`} className='m-auto'>
            
            
            {/*desktop*/}
            <div className="hidden md:block bg-white p-6 rounded-lg shadow-lg mx-auto md:max-w-[900px] w-full text-left centered-shadow" key={`desktop-${index}`}>
              <div className='flex flex-row justify-between'>
                <div className='flex flex-col justify-between basis-1/4'> {/* Add justify-between */}
                  <div className='flex flex-col justify-start'>
                  <img src={item.image} alt={item.bank} className="h-auto md:w-auto md:h-auto overflow-hidden rounded-lg" />
                  <h5 className="pt-2 text-xl text-center font-semibold "><span className="font-normal">Banca: </span>{item.bank}</h5>
                  </div>
                  <div className='flex flex-row items-center justify-center'>
                    <ArrowForwardIosIcon className='rotate-90' sx={{fontSize:15}}/>
                <button className=" bg-white text-mediumBlue mx-2  rounded  hover:text-mediumBlue " onClick={(event) => { event.preventDefault(); toggleExpansion(index) }}> {expanded[index] ? 'Mostra meno' : 'Mostra altro'}</button>
<ArrowForwardIosIcon className="rotate-90" sx={{fontSize:15}}/>
                </div>
                </div>



                <div className='felx flex-col basis-2/4 ml-12'>
                  <div className='flex flex-row'>
                  <Brightness1Icon fontSize='small' sx={{color:"grey"}} className='pt-1' /> 

                   
                   <div className='flex flex-col item-center'>                   
                    <p className="flex text-gray-700 text-left">
                      Prodotto: </p> 
                      <p className='font-semibold text-mediumBlue'>
                      {item.product}
                      </p>
                      </div>
                  </div>
                  <div className="mt-8 grid grid-cols-2 gap-3">

                    <div className='flex flex-row items-center'> <SavingsIcon fontSize='small' sx={{color:"grey"}} />
                    <p className="text-grey pl-2">Tasso annuo lordo</p>
                    </div>
                    <p className='font-semibold text-xl'>{(item.tasso_eff * 100).toFixed(2)}%</p>

                    <div className='flex flex-row items-center'> <BalanceIcon  fontSize='small' sx={{ color: "grey" }} />
                    <p className="text-grey pl-2">tasso annuo netto</p>
                    </div>
                    <p className='font-semibold text-xl'> {(item.tasso_eff * 100 * 0.74).toFixed(2)}%</p>
                   
                   <div className='flex flex-row items-center'> <RemoveCircleIcon  fontSize='small' sx={{color:"grey"}} />
                    <p className="text-grey pl-2">vincolo</p>
                    </div>


                    
                    <p className='font-semibold text-xl'>{item.vincolato}</p>

                  </div>
                </div>
                <div className='flex flex-col basis-1/4 justify-between'>
                <div className='flex flex-col bg-customGreen shadow-lg shadow-mediumBlue rounded p-1 '>
                    <p className="text-s text-white  overflow-auto text-center">Guadagno lordo in {formData.months} mesi</p>

                    <p className='font-bold text-4xl text-white text-center'>{item.resa} €</p>

                  </div>
<div className='flex flex-col'>
                <button className=" h-10 mx-3 bg-mediumBlue font-semibold  text-white px-4 py-2 rounded    hover:bg-darkBlue">Dettagli</button> {/* Remove width classes, add self-end and mt-auto */}
                <p className='text-xs text-center'>gratis sul sito della banca</p>
                </div>
                </div>

              </div>

              {/* Conditional content that is shown when the item is expanded */}
              {expanded[index] && (
                <div className="extrabox">
                  {/* Your additional content here */}
                    <div className='grid grid-cols-2 gap-3 mt-6'>
                      <p className='  mt-4 text-s'>costi apertura e chiusura</p>
                      <p className='font-semibold    mt-4 text-s'>{item.costi_extra ? item.costi_extra : "-"}</p>
                      <p className='  mt-4 text-s'>Liquidazione interessi</p>
                      <p className='font-semibold   mt-4 text-s'>{item.liquidazione ? item.liquidazione : "-"}</p>
                      <p className='  mt-4 text-s'>informazioni sulla banca</p>
                      <p className='font-semibold   mt-4 text-s'>{item.note ? item.note : "-"}</p>

                    </div>
                  <div className='mt-5'>
                    <a className='underline text-mediumBlue' target='_blank' href={item.foglietto}>
                      <FeedIcon style={{ color: "#183B50" }} />
                      foglietto informativo
                    </a>
                  </div>
                </div>
              )}
              
            </div>

            {/*Mobile*/}
            <div className="md:hidden bg-white p-3 rounded-lg shadow-lg mx-auto  w-full text-left centered-shadow" key={`mobile-${index}`}>
              <div className='grid grid-cols-2 auto-rows-auto gap-0'>

                <img src={item.image} alt={item.bank} className="  overflow-hidden mt-1 pr-5" />
                <div className='flex flex-col bg-customGreen shadow-lg shadow-mediumBlue rounded p-1 justify-center'>
                    <p className="text-s text-white  overflow-auto text-center">Guadagno lordo in {formData.months} mesi</p>

                    <p className='font-bold text-4xl text-white text-center'>{item.resa} €</p>

                  </div>
                <h5 className="text-gray-700 border-b border-customGreen pt-8  pb-3 ">Banca:</h5>
                <h5 className='text-l font-semibold border-b border-customGreen pt-8  pb-3'>{item.bank}</h5>
                <p className="text-gray-700 border-b border-customGreen pt-3  pb-3">Prodotto:</p>
                <p className='font-semibold text-l border-b border-customGreen pt-3  pb-3'>{item.product}</p>

                <p className="border-b border-customGreen pt-3  pb-3">Tasso annuo lordo</p>
                <p className='font-semibold text-l border-b border-customGreen pt-3  pb-3'>{(item.tasso_eff * 100).toFixed(2)}% </p>
                <p className="pt-3  pb-3">vincolo</p>
                <p className='font-semibold text-l pt-3  pb-3'>{item.vincolato}</p>



              </div>


              <button className="w-full bg-mediumBlue h-10 text-white px-4 py-2 rounded mt-2 basis-1/5  hover:bg-blue-800">Dettagli</button>
              <button className="w-full bg-white text-mediumBlue  px-4 py-2 rounded mt-2 hover:text-mediumBlue underline-offset-2 underline" onClick={(event) => { event.preventDefault(); toggleExpansion(index) }}> {expanded[index] ? 'Mostra meno' : 'Mostra altro'}</button>

              {/* Conditional content that is shown when the item is expanded */}
              {expanded[index] && (
                <div className="extra-content">
                  {/* Your additional content here */}
                  <div className='grid grid-cols-2 gap-3'>
                    <p className='mt-4 text-xs font-bold'>costi apertura e chiusura</p>
                    <p className='font-semibold  mt-4 text-xs'>{item.costi_extra ? item.costi_extra : "-"}</p>
                    <p className='mt-4 text-xs font-bold'>Liquidazione interessi</p>
                    <p className='font-semibold mt-4 text-xs'>{item.liquidazione ? item.liquidazione : "-"}</p>
                    <p className='mt-4 text-xs font-bold'>informazioni sulla banca</p>
                    <p className='font-semibold mt-4 text-xs'>{item.note ? item.note : "-"}</p>

                  </div>
                  <div className='mt-5'>
                    <a className='underline text-mediumBlue' target='_blank' href={item.foglietto}>
                      <FeedIcon style={{ color: "#183B50" }} />
                      foglietto informativo
                    </a>
                  </div>
                </div>
              )}
            </div>


          </a>
        ))}
      </div>
      <div className='mt-12'></div>
    </div>

  )
}

export default Card