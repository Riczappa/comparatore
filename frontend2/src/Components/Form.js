import React, { useState, useEffect } from 'react'
import Results from './Results';
import AccountTypesInfo from './AccountTypesInfo';
import { ReactComponent as MoneyIcon } from "../images/MoneyIcon.svg"
import { ReactComponent as TimeIcon } from "../images/TimeIcon.svg"
import Head from './Head';
import YearsInfo from './YearsInfo';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function FormStep1({ invalidAttempt, onNext, formData, updateFormData, handleSuggestionClick }) {


  return (
    <div>
      <div className=" p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex flex-col items-center justify-between" style={{ height: "270px" }}>
        <div className="w-full text-center flex flex-col flex-grow">
          <h2 className="text-lg md:text-xl font-medium text-black">Quanto vuoi investire?</h2>

          <div className="flex space-x-2 mt-2 justify-center">
            {/* Esempi di suggerimenti */}
            <button className="suggestion-button" onClick={() => handleSuggestionClick('capital', 5000)}>€5.000</button>
            <button className="suggestion-button" onClick={() => handleSuggestionClick('capital', 10000)}>€10.000</button>
            <button className="suggestion-button" onClick={() => handleSuggestionClick('capital', 20000)}>€20.000</button>
          </div>
          <input
            type="number"
            className="mt-2 p-2 border rounded-lg w-64 mx-auto"
            value={formData.capital}
            onChange={(e) => updateFormData('capital', e.target.value)}
            placeholder="Oppure scrivi l'importo"
          />
          {invalidAttempt && formData.capital === '' &&
            <div style={{ color: 'red' }}>Seleziona l'importo per continuare</div>
          }
          <div className="flex-grow"></div>
          <div className='flex justify-center'>
            <button className="next-button mt-4 " onClick={onNext}>Avanti</button>
          </div>
        </div>

      </div>
      <div className='mt-5 flex items-center justify-center'>
        <KeyboardArrowUpIcon
        sx={{color:'black', fontSize:40}}
        />
        <h1 className="  ml-2 text-2xl font-bold inline-block p-0">
        Prova il nostro simulatore
      </h1></div>
    </div>);
}




function FormStep2({ onBack, onNext, formData, updateFormData, handleSuggestionClick }) {
  return (
    <div>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex flex-col items-center" style={{ height: "270px" }}>
        <h2 className="text-lg md:text-xl font-medium text-black text-center">Per quanti mesi vuoi investire?</h2>

        <div className="flex space-x-2 mt-2">
          {/* Esempi di suggerimenti */}
          <button className="suggestion-button" onClick={() => handleSuggestionClick('months', 6)}>6</button>
          <button className="suggestion-button" onClick={() => handleSuggestionClick('months', 12)}>12</button>
          <button className="suggestion-button" onClick={() => handleSuggestionClick('months', 18)}>18</button>
          <button className="suggestion-button" onClick={() => handleSuggestionClick('months', 24)}>24</button>
          <button className="suggestion-button" onClick={() => handleSuggestionClick('months', 36)}>36</button>

        </div>
        <TimeIcon className="max-w-full" />
        {/*<input
        type="number"
        className="mt-1 md:mt-2 p-2 border rounded-lg w-64"
        min="1"
        max="30"
        value={formData.years}
        onChange={(e) => updateFormData('months', e.target.value)}
        placeholder="Oppure Inserisci manualmente"
  /> */}
        <div className="bottom-5  flex space-x-4">
          <button className="back-button" onClick={onBack}>Indietro</button>

        </div>

      </div>
      <YearsInfo />
    </div>
  );
}


function FormStep3({ onBack, onNext, formData, updateFormData, handleSuggestionClick }) {


  return (
    <div>
      <div className="flex flex-col items-center p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md" style={{ height: "270px" }}>
        <div className='flex-grow text-center'>
          <h2 className="text-lg md:text-xl font-medium text-black">Capitale vincolato?</h2>
          <div className="inline-flex space-x-2 mt-2 justify-center">
            <button className="suggestion-button" onClick={() => handleSuggestionClick('vincolato', "si")}>si</button>
            <button className="suggestion-button" onClick={() => handleSuggestionClick('vincolato', "no")}>no</button>
            <button className="suggestion-button" onClick={() => handleSuggestionClick('vincolato', "indif")}>indifferente</button>
          </div>
        </div>
        <MoneyIcon className="mt-2 max-w-full"></MoneyIcon>
        <div className="relative bottom-0  flex space-x-4 mt-1">
          <button className="back-button" onClick={onBack}>Indietro</button>
        </div>
      </div>

      <AccountTypesInfo />
    </div>
  );
}

function Form() {

  const [currentStep, setCurrentstep] = useState(1)
  const [invalidAttempt, setInvalidAttempt] = useState(false);

  const nextStep = () => {
    if ((currentStep === 1 && formData.capital === '') ||
      (currentStep === 2 && formData.years === '')) {
      // Se il campo capitale è vuoto, non fare nulla
      setInvalidAttempt(true)
      return;
    }
    setInvalidAttempt(false)
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
    capital: "",
    years: '',
    vincolato: "indif"
  });

  const updateFormData = (key, value) => {
    setFormData(prevState => ({ ...prevState, [key]: value }));
  };
  const handleSuggestionClick = (field, value) => {
    setInvalidAttempt(false)
    updateFormData(field, value);
    setAnimClass('slide-out');
    setTimeout(() => {
      setCurrentstep((prev) => prev + 1);
      setAnimClass('slide-in');
    }, 500);
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
      {currentStep >= 1 && currentStep <= 3 && <Head></Head>}
      <div className={animClass}>
        {currentStep === 1 && <FormStep1 invalidAttempt={invalidAttempt} onNext={nextStep} formData={formData} updateFormData={updateFormData} handleSuggestionClick={handleSuggestionClick} />}
      </div>
      <div className={animClass}>
        {currentStep === 2 && <FormStep2 invalidAttempt={invalidAttempt} onBack={prevStep} onNext={nextStep} formData={formData} updateFormData={updateFormData} handleSuggestionClick={handleSuggestionClick} />}
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