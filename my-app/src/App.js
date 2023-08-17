import React, {useState} from 'react'
import './App.css';
// import About from './Components/About';
import Form from './Components/Form';
import Navbar from './Components/Navbar';
import Alert from './Components/Alert';


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
<Navbar title="MyApp"  mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert} />
<Form heading="Please Enter Your Text For Analysize Below " mode={mode} showAlert={showAlert}/>
{/* <About /> */}
    </>
  );
}

export default App;

