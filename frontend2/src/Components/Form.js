import React, {useState, useEffect} from 'react'
import Results from './Results';

function FormStep1({ onNext, formData, updateFormData, handleSuggestionClick }) {

    
    return (
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex flex-col items-center">
        <div className="w-full text-center">
          <h2 className="text-lg md:text-xl font-medium text-black">Quanto vuoi investire?</h2>
          <input 
            type="number" 
            className="mt-1 md:mt-2 p-2 border rounded-lg w-full"
            value={formData.capital} 
            onChange={(e) => updateFormData('capital', e.target.value)} 
            placeholder="Inserisci l'importo" 
          />
          <div className="flex space-x-2 mt-2 justify-center">
            {/* Esempi di suggerimenti */}
            <button className="px-3 py-1 border rounded text-sm hover:bg-green-500 hover:text-white" onClick={() => handleSuggestionClick('capital', 5000)}>€5.000</button>
            <button className="px-3 py-1 border rounded text-sm hover:bg-green-500 hover:text-white" onClick={() => handleSuggestionClick('capital', 10000)}>€10.000</button>
            <button className="px-3 py-1 border rounded text-sm hover:bg-green-500 hover:text-white" onClick={() => handleSuggestionClick('capital', 20000)}>€20.000</button>
          </div>
          <button className="mt-4 px-4 py-2 bg-green-400 text-white rounded hover:bg-green-600" onClick={onNext}>Avanti</button>
        </div>
      </div>);
  }
  


  
  function FormStep2({ onBack, onNext, formData, updateFormData, handleSuggestionClick}) {
    return (
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex flex-col items-center">
        <h2 className="text-lg md:text-xl font-medium text-black text-center">Per quanti anni vuoi investire?</h2>
        <input 
          type="number" 
          className="mt-1 md:mt-2 p-2 border rounded-lg w-full"
          min="1"
          max="30"
          value={formData.years} 
          onChange={(e) => updateFormData('years', e.target.value)} 
          placeholder="Inserisci il numero di anni" 
        />
         <div className="flex space-x-2 mt-2">
    {/* Esempi di suggerimenti */}
    <button className="px-3 py-1 border rounded text-sm hover:bg-green-500 hover:text-white" onClick={() => handleSuggestionClick('years', 2)}>2 yrs</button>
    <button className="px-3 py-1 border rounded text-sm hover:bg-green-500 hover:text-white" onClick={() => handleSuggestionClick('years', 5)}>5 yrs</button>
    <button className="px-3 py-1 border rounded text-sm hover:bg-green-500 hover:text-white" onClick={() => handleSuggestionClick('years', 10)}>10 yrs</button>
  </div>
        <div className="flex space-x-4 mt-4">
          <button className="px-4 py-2 bg-gray-300 text-white rounded hover:bg-gray-500" onClick={onBack}>Indietro</button>
          <button className="px-4 py-2 bg-green-400 text-white rounded hover:bg-green-600" onClick={onNext}>Avanti</button>
        </div>
      </div>
    );
  }
  

  function FormStep3({ onNext, formData, updateFormData, handleSuggestionClick }) {

    
    return (
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md">
          <div className='text-center'>
            <h2 className="text-lg md:text-xl font-medium text-black">Capitale vincolato?</h2>
            <div className="inline-flex space-x-2 mt-2 justify-center">
              <button className="px-3 py-1 border rounded text-sm hover:bg-green-500 hover:text-white" onClick={() => handleSuggestionClick('vincolato', "si")}>si</button>
              <button className="px-3 py-1 border rounded text-sm hover:bg-green-500 hover:text-white" onClick={() => handleSuggestionClick('vincolato', "no")}>no</button>
              <button className="px-3 py-1 border rounded text-sm hover:bg-green-500 hover:text-white" onClick={() => handleSuggestionClick('vincolato', "indif")}>indifferente</button>
            </div>
          </div>
        </div>
      );
  }

function Form() {

    const [currentStep, setCurrentstep] = useState(1)
    const nextStep = () => setCurrentstep((prev)=>prev+1)
    const prevStep = () => setCurrentstep((prev)=>prev-1)


    const [formData, setFormData] = useState({
        inputValue: '',
        years: ''
      });

      const updateFormData = (key, value) => {
        setFormData(prevState => ({ ...prevState, [key]: value }));
      };
      const handleSuggestionClick = (field, value) => {
        updateFormData(field, value);
        nextStep()
      };
      

    useEffect(() => {
        const handleKeyPress = (event) => {
          if (event.keyCode === 13) { // KeyCode per il tasto Enter
            nextStep();
          }
        };
    
        window.addEventListener('keydown', handleKeyPress);
    
        return () => {
          window.removeEventListener('keydown', handleKeyPress);
        };
      }, [currentStep]); // Aggiungi currentStep come dipendenza per aggiornare l'event listener
    

  return (
    <div>
    {currentStep === 1 && <FormStep1 onNext={nextStep} formData={formData} updateFormData={updateFormData} handleSuggestionClick={handleSuggestionClick} />}
    {currentStep === 2 && <FormStep2 onBack={prevStep} onNext={nextStep} formData={formData} updateFormData={updateFormData} handleSuggestionClick={handleSuggestionClick} />}
    {currentStep === 3 && <FormStep3 onBack={prevStep} onNext={nextStep} formData={formData} updateFormData={updateFormData} handleSuggestionClick={handleSuggestionClick} />}
    {currentStep === 4 && <Results formData={formData}/>}
  </div>
  )
}

export default Form