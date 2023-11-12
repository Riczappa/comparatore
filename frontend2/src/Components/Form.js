import React, {useState, useEffect} from 'react'
import Results from './Results';

function FormStep1({ onNext, formData, updateFormData }) {
    return (
      <div>
        <h1>inserisci il capitale da investire</h1>
        <input
          type="text" 
          value={formData.capital} 
          onChange={(e) => updateFormData('capital', e.target.value)} 
          placeholder="Inserisci un valore" 
         
         />

        <button onClick={onNext}>Avanti</button>
      </div>
    );
  }
  


  
  function FormStep2({ onBack, onNext, formData, updateFormData}) {
    return (
      <div>
       <h1>Inserisci gli anni</h1>
       <input 
        type="number" 
        value={formData.years} 
        onChange={(e) => updateFormData('years', e.target.value)} 
        placeholder="Inserisci il numero di anni" 
      />
        <button onClick={onBack}>Indietro</button>
        <button onClick={onNext}>Avanti</button>
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