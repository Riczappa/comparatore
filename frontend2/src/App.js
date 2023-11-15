import logo from './logo.svg';
import './App.css';
import Results from './Components/Results';
import Form from './Components/Form';

function App() {
  return (
    <div className="App">
      <div className='min-h-screen bg-green-400'>
      <h1 className='text-3xl font-bold bg-white mb-4 inline-block p-2'>Comparatore di tariffe</h1>
     <Form/>
     
     </div>
    </div>
  );
}

export default App;
