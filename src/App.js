// import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Footer from './components/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
 

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type, 
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleM = ()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.background='#042743';
      showAlert("Dark mode has been enabled","success");
      document.title='TextUtils - Dark Mode';
    }
  else{
       setMode('light');
      document.body.style.background='white';
      showAlert("light mode has been enabled","success");
      document.title='TextUtils - Light Mode'
    }
  }
  return (
    <>
    <Router>
      {/* <Navbar title="TextUtils" aboutText="About text"/> */}
      {/* <Navbar/> */}
      <Navbar title="TextAnalyzer" mode={mode} toggleM={toggleM} />
      <Alert alert={alert}/>
      <div className="container my-3" >
        <Switch>
            <Route exact path="/about">
              <About mode={mode} />
             </Route>
             <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Try TextAnalyzer - word Counter,Character Counter,Remove extra spaces" mode={mode}/>
            </Route>
        </Switch>
      </div>
      <Footer mode={mode} />
        {/* <About/> */}
    </Router>
    </>
  );
}

export default App;
