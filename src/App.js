import React, {useState} from 'react'
import './App.css';
//import About from './About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type

    })

  }

  const toggleMode = ()=>{
     if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success"); 
     }
     else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success"); 
     }
  }
  return (
    <>
      <Navbar title="TextUtils New" mode={mode} toggleMode={toggleMode} aboutText="About Textutils " homeUtils="Home react" />
      <Alert alert={alert}/>
      <div className="container my-3">

      <Textform heading="Enter text to analyze" mode={mode}/>
      {/*<About/>*/}
      </div>



    </>
  );
}
export default App;



