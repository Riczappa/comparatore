import React, { useState, useEffect } from 'react'
import Results from './Results';
import AccountTypesInfo from './AccountTypesInfo';

function FormStep1({ onNext, formData, updateFormData, handleSuggestionClick }) {


  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex flex-col items-center"  style={{ height: "220px" }}>
      <div className="w-full text-center">
        <h2 className="text-lg md:text-xl font-medium text-black">Quanto vuoi investire?</h2>
       
        <div className="flex space-x-2 mt-2 justify-center">
          {/* Esempi di suggerimenti */}
          <button className="suggestion-button" onClick={() => handleSuggestionClick('capital', 5000)}>€5.000</button>
          <button className="suggestion-button" onClick={() => handleSuggestionClick('capital', 10000)}>€10.000</button>
          <button className="suggestion-button" onClick={() => handleSuggestionClick('capital', 20000)}>€20.000</button>
        </div>
        <input
          type="number"
          className="mt-2 p-2 border rounded-lg w-full"
          value={formData.capital}
          onChange={(e) => updateFormData('capital', e.target.value)}
          placeholder="Oppure selezionalo manualmente"
        />
        <button className=" next-button mt-4" onClick={onNext}>Avanti</button>
      </div>
    </div>);
}




function FormStep2({ onBack, onNext, formData, updateFormData, handleSuggestionClick }) {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex flex-col items-center"  style={{ height: "220px" }}>
      <h2 className="text-lg md:text-xl font-medium text-black text-center">Per quanti anni vuoi investire?</h2>
     
      <div className="flex space-x-2 mt-2">
        {/* Esempi di suggerimenti */}
        <button className="suggestion-button" onClick={() => handleSuggestionClick('years', 2)}>2 yrs</button>
        <button className="suggestion-button" onClick={() => handleSuggestionClick('years', 5)}>5 yrs</button>
        <button className="suggestion-button" onClick={() => handleSuggestionClick('years', 10)}>10 yrs</button>
       
      </div>
      <input
        type="number"
        className="mt-1 md:mt-2 p-2 border rounded-lg w-64"
        min="1"
        max="30"
        value={formData.years}
        onChange={(e) => updateFormData('years', e.target.value)}
        placeholder="Oppure Inserisci manualmente"
      />
      <div className="flex space-x-4 mt-4">
        <button className="next-button" onClick={onBack}>Indietro</button>
        <button className="back-button" onClick={onNext}>Avanti</button>
      </div>
    </div>
  );
}


function FormStep3({ onBack, onNext, formData, updateFormData, handleSuggestionClick }) {


  return (
    <div>
      <div className="flex flex-col justify-between p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md" style={{ height: "220px" }}>
        <div className='flex-grow text-center'>
          <h2 className="text-lg md:text-xl font-medium text-black">Capitale vincolato?</h2>
          <div className="inline-flex space-x-2 mt-2 justify-center">
            <button className="suggestion-button" onClick={() => handleSuggestionClick('vincolato', "si")}>si</button>
            <button className="suggestion-button" onClick={() => handleSuggestionClick('vincolato', "no")}>no</button>
            <button className="suggestion-button" onClick={() => handleSuggestionClick('vincolato', "indif")}>indifferente</button>
          </div>
        </div>
        <div className="flex justify-center space-x-4 mt-4">
          <button className="next-button" onClick={onBack}>Indietro</button>
          <button className="back-button" onClick={onNext}>Avanti</button>
        </div>
      </div>

      <AccountTypesInfo />
    </div>
  );
}

function Form() {

  const [currentStep, setCurrentstep] = useState(1)
  const nextStep = () => {
    setAnimClass('slide-out');
    setTimeout(() => {
      setCurrentstep((prev) => prev + 1);
      setAnimClass('slide-in');
    }, 500); // timeout duration should match the CSS animation duration
  };
  const prevStep = () => {
    setAnimClass('slide-out');
    setTimeout(() => {
      setCurrentstep((prev) => prev - 1);
      setAnimClass('slide-in');
    }, 500);
  };
  const [animClass, setAnimClass] = useState('slide-in');


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
    <div className='p-2'>
      <div className={animClass}>
        {currentStep === 1 && <FormStep1 onNext={nextStep} formData={formData} updateFormData={updateFormData} handleSuggestionClick={handleSuggestionClick} />}
      </div>
      <div className={animClass}>
        {currentStep === 2 && <FormStep2 onBack={prevStep} onNext={nextStep} formData={formData} updateFormData={updateFormData} handleSuggestionClick={handleSuggestionClick} />}
      </div>
      <div className={animClass}>
        {currentStep === 3 && <FormStep3 onBack={prevStep} onNext={nextStep} formData={formData} updateFormData={updateFormData} handleSuggestionClick={handleSuggestionClick} />}
      </div>
      <div className={animClass}>
        {currentStep === 4 && <Results formData={formData} setFormData={setFormData} />}
      </div>
    </div>
  )
}

export default Form