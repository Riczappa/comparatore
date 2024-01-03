import logo from './logo.svg';
import './App.css';
import Results from './Components/Results';
import Form from './Components/Form';
import Head from './Components/Head';
import Footer from "./Components/Footer"
import HeaderLogo from './Components/HeaderLogo';


function App() {
  return (
    <div className="App flex flex-col h-screen">
      <div className='flex-grow bg-customGreen p-1'>
        <HeaderLogo/>
        <div className='mt-14'></div>
        
        <Form />
      </div>
      <Footer />
    </div>
  );
}

export default App;
