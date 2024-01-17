import React,{useState} from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function QuestAns() {

    const [openQuestion, setOpenQuestion] = useState(null)
    const qaList = [
        { question: "Cosa implica un conto di deposito e come opera?", answer: "Un conto di deposito rappresenta un'opzione per guadagnare interessi più elevati sui fondi investiti. Si ha la possibilità di scegliere tra un conto di deposito libero o vincolato, con quest'ultimo offrendo tassi di interesse più alti rispetto ai conti correnti tradizionali." },
        { question: "Come avviene l'apertura di un conto di deposito?", answer: "Prima di procedere con l'apertura di un conto di deposito, è fondamentale leggere attentamente le condizioni associate, in particolare il foglio informativo, e rispettare le normative vigenti sulla trasparenza bancaria e la protezione dei dati personali." },
        { question: "Quali documenti sono necessari per iniziare un conto di deposito?", answer: "Per aprire un conto di deposito, solitamente sono richiesti un documento d'identità, il codice fiscale e, in alcuni casi, un certificato di residenza, ma quest'ultimo requisito può variare da banca a banca." },
        { question: "Quali costi possono essere associati a un conto di deposito?", answer: "La maggior parte delle spese solitamente legate a un conto di deposito sono limitate o addirittura assenti, considerando la natura limitata delle operazioni consentite. Tuttavia, esistono alcune spese da considerare." },
      ];

      const toggleQuestion = (index) => {
        setOpenQuestion(openQuestion === index ? null : index);
      };

  return (
    <div className='container mx-auto p-4'>
      {qaList.map((item, index) => (
        <div key={index} className='mb-2 border-b border-white'>
          <button 
            className='flex w-full justify-between items-center text-left text-lg font-semibold text-white p-2 rounded'
            onClick={() => toggleQuestion(index)}
          >
            {item.question}  <ArrowForwardIosIcon 
              className={`transition-transform duration-500 ml-2 `}
              style={{ fontSize: 20, transform: openQuestion === index ? 'rotate(270deg)' : 'rotate(90deg)',  transition: 'transform 0.5s ease'}}
              
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-1000 ${openQuestion === index ? 'max-h-96' : 'max-h-0'}`}
          >
            {openQuestion === index && (
              <div className='mt-2 text-white text-left p-2 rounded mb-4'>
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        </div>
      ))}

    </div>
    
  )
}

export default QuestAns