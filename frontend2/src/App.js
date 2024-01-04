import './App.css';
import Form from './Components/Form';
import Footer from "./Components/Footer"
import HeaderLogo from './Components/HeaderLogo';


function App() {
  return (
    <div className="App flex flex-col h-screen">
      <HeaderLogo/>
      <div className='flex-grow bg-mediumBlue p-1'>
        
        <div className='mt-14'></div>
        
        <Form />
      </div>
      <Footer />
    </div>
  );
}

export default App;
