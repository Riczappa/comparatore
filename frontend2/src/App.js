import logo from './logo.svg';
import './App.css';
import Results from './Components/Results';
import Form from './Components/Form';
import Head from './Components/Head';
import Footer from "./Components/Footer"

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <div className='flex-grow bg-green-300 p-1'>
        <Head />
        <Form />
      </div>
      <Footer />
    </div>
  );
}

export default App;
