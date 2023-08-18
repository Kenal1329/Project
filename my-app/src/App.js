import React, {useState} from 'react'
import './App.css';
import About from './Components/About';
import Form from './Components/Form';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';
import {
  BrowserRouter as Main, Route, Routes, Link} from "react-router-dom";


function App() {
  const[mode,setMode]= useState("light")

  const[alert,setAlert]=useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg : message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }
 const toggleMode = () => {
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = "#00122c"
      showAlert("Dark Mode Has Been Enable","success")
    } else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light Mode Has Been Enable","success")
    }

  }
  return (
    <>
    <Main>
<Navbar title="MyApp"  mode={mode} toggleMode={toggleMode}/>
{/* <About mode={mode} /> */}
<Alert alert={alert} />
{/* <Form heading="Please Enter Your Text For Analysize Below " mode={mode} showAlert={showAlert}/> */}
          <Link></Link>
          <Routes>
          <Route exact path="/About" element={ <About mode={mode} />} />
          <Route exact path="/" element={<Form heading="Please Enter Your Text For Analysize Below " mode={mode} showAlert={showAlert}/>} />
         </Routes>
</Main>
</>
  );
}

export default App;

