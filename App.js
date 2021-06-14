import React,{useState} from 'react'
import './App.css';
import {Form1} from './components/form1'
import {Form2} from './components/form2'
import {Form3} from './components/form3'

function App() {

  const [state,setState] = useState('none');
  const [state2,setState2] = useState('none');
  const [state3,setState3] = useState('none');



  return (
    <div className="App">
        <button className="login" onClick={()=>{setState(!state);setState2('none');setState3('none')}}>Login</button><br></br><br></br>
        <div style={{display:state}}>
        <Form1  /><br></br><br></br></div>

        
        <button className="login" onClick={()=>{setState2(!state2);setState('none');setState3('none')}}>Create Account</button><br></br><br></br>
        <div style={{display:state2}}>
        <Form2 /><br></br><br></br></div>

      
        <button className="login" onClick={()=>{setState3(!state3);setState('none');setState2('none')}}>Enter as Guest</button><br></br><br></br>
        <div style={{display:state3}}><Form3 /></div>
        
    </div>
  );
}

export default App;
