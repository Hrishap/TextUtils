import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
 const[mode,setMode] = useState("light");
  const[alert , setAlert]=useState(null);
  const showAlert =(message,type)=>
{
 setAlert({
  msg:message,
  type:type
 }) 
 setTimeout(() => {
  setAlert(null);
 }, 2000);
}
 const toggleMode =() =>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor='#6c757d';
    showAlert("Dark mode has been enabled","success")
  }
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enabled","success");

  }
 }
  return (
    <div>
<Navbar title="LAW" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
<TextForm heading="Enter your text below to analyse" showAlert={showAlert} mode={mode}/>
</div>

    </div>
  );
}

export default App;
