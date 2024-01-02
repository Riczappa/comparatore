import logo from './logo.svg';
import './App.css';
import Results from './Components/Results';
import Form from './Components/Form';
import Head from './Components/Head';
import Footer from "./Components/Footer"
import HeaderLogo from './Components/HeaderLogo';


function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <div className='flex-grow bg-blue-100 p-1'>
        <HeaderLogo/>
        <div className='mt-16'></div>
        
        <Form />
      </div>
      <Footer />
    </div>
  );
}

export default App;
