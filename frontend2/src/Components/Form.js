import React, {useState, useEffect} from 'react'
import Results from './Results';

function FormStep1({ onNext, formData, updateFormData }) {
    return (
        <div className="p-6 max-w-sm mx-2 md:mx-auto  bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div className="flex-shrink-0">
          {/* Icona o immagine se necessario */}
        </div>
        <div>
          <h2 className="text-lg md:text-xl  font-medium text-black">Quanto vuoi investire?</h2>
          <input 
            type="number" 
            className="mt-1 md:mt-2 p-2 border rounded-lg w-full"
            value={formData.capital} 
            onChange={(e) => updateFormData('capital', e.target.value)} 
            placeholder="Inserisci l'importo" 
          />
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"  onClick={onNext}>Avanti</button>
        </div>
      </div>
    );
  }
  


  
  function FormStep2({ onBack, onNext, formData, updateFormData}) {
    return (
        <div className="p-6 max-w-sm mx-2 md:mx-auto bg-white rounded-xl shadow-md flex flex-col items-center">
        <h2 className="text-lg md:text-xl font-medium text-black">Per quanti anni vuoi investire?</h2>
        <input 
          type="number" 
          className="mt-1 md:mt-2 p-2 border rounded-lg w-full"
          min="1"
          max="30"
          value={formData.years} 
          onChange={(e) => updateFormData('years', e.target.value)} 
          placeholder="Inserisci il numero di anni" 
        />
        <div className="flex space-x-4 mt-4">
          <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700" onClick={onBack}>Indietro</button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" onClick={onNext}>Avanti</button>
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
    {currentStep === 1 && <FormStep1 onNext={nextStep} formData={formData} updateFormData={updateFormData} />}
    {currentStep === 2 && <FormStep2 onBack={prevStep} onNext={nextStep} formData={formData} updateFormData={updateFormData} />}
    {currentStep === 3 && <Results formData={formData}/>}
  </div>
  )
}

export default Form